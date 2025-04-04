"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchIssues } from "@/redux/features/issueSlice";
import type { AppDispatch, RootState } from "@/redux/store";
import IssueCard, { Issue } from "./IssueCard";

const IssueList = () => {
  const dispatch = useDispatch<AppDispatch>(); 
  const { issues, status } = useSelector((state: RootState) => state.issues);

  useEffect(() => {
    dispatch(fetchIssues());
  }, [dispatch]);
  
  if (status === "loading" || status === "idle") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="h-48 bg-card/50 animate-pulse rounded-lg border"
            />
          ))}
      </div>
    );
  }

  if (issues?.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-lg font-medium">No issues found</h3>
        <p className="text-muted-foreground mt-1">
          Try adjusting your search or filter criteria
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {issues?.map((issue: Issue) => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </div>
  );
};

export default IssueList;
