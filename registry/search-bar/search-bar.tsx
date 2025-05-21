"use client";

import * as React from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDebounce } from "@/hooks/use-debounce";

import { useQueryState, parseAsString } from "nuqs";
import { SearchIcon, XIcon } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useQueryState("search", parseAsString);
  const [inputValue, setInputValue] = React.useState(query || "");
  const debouncedInput = useDebounce(inputValue, 300);

  React.useEffect(() => {
    if (debouncedInput.trim() === "") {
      if (query !== null) setQuery(null);
    } else if (debouncedInput !== query) {
      setQuery(debouncedInput);
    }
  }, [debouncedInput, query, setQuery]);

  const clearQuery = React.useCallback(() => {
    setInputValue("");
    setQuery(null);
  }, [setQuery]);

  const handleInputChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    },
    [],
  );

  return (
    <form
      className="relative w-full max-w-xs"
      role="search"
      aria-label="Site search"
    >
      <Input
        className="peer ps-9 pe-9 h-10 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none"
        placeholder="Search..."
        type="search"
        value={inputValue}
        onChange={handleInputChange}
        autoComplete="off"
        aria-label="Search input"
      />
      <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
        <SearchIcon aria-hidden="true" className="size-4" />
      </div>
      {inputValue && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={clearQuery}
          aria-label="Clear search"
          className="text-muted-foreground hover:text-foreground hover:bg-transparent dark:hover:bg-transparent absolute inset-y-0 end-0 h-full w-10 transition-colors"
        >
          <XIcon aria-hidden="true" className="animate-in fade-in zoom-in-95" />
        </Button>
      )}
    </form>
  );
}
