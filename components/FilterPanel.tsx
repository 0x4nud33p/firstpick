"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { filterCategories } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { setFilter, fetchIssues, resetFilters } from "@/redux/features/issueSlice";

const FilterPanel = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filters, labelCounts } = useSelector((state: RootState) => state.issues);
  
  
  return (
    <div className="w-full bg-card rounded-lg border p-4 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Filters</h3>
        <Button 
        variant="ghost" 
        size="sm" 
        className="text-xs"
        onClick={() => {
        dispatch(resetFilters());
        dispatch(fetchIssues());
        }}
        >
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
                    <Checkbox 
                    id={option.id}
                    onCheckedChange={() => {
                      dispatch(setFilter({ [category.id]: option.label }));
                      dispatch(fetchIssues());
                    }}
                    />
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
