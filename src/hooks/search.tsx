import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
} from 'react';

interface SearchProviderProps {
  children: ReactNode;
}

interface SearchContextData {
  search: string;
  setSearch: Dispatch<React.SetStateAction<string>>;
}

const SearchContext = createContext({} as SearchContextData);

function SearchProvider({ children }: SearchProviderProps): JSX.Element {
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

function useSearch(): SearchContextData {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearch must be used within an SearchProvider');
  }
  return context;
}

export { SearchProvider, useSearch };
