import { Issue } from "@/components/IssueCard";

// Mock data for issues
const mockIssues: Issue[] = [
  {
    id: "1",
    title: "Fix: Dropdown menu doesn't close when clicking outside",
    repo: {
      name: "react-ui-components",
      owner: "opencodelab",
      url: "https://github.com/opencodelab/react-ui-components",
      stars: 1284,
    },
    labels: [
      { name: "bug", color: "d73a4a" },
      { name: "good first issue", color: "7057ff" },
    ],
    createdAt: "2 days ago",
    commentsCount: 3,
    url: "https://github.com/opencodelab/react-ui-components/issues/123",
  },
  {
    id: "2",
    title: "Documentation: Add examples for new form components",
    repo: {
      name: "vue-design-system",
      owner: "designhubio",
      url: "https://github.com/designhubio/vue-design-system",
      stars: 945,
    },
    labels: [
      { name: "documentation", color: "0075ca" },
      { name: "help wanted", color: "008672" },
    ],
    createdAt: "1 week ago",
    commentsCount: 1,
    url: "https://github.com/designhubio/vue-design-system/issues/87",
  },
  {
    id: "3",
    title: "Enhancement: Add dark mode support to theme configuration",
    repo: {
      name: "tailwind-helpers",
      owner: "uicraft",
      url: "https://github.com/uicraft/tailwind-helpers",
      stars: 736,
    },
    labels: [
      { name: "enhancement", color: "a2eeef" },
      { name: "beginner friendly", color: "7057ff" },
    ],
    createdAt: "3 days ago",
    commentsCount: 5,
    url: "https://github.com/uicraft/tailwind-helpers/issues/42",
  },
  {
    id: "4",
    title: "Feature: Add support for CSV export in data tables",
    repo: {
      name: "react-data-grid",
      owner: "devtools",
      url: "https://github.com/devtools/react-data-grid",
      stars: 2142,
    },
    labels: [
      { name: "feature", color: "0e8a16" },
      { name: "good first issue", color: "7057ff" },
    ],
    createdAt: "5 days ago",
    commentsCount: 2,
    url: "https://github.com/devtools/react-data-grid/issues/154",
  },
  {
    id: "5",
    title: "Fix: Mobile navigation menu not responding to touch events",
    repo: {
      name: "responsive-layout",
      owner: "mobileui",
      url: "https://github.com/mobileui/responsive-layout",
      stars: 512,
    },
    labels: [
      { name: "bug", color: "d73a4a" },
      { name: "mobile", color: "fbca04" },
      { name: "help wanted", color: "008672" },
    ],
    createdAt: "1 day ago",
    commentsCount: 0,
    url: "https://github.com/mobileui/responsive-layout/issues/76",
  },
  {
    id: "6",
    title: "Accessibility: Improve screen reader support for dialog components",
    repo: {
      name: "a11y-components",
      owner: "accessibleui",
      url: "https://github.com/accessibleui/a11y-components",
      stars: 872,
    },
    labels: [
      { name: "accessibility", color: "0075ca" },
      { name: "good first issue", color: "7057ff" },
    ],
    createdAt: "4 days ago",
    commentsCount: 7,
    url: "https://github.com/accessibleui/a11y-components/issues/29",
  },
];

// Mock search function
export const searchIssues = async (query: string): Promise<Issue[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  
  if (!query) return mockIssues;
  
  const lowercaseQuery = query.toLowerCase();
  return mockIssues.filter(
    (issue) =>
      issue.title.toLowerCase().includes(lowercaseQuery) ||
      issue.repo.name.toLowerCase().includes(lowercaseQuery) ||
      issue.repo.owner.toLowerCase().includes(lowercaseQuery) ||
      issue.labels.some((label) => label.name.toLowerCase().includes(lowercaseQuery))
  );
};

// Mock function to get all issues
export const getIssues = async (): Promise<Issue[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  return mockIssues;
};
