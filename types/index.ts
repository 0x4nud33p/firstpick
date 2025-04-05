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
}

export interface IssueState {
  filters: Filters;
  issues: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

export const languageOptions: FilterOption[] = [
  { id: "javascript", label: "JavaScript", count: 138 },
  { id: "typescript", label: "TypeScript", count: 97 },
  { id: "python", label: "Python", count: 85 },
  { id: "java", label: "Java", count: 42 },
  { id: "go", label: "Go", count: 37 },
  { id: "rust", label: "Rust", count: 29 },
];

export const tagOptions: FilterOption[] = [
  { id: "good-first-issue", label: "Good First Issue", count: 214 },
  { id: "help-wanted", label: "Help Wanted", count: 142 },
  { id: "documentation", label: "Documentation", count: 86 },
  { id: "bug", label: "Bug", count: 73 },
  { id: "enhancement", label: "Enhancement", count: 54 },
];

export const difficultyOptions: FilterOption[] = [
  { id: "beginner", label: "Beginner", count: 187 },
  { id: "intermediate", label: "Intermediate", count: 96 },
  { id: "advanced", label: "Advanced", count: 42 },
];

export const filterCategories: FilterCategory[] = [
  { id: "language", title: "Languages", options: languageOptions },
  { id: "tag", title: "Tags", options: tagOptions },
  { id: "difficulty", title: "Difficulty", options: difficultyOptions },
];