"use client";

import FilterPanel from "@/components/FilterPanel";
import Footer from "@/components/Footer";
import { Issue } from "@/components/IssueCard";
import IssueList from "@/components/IssueList";
import SearchBar from "@/components/SearchBar";
import Navbar from "@/components/ui/Navbar";
import { useState, useEffect } from "react";
import { getIssues } from "@/mockata/data";
import { searchIssues } from "@/mockata/data";


export default function Home() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInitialIssues = async () => {
      setIsLoading(true);
      try {
        const data = await getIssues();
        setIssues(data);
      } catch (error) {
        console.error("Failed to fetch issues:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialIssues();
  }, []);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    try {
      const results = await searchIssues(query);
      setIssues(results);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex flex-col md:ml-24">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <div className="max-w-4xl mx-auto mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Find your first open source contribution
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover beginner-friendly issues from popular open source projects
          </p>
        </div>

        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <FilterPanel />
          </div>
          <div className="md:col-span-3">
            <IssueList issues={issues} isLoading={isLoading} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}