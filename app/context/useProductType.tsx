import { createContext, useContext, useState } from "react";
import { fetchProducts } from "~/services";
import type { Product } from "~/types";

const products = async () => {
  const products: Product[] = await fetchProducts();
  return products;
};

const productArray = await products();
export type ProductType = (typeof productArray)[number]["itemCategory"];

type TypeProductTypes = {
  productType: ProductType;
  setProductType: (productType: ProductType) => void;
};

const ProductTypeContext = createContext<TypeProductTypes | null>(null);

export const ProductTypeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [productType, setProductType] = useState<ProductType>("");
  return (
    <ProductTypeContext.Provider value={{ productType, setProductType }}>
      {children}
    </ProductTypeContext.Provider>
  );
};

export const useProductType = () => {
  const context = useContext(ProductTypeContext);

  if (!context) {
    throw new Error("useProductType must be used within a ProductTypeProvider");
  }
  return context;
};
