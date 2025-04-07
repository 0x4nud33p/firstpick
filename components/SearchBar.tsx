"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { languageOptions, tagOptions } from "@/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { fetchIssues, setFilter } from "@/redux/features/issueSlice";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("search") as string;
    setSearchQuery(query);
    handleSearch(query);
  };

  const handleSearch = (query: string) => {
  const languageMatch = languageOptions.find(option =>
    option.id.toLowerCase().includes(query.toLowerCase())
  );
  const tagMatch = tagOptions.find(option =>
    option.id.toLowerCase().includes(query.toLowerCase())
  );

  if (languageMatch) {
    dispatch(setFilter({ language: languageMatch.id }));
    dispatch(fetchIssues());
  } else if (tagMatch) {
    console.log("Tag match:", tagMatch.id);
    dispatch(setFilter({ tag: tagMatch.id }));
    dispatch(fetchIssues());
  } else {
    console.log("Repo match:", query);
    // dispatch(setFilter({ repo: query }));
    // dispatch(fetchIssues());
  }
};


  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-2xl mx-auto">
      <div className="relative flex w-full">
        <Input
          name="search"
          placeholder="Search issues by keywords, repository, or language..."
          className="w-full pr-10 h-11 shadow-sm text-xs"
        />
        <Button
          type="submit"
          size="sm"
          className="absolute right-1 top-1/2 -translate-y-1/2"
        >
          <SearchIcon className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
