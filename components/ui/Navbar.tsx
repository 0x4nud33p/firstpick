"use client";

import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { GithubIcon, FilterIcon, SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "next-themes"
import Logo from "./Logo";
import { fetchIssues, setFilter } from "@/redux/features/issueSlice";
import { tagOptions } from "@/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <header className="w-full border-b border-border sticky top-0 z-10 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo />
          <div className="font-semibold text-xl flex items-center">
          First
          <span className="text-red-800 font-bold">
            Fix
          </span>
        </div>
        </div>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <FilterIcon className="h-4 w-4" />
                Filter Issues
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {
                tagOptions.map((tag) => (
                  <DropdownMenuItem 
                  key={tag.id}
                  onClick={() => {
                    dispatch(setFilter({ [tag.languagename!]: tag.label }));
                    dispatch(fetchIssues());
                  }}
                  >
                    {tag.label}
                  </DropdownMenuItem>
                ))
              }
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              if (!theme) return;
              setTheme(theme === "dark" ? "light" : "dark");
            }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </Button>

          <Button variant="outline" size="icon">
            <GithubIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
