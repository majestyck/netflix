import { ChangeEvent, useCallback, useEffect, useState } from "react";
import './SearchBar.css'
import SearchDropdown from "src/components/SearchBar/SearchDropdown/SearchDropdown.tsx";
import { useSearch } from "src/hooks/useTmdbSearch.ts";
import { Movie, Show } from "src/types";

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<(Movie|Show)[]>([]);
  const { search } = useSearch();
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

  const clearSearch = useCallback(() => {
    setQuery('');
    setResults([]);
  }, [setQuery, setResults]);

  useEffect(() => {
    return () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
    };
  }, [debounceTimeout]);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    const timeout = setTimeout(() => {
      search(e.target.value).then((response) => setResults(response.results));
    }, 300);
    setDebounceTimeout(timeout);
  };

  return (
    <div className="search-bar">
      <input type="text" value={query} onInput={onInputChange} placeholder="Search"></input>
      {results && query.trim().length > 0 && <SearchDropdown results={results} clearSearch={clearSearch}/>}
    </div>
  );
};

export default SearchBar
