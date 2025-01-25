import type { headerData } from "public/data";
import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

export type NavLinksTypes = (typeof headerData.nav)[number]["name"];

type NavbarContextType = {
  navlinkHovered: NavLinksTypes | null;
  setNavlinkHovered: Dispatch<SetStateAction<NavLinksTypes | null>>;
};

type NavbarContextProviderProps = {
  children: React.ReactNode;
};

const NavbarContext = createContext<NavbarContextType | null>(null);

export const NavbarContextProvider = ({
  children,
}: NavbarContextProviderProps) => {
  const [navlinkHovered, setNavlinkHovered] = useState<NavLinksTypes | null>(
    "Perros"
  );

  const value = { navlinkHovered, setNavlinkHovered };

  return (
    <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
  );
};

export const useNavbar = () => {
  const ctx = useContext(NavbarContext);
  if (!ctx) {
    throw new Error("useNavbar must be used within NavbarContextProvider");
  }
  return ctx;
};
