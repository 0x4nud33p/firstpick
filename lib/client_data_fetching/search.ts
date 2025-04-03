import { searchIssues } from "@/mockata/data";

const handleSearch = async (query: string) => {
    try {
      const results = await searchIssues(query);
      return results;
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

export { handleSearch };