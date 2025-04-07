export interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

export interface FilterCategory {
  id: string;
  title: string;
  options: FilterOption[];
}

export interface Filters {
  language: string[];
  tag: string[];
  difficulty: string[];
  // repo?: string;
}

export interface IssueState {
  filters: Filters;
  issues: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  labels?: {} ;
  labelCounts: Record<string, number>;
}

export let languageOptions: FilterOption[] = [
  { id: 'javascript', label: 'JavaScript' },
  { id: 'typescript', label: 'TypeScript' },
  { id: 'python', label: 'Python' },
  { id: 'java', label: 'Java' },
  { id: 'go', label: 'Go' },
  { id: 'rust', label: 'Rust' },
];

export const tagOptions: FilterOption[] = [
  { id: "good-first-issue", label: "Good First Issue" },
  { id: "help-wanted", label: "Help Wanted" },
  { id: "documentation", label: "Documentation"},
  { id: "bug", label: "Bug"},
  { id: "enhancement", label: "Enhancement"},
];

export const difficultyOptions: FilterOption[] = [
  { id: "beginner", label: "Beginner"},
  { id: "intermediate", label: "Intermediate"},
  { id: "advanced", label: "Advanced"},
];

export const filterCategories: FilterCategory[] = [
  { id: "language", title: "Languages", options: languageOptions },
  { id: "tag", title: "Tags", options: tagOptions },
  { id: "difficulty", title: "Difficulty", options: difficultyOptions },
];