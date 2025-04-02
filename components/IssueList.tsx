
import IssueCard, { Issue } from "./IssueCard";

interface IssueListProps {
  issues: Issue[];
  isLoading?: boolean;
}

const IssueList = ({ issues, isLoading }: IssueListProps) => {
  if (isLoading) {
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

  if (issues.length === 0) {
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
      {issues.map((issue) => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </div>
  );
};

export default IssueList;
