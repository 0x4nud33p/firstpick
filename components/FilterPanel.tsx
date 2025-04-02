
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

interface FilterCategory {
  id: string;
  title: string;
  options: FilterOption[];
}

const languageOptions: FilterOption[] = [
  { id: "javascript", label: "JavaScript", count: 138 },
  { id: "typescript", label: "TypeScript", count: 97 },
  { id: "python", label: "Python", count: 85 },
  { id: "java", label: "Java", count: 42 },
  { id: "go", label: "Go", count: 37 },
  { id: "rust", label: "Rust", count: 29 },
];

const tagOptions: FilterOption[] = [
  { id: "good-first-issue", label: "Good First Issue", count: 214 },
  { id: "help-wanted", label: "Help Wanted", count: 142 },
  { id: "documentation", label: "Documentation", count: 86 },
  { id: "bug", label: "Bug", count: 73 },
  { id: "enhancement", label: "Enhancement", count: 54 },
];

const difficultyOptions: FilterOption[] = [
  { id: "beginner", label: "Beginner", count: 187 },
  { id: "intermediate", label: "Intermediate", count: 96 },
  { id: "advanced", label: "Advanced", count: 42 },
];

const filterCategories: FilterCategory[] = [
  { id: "languages", title: "Languages", options: languageOptions },
  { id: "tags", title: "Tags", options: tagOptions },
  { id: "difficulty", title: "Difficulty", options: difficultyOptions },
];

const FilterPanel = () => {
  return (
    <div className="w-full bg-card rounded-lg border p-4 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Filters</h3>
        <Button variant="ghost" size="sm" className="text-xs">
          Reset All
        </Button>
      </div>
      
      <Accordion type="multiple" defaultValue={filterCategories.map(cat => cat.id)}>
        {filterCategories.map((category) => (
          <AccordionItem key={category.id} value={category.id}>
            <AccordionTrigger className="py-3 text-sm font-medium">
              {category.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-1 pb-2">
                {category.options.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <Checkbox id={option.id} />
                    <label
                      htmlFor={option.id}
                      className="text-sm flex-1 cursor-pointer"
                    >
                      {option.label}
                    </label>
                    {option.count && (
                      <Badge variant="secondary" className="text-xs font-normal">
                        {option.count}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FilterPanel;
