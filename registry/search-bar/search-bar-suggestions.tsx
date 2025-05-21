"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { useQueryState, parseAsString } from "nuqs";
import { Loader2Icon, SearchIcon, XIcon } from "lucide-react";

import { useDebounce } from "@/hooks/use-debounce";
import { cn } from "@/lib/utils";

// Code at https://github.com/R4ULtv/ui/tree/master/server/search-frameworks.tsx
import { searchFrameworks, Framework } from "@/server/search-frameworks";

export default function SearchBarSuggestions() {
  const [query, setQuery] = useQueryState("framework", parseAsString);
  const [inputValue, setInputValue] = React.useState(query || "");
  const debouncedInput = useDebounce(inputValue, 200);

  const [suggestions, setSuggestions] = React.useState<Framework[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const clearQuery = React.useCallback(() => {
    setInputValue("");
    setQuery(null);
    setSuggestions([]);
  }, [setQuery]);

  const handleInputChange = React.useCallback((value: string) => {
    setInputValue(value);
  }, []);

  const handleSelect = React.useCallback(
    (value: string) => {
      setQuery(value);
      setInputValue(value);
    },
    [setQuery],
  );

  React.useEffect(() => {
    if (!debouncedInput || debouncedInput.length < 2) {
      setSuggestions([]);
      setIsLoading(false);
      return;
    }
    const getSuggestions = async () => {
      if (debouncedInput && debouncedInput.length > 0) {
        setIsLoading(true);
        const data = await searchFrameworks(debouncedInput);
        setSuggestions(data);
        setIsLoading(false);
      } else {
        setSuggestions([]);
        setIsLoading(false);
      }
    };
    getSuggestions();
  }, [debouncedInput]);

  return (
    <Command
      shouldFilter={false}
      className="w-full max-w-[322px] bg-input/30 border"
    >
      <div
        className={cn(
          "relative [&_div[data-slot='command-input-wrapper']]:h-10",
          suggestions.length > 0
            ? "[&_div[data-slot='command-input-wrapper']]:border-b"
            : "[&_div[data-slot='command-input-wrapper']]:border-0",
        )}
      >
        <CommandInput
          className="peer pe-9"
          placeholder="Search frameworks..."
          value={inputValue}
          onValueChange={handleInputChange}
          autoComplete="off"
          aria-label="Search input"
        />
        {inputValue && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={clearQuery}
            aria-label={isLoading ? "Loading suggestions..." : "Clear search"}
            disabled={isLoading}
            className="text-muted-foreground hover:text-foreground hover:bg-transparent dark:hover:bg-transparent absolute inset-y-0 end-0 h-full w-10 transition-colors"
          >
            {isLoading ? (
              <Loader2Icon
                aria-hidden="true"
                className="animate-spin text-foreground"
              />
            ) : (
              <XIcon
                aria-hidden="true"
                className="animate-in fade-in zoom-in-95"
              />
            )}
          </Button>
        )}
      </div>
      {suggestions.length > 0 && (
        <CommandList>
          <CommandGroup heading="Suggestions">
            {suggestions.map((framework) => (
              <CommandItem
                key={framework.id}
                value={framework.id}
                onSelect={handleSelect}
                className="flex flex-row items-center cursor-pointer"
              >
                <span className="font-medium shrink-0">{framework.name}</span>
                <span className="text-xs text-muted-foreground truncate">
                  {framework.description}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      )}
    </Command>
  );
}
