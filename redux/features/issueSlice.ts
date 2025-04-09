import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IssueState, Filters, languageOptions } from '@/types';

const initialState: IssueState = {
  filters: {
    language: [],
    tag: [],
    difficulty: [],
  },
  issues: [],
  // labelCounts: {} as Record<string, number>,
  status: 'idle',
};

export const fetchIssues = createAsyncThunk(
  'issues/fetchIssues',
  async (_, { getState }) => {
    const state = getState() as RootState;
    const { language, tag, difficulty } = state.issues.filters;

    let query = `q=label:"good first issue"+state:open+is:issue`;

    if (language.length) {
      query += language.map((lang) => `+language:${lang}`).join('');
    }
    if (tag.length) {
      query += tag.map((t) => `+label:${t}`).join('');
    }
    if (difficulty.length) {
      query += difficulty.map((d) => `+label:${d}`).join('');
    }

    const res = await fetch(`https://api.github.com/search/issues?${query}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      },
    });


    const data = await res.json();

    // const labelCounts: Record<string, number> = {};
    // const fetchCounts = languageOptions.map(async (lang) => {
    //   const countRes = await fetch(
    //     `https://api.github.com/search/issues?q=label:good-first-issue+language:${lang.label}`,
    //     {
    //       headers: {
    //         Accept: 'application/vnd.github+json',
    //         Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    //       }
    //     }
    //   );

    //   const countData = await countRes.json();
    //   console.log("count data in the store",countData);
    //   labelCounts[lang.label] = countData.total_count;
    // });

    // await Promise.all(fetchCounts);
    // return { issues: data.items, labelCounts };
    return { issues: data.items };
  }
);

const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<{ [key in keyof Filters]?: string }>) => {
      const [key, value] = Object.entries(action.payload)[0] as [keyof Filters, string];
      const current = state.filters[key];

      if (current.includes(value)) {
        state.filters[key] = current.filter((v) => v !== value);
      } else {
        state.filters[key] = [...current, value];
      }
    },
    resetFilters: (state) => {
      state.filters = {
        language: [],
        tag: [],
        difficulty: [],
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIssues.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchIssues.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.issues = action.payload.issues;
        // state.labelCounts = action.payload.labelCounts;
      })
      .addCase(fetchIssues.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setFilter, resetFilters } = issuesSlice.actions;
export default issuesSlice.reducer;
