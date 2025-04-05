import { GithubIcon } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="mt-auto py-6 border-t">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} FirstiFix. Find beginner-friendly issues to contribute to.
          </p>

          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-end">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link" className="text-sm">About</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@FirstiFix</h4>
                  <p className="text-sm text-muted-foreground">
                    FirstiFix helps developers find beginner-friendly GitHub issues to kickstart their open-source journey.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>

            <a
              href="https://github.com/0x4nud33p/firstpick"
              className="text-sm hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribute
            </a>

            <a
              href="https://github.com/0x4nud33p/firstpick"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm hover:text-primary transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
