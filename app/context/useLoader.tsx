import { createContext, useContext, useState } from "react";

type LoaderContextType = {
  loading: boolean;
  setLoading: (boolean: boolean) => void;
};

type LoaderContextProviderProps = {
  children: React.ReactNode;
};

const LoaderContext = createContext<LoaderContextType | null>(null);

export const LoaderContextProvider = ({
  children,
}: LoaderContextProviderProps) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoading must be used within LoaderContextProvider");
  }
  return context;
};
