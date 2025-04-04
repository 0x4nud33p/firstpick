import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchIssues = createAsyncThunk(
  'issues/fetchIssues',
  async (_, { getState }) => {
    const state = getState() as { issues: { filters: { language: string; tag: string; difficulty: string } } };
    const { language, tag, difficulty } = state.issues.filters;
    let query = `q=label:"good first issue"+state:open+is:issue`;

    if (language) query += `+language:${language}`;
    if (tag) query += `+label:${tag}`;
    if (difficulty) query += `+label:${difficulty}`;

    const res = await fetch(`https://api.github.com/search/issues?${query}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
      },
    });
    const data = await res.json();
    return data;
  }
);

const issuesSlice = createSlice({
  name: 'issues',
  initialState: {
    filters: {
      language: '',
      tag: '',
      difficulty: '',
    },
    issues: [],
    status: 'idle',
  },
  reducers: {
    setFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIssues.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchIssues.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.issues = action.payload.items;
      })
      .addCase(fetchIssues.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setFilter } = issuesSlice.actions;
export default issuesSlice.reducer;
