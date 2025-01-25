import React, { createContext, useContext, useState, useEffect } from "react";
import type { ProductForCartShop } from "~/types";

type ProductContextType = {
  cartProducts: ProductForCartShop[];
  addToCart: (product: ProductForCartShop) => void;
  removeFromCart: (idProduct: ProductForCartShop["id"]) => void;
  clearCart: () => void;
  removeProductCompletely: (idProduct: ProductForCartShop["id"]) => void;
};
type ProductContextProviderProps = {
  children: React.ReactNode;
};

const ProductContext = createContext<ProductContextType | null>(null);

export const ProductContextProvider = ({
  children,
}: ProductContextProviderProps) => {
  const [cartProducts, setCartProducts] = useState<ProductForCartShop[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartShop");

    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        console.log(parsedCart);
        setCartProducts((prevCart) =>
          JSON.stringify(prevCart) !== JSON.stringify(parsedCart)
            ? parsedCart
            : prevCart
        );
      } catch (error) {
        console.error("Error parsing cart data:", error);
        localStorage.removeItem("cartShop");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartShop", JSON.stringify(cartProducts));
  }, [cartProducts]);

  const addToCart = (product: ProductForCartShop) => {
    setCartProducts((prevProducts: ProductForCartShop[]) => {
      const productIndex = cartProducts.findIndex((p) => p.id === product.id);
      if (productIndex !== -1) {
        return prevProducts.map((p, index) =>
          index === productIndex
            ? { ...p, selectedQuantity: (p.selectedQuantity || 1) + 1 }
            : p
        );
      }
      return [...prevProducts, { ...product, selectedQuantity: 1 }];
    });
  };
  const removeFromCart = (productId: ProductForCartShop["id"]) => {
    setCartProducts((prevProducts: ProductForCartShop[]) => {
      const productIndex = cartProducts.findIndex((p) => p.id === productId);
      if (productIndex !== -1) {
        return prevProducts
          .map((p, index) =>
            index === productIndex
              ? { ...p, selectedQuantity: p.selectedQuantity - 1 }
              : p
          )
          .filter((p) => p.selectedQuantity > 0);
      }
      return prevProducts;
    });
  };

  const removeProductCompletely = (productId: ProductForCartShop["id"]) => {
    setCartProducts((prevProducts) => {
      return prevProducts.filter((p) => p.id !== productId);
    });
  };

  const clearCart = () => {
    setCartProducts([]);
  };

  return (
    <ProductContext.Provider
      value={{
        addToCart,
        removeFromCart,
        clearCart,
        cartProducts,
        removeProductCompletely,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error("useProducts must be used within ProductContextProvider");
  return context;
};
