
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { GithubIcon, MessageCircleIcon, CalendarIcon } from "lucide-react";
import { format } from 'date-fns';

export interface Issue {
  id: string;
  title: string;
  repository_url: string;
  repo: {
    name: string;
    owner: string;
    url: string;
    stars: number;
  };
  labels: {
    name: string;
    color: string;
    description: string;
  }[];
  created_at: string;
  comments: number;
  html_url: string;
}

interface IssueCardProps {
  issue: Issue;
}

const IssueCard = ({ issue }: IssueCardProps) => {
  return (
    <Card className="h-full flex flex-col transition-all duration-200 hover:shadow-md overflow-hidden animate-fade-in">
      <CardHeader className="pb-2">
        <div className="flex items-center text-sm text-muted-foreground gap-1">
          <span>{issue?.repository_url?.split("/")[4]}</span> {/* ["https:", "", "api.github.com", "repos", "0x4nud33p", "firstfix"] */}
          <span>/</span>
          <span className="font-medium text-foreground">{issue?.repository_url?.split("/")[5]}</span>
        </div>
        <h3 className="font-medium line-clamp-2 text-md mt-1">{issue.title}</h3>
      </CardHeader>
      <CardContent className="flex-grow pb-2">
        <div className="flex flex-wrap gap-1.5">
          {issue.labels.map((label) => (
            <Badge
              key={label.name}
              style={{
                backgroundColor: `#${label.color}20`,
                color: `#${label.color}`,
                borderColor: `#${label.color}40`,
              }}
              variant="outline"
              className="text-xs font-normal"
            >
              {label.name}
            </Badge>
          ))}
        </div>
        <div className="flex mt-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-1 mr-3">
            <CalendarIcon className="h-3.5 w-3.5" />
           <span>{format(new Date(issue.created_at), "PPP")}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircleIcon className="h-3.5 w-3.5" />
            <span>{issue.comments} comments</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button asChild className="w-full gap-2" size="sm">
          <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
            <GithubIcon className="h-4 w-4" /> View on GitHub
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default IssueCard;
