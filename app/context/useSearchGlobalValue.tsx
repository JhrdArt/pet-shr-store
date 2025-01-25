import { createContext, useContext, useState } from "react";

type SearchGlobalTypes = {
  searchGlobal: string;
  setSearchGlobal: (val: string) => void;
};

const SearchGlobalContext = createContext<SearchGlobalTypes | null>(null);

export const SearchGlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchGlobal, setSearchGlobal] = useState("");

  return (
    <SearchGlobalContext.Provider value={{ searchGlobal, setSearchGlobal }}>
      {children}
    </SearchGlobalContext.Provider>
  );
};

export const useSearchGlobal = () => {
  const context = useContext(SearchGlobalContext);
  if (!context) {
    throw new Error(
      "useSearchGlobal must be used within SearchGlobalContextProvider"
    );
  }
  return context;
};
