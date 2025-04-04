
import { GithubIcon, HeartIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-auto py-6 border-t">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} FirstFix. Find beginner-friendly issues to contribute to.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-sm hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-sm hover:text-primary transition-colors"
            >
              Contribute
            </a>
            <a
              href="https://github.com/0x4nud33p/firstpick"
              target="_blank"
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
