import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import type { CheckOutDetailsTypes } from "~/types";

type CheckoutContextType = {
  typeCheckout: CheckOutDetailsTypes | undefined;
  setTypeCheckout: (checkout: CheckOutDetailsTypes) => void;
};

type CheckoutContextProviderProps = {
  children: React.ReactNode;
};

const CHECKOUT_STORAGE_KEY = "checkout-details";

const CheckoutContext = createContext<CheckoutContextType | null>(null);

export const CheckoutContextProvider = ({
  children,
}: CheckoutContextProviderProps) => {
  const [typeCheckout, setTypeCheckout] = useState<CheckOutDetailsTypes>();
  const navigation = useNavigate();
  const EXPIRATION_TIME = 60 * 60 * 10000000;

  useEffect(() => {
    const storedCheckOut = localStorage.getItem(CHECKOUT_STORAGE_KEY);
    if (storedCheckOut) {
      try {
        const { data, timestamp } = JSON.parse(storedCheckOut);

        const now = Date.now();
        if (now - timestamp > EXPIRATION_TIME) {
          localStorage.removeItem(CHECKOUT_STORAGE_KEY);
          setTypeCheckout(undefined);
          toast.warning("Tu sesión a expirado");
          navigation("/checkout-details");
        } else {
          setTypeCheckout(data);
        }
      } catch (error) {
        console.error("Parsing checkout error", error);
        localStorage.removeItem(CHECKOUT_STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    if (typeCheckout) {
      const payload = {
        data: typeCheckout,
        timestamp: Date.now(),
      };
      localStorage.setItem(CHECKOUT_STORAGE_KEY, JSON.stringify(payload));
    }
  }, [typeCheckout]);

  const value = {
    typeCheckout,
    setTypeCheckout,
  };

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout must be used with CheckoutContextProvider!");
  }
  return context;
};
