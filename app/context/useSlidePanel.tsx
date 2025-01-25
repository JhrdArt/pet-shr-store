import { createContext, useContext, useState } from "react";

type SlidePanelContext = {
  activeSlidePanel: string | null;
  setActiveSlidePanel: (id: string) => void;
};

type SlidePanelContextProviderProps = {
  children: React.ReactNode;
};

const SlidePanelContext = createContext<SlidePanelContext | null>({
  activeSlidePanel: "",
  setActiveSlidePanel: () => {},
});

export const SlidePanelContextProvider = ({
  children,
}: SlidePanelContextProviderProps) => {
  const [activeSlidePanel, setActiveSlidePanel] = useState<string | null>(null);

  return (
    <SlidePanelContext.Provider
      value={{ activeSlidePanel, setActiveSlidePanel }}
    >
      {children}
    </SlidePanelContext.Provider>
  );
};

export const useSlidePanel = () => {
  const context = useContext(SlidePanelContext);
  if (!context) {
    throw new Error(
      "useSlidePanel must be used within SlidePanelContextProvider"
    );
  }
  return context;
};
