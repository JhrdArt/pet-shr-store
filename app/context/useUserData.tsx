import { createContext, useContext, useState } from "react";
import type { User } from "~/types";

type ContextTypesUser = {
  user: User;
  setUser: (user: User) => void;
};

type ContextUserDataProviderProps = {
  children: React.ReactNode;
};

const UserContext = createContext<ContextTypesUser | null>(null);

export const UserDataContextProvider = ({
  children,
}: ContextUserDataProviderProps) => {
  const [user, setUser] = useState<User>({
    name: "",
    lastName: "",
    phoneNumber: "",
  });

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserData = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserData must be used with UserDataContextProvider");
  }
  return context;
};
