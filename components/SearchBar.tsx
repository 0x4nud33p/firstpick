"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("search") as string;
    setSearchQuery(query);
  };
  
  function handleSearch(query: string){
    console.log(query);
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-2xl mx-auto">
      <div className="relative flex w-full">
        <Input
          name="search"
          placeholder="Search issues by keywords, repository, or language..."
          className="w-full pr-10 h-11 shadow-sm text-xs"
          onChange={() => handleSubmit}
        />
        <Button 
          type="submit" 
          size="sm" 
          className="absolute right-1 top-1/2 -translate-y-1/2"
          onClick={() => handleSearch(searchQuery)}
        >
          <SearchIcon className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
