import Button from "./button";
import PriceRange from "../global/price-range-html";
import precioBomba from "public/images/Precio-bomba.png";
import fortyPercentDiscount from "public/images/40-2do.png";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import RecommendedProductsSkeleton from "./Loader/skeleton-recommended";
import type { Product, Promotion } from "~/types";
import { useProduct } from "~/context/useProduct";
import { styles } from "~/styles";
import clsx from "clsx";

interface Props {
  product: Product;
  className?: string;
}

const CardProduct: React.FC<Props> = ({ product, className }) => {
  if (!product) {
    return <RecommendedProductsSkeleton />;
  }
  const { addToCart, cartProducts } = useProduct();
  const set = new Set<string>();
  cartProducts.forEach((p) => set.add(p.itemCategory));

  const handleAddToCart = (product: Product) => {
    console.log(product);
    addToCart({
      available: product.available,
      brand: product.brand,
      price: {
        listPrice: {
          formatted:
            product.price?.list?.formatted ??
            product.price?.max?.list?.formatted ??
            "",
          value:
            product.price?.list?.value ?? product.price?.max?.list?.value ?? 0,
        },
        salesPrice: {
          formatted:
            product.price?.sales?.formatted ??
            product.price?.max?.sales?.formatted,
          value:
            product.price?.sales?.value ??
            product.price?.max?.sales?.value ??
            0,
        },
      },
      id: product.id,
      images: product.images,
      itemCategory: product.itemCategory,
      productName: product.productName,
      selectedQuantity: product.selectedQuantity,
      productWeight: product.productWeight?.toString() ?? "",
      promotion: product.promotions && product.promotions[0]?.calloutMsg,
    });
  };

  return (
    <>
      <div
        className={clsx(
          `relative col-span-1 m-auto flex flex-col justify-start items-center h-full border shadow-lg transform duration-300 hover:shadow-sm w-72 xs:w-80 sm:w-72 md:w-64 lg:w-60 xl:w-56 aspect-auto`,
          className
        )}
      >
        <Link
          to={`/product/${encodeURIComponent(
            product.itemCategory
          )}/${encodeURIComponent(product.productName)}/${product.id}`}
          className="w-full h-full flex  px-3 md:px-4 "
        >
          <div className="absolute right-2 top-2 md:w-36 w-[120px]">
            {product.promotions &&
              product.promotions.map((promotion: Promotion, index) =>
                promotion.calloutMsg.startsWith("Precios Bomba") ? (
                  <img
                    key={index}
                    className="w-full h-full"
                    src={precioBomba}
                    alt={promotion.calloutMsg}
                  />
                ) : promotion.calloutMsg.startsWith(
                    "40% dsct en productos seleccionados"
                  ) ? (
                  <img
                    key={index}
                    className="w-full h-full"
                    src={fortyPercentDiscount}
                    alt={promotion.calloutMsg}
                  />
                ) : null
              )}
          </div>
          <div className="w-full flex flex-col items-start justify-center md:gap-10 gap-8">
            <div className="w-full h-72 md:h-60 mt-2 md:mt-6">
              <img
                src={`https://superpet.pe${product.images?.large[0].url}`}
                alt={product?.images?.large[0].alt}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="">
              <span className="text-xs text-black">{product.brand}</span>
              <h2 className={`${styles.h2} text-wrap `}>
                {product.productName}
              </h2>
            </div>
            <div className="w-full px-2 md:px-4 mt-auto  mb-4">
              <p className={`text-red-400 text-xl font-black line-through`}>
                {product.price?.list?.formatted}
              </p>
              <p className={`text-red-600 text-2xl font-black`}>
                {product.price?.sales?.formatted}
              </p>
              <p className={`text-red-600 text-2xl font-black`}>
                {product.price?.max?.sales.formatted}
              </p>
            </div>
          </div>
        </Link>
        <div className="w-full p-2">
          <Button
            ariaLabel="button add"
            variant="default"
            size="full"
            className="bg-blue-600 hover:bg-blue-600/90 mt-auto w-full h-12 text-white"
            onClick={() => handleAddToCart(product)}
          >
            Añadir
          </Button>
        </div>
      </div>
    </>
  );
};
export default CardProduct;
