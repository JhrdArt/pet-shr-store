import { fetchProductByID, fetchProducts } from "~/services";
import { useLoaderData, useParams } from "react-router";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import type { Product, ProductForCartShop, ValueVariation } from "~/types";
import { styles } from "~/styles";
import defaultImg from "public/images/imagen-vacia.avif";
import { ChevronDown, ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
import { productUnitData } from "public/data";
import Button from "~/components/ui/button";
import RecommendedProducts from "~/components/global/recommended-products";
import { useProduct } from "~/context/useProduct";

interface Props {
  /*Props*/
}

const IMAGE_DEFAULT = defaultImg;

export async function loader() {
  const products = await fetchProducts();
  return products;
}

const ProductDetails: React.FC<Props> = (props) => {
  const products = useLoaderData<typeof loader>();
  const { addToCart, removeFromCart, cartProducts, removeProductCompletely } =
    useProduct();
  console.log("🚀 ~ cartProducts:", cartProducts);
  const [product, setProduct] = useState<Product>();
  const [currentTarget, setCurrentTarget] = useState(0);
  console.log("🚀 ~ currentTarget:", currentTarget);
  const [showDescription, setShowDescription] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth > 768 ? false : true;
    }
    return false;
  });
  const [imageToShow, setImageToShow] = useState({
    url: IMAGE_DEFAULT,
    alt: "Imagen vacía",
  });
  const [fade, setFade] = useState(false);
  console.log("🚀 ~ product:", product);
  const { id } = useParams();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const product = async () => {
      if (id) {
        const product = await fetchProductByID(id);
        setProduct(product);
        setCurrentTarget(0);
      }
    };
    product();
  }, [id]);

  useEffect(() => {
    if (product?.images.large) {
      handleImageChange(product.images.large[currentTarget]);
    }
  }, [currentTarget, product?.images.large]);

  useEffect(() => {
    if (!containerRef || !product?.images.large) return;

    const selectedThumbnail = containerRef.current?.children[
      currentTarget
    ] as HTMLElement;
    if (!selectedThumbnail) return;

    const containerWidth = containerRef.current?.offsetWidth || 0;
    const scrollLeft =
      selectedThumbnail.offsetLeft -
      (containerWidth / 2 - selectedThumbnail.offsetWidth / 2);

    containerRef.current?.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });
  }, [currentTarget, product?.images.large]);

  const handleImageChange = (img: { url: string; alt: string }) => {
    setFade(true);
    setTimeout(() => {
      setImageToShow({
        url: img.url.startsWith("/")
          ? `https://superpet.pe${img.url}`
          : img.url,
        alt: img.alt,
      });
      setFade(false);
    }, 300);
  };

  const handlePrevButton = () => {
    setCurrentTarget((prev) => Math.max(0, prev - 1));
  };
  const handleNextButton = () => {
    if (product?.images.large) {
      setCurrentTarget((prev) =>
        Math.min(product.images.large.length - 1, prev + 1)
      );
    }
  };

  const isPrevDisabled = currentTarget === 0;
  const isNextDisabled =
    !!product?.images.large.length &&
    currentTarget === product.images.large.length - 1;

  const [variationProduct, setVariationProduct] = useState<ValueVariation>();
  const [checkedId, setCheckedId] = useState<string | undefined>();
  const [newProductSelect, setNewProductSelect] =
    useState<ProductForCartShop | null>(null);

  const handleProductChecked = (product: Product) => {
    if (!product) return;

    const productForCart: ProductForCartShop = {
      brand: product.brand,
      id: product.id,
      available: product.available,
      images: product.images,
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
      selectedQuantity: product.selectedQuantity,
      productWeight: product.productWeight?.toString(),
      promotion: product.promotions && product.promotions[0].calloutMsg,
      productName: product.productName,
      itemCategory: product.itemCategory,
      variant: variationProduct,
    };
    setNewProductSelect(productForCart);
  };

  const handleAddProductCart = () => {
    if (newProductSelect) {
      addToCart(newProductSelect);
    }
  };

  const handleAddToCart = () => {
    if (newProductSelect) {
      addToCart(newProductSelect);
    }
  };
  const handleRemoveFromCart = () => {
    if (newProductSelect) {
      removeFromCart(newProductSelect.id);
    }
  };

  const handleRemoveCompletely = () => {
    if (newProductSelect) {
      removeProductCompletely(newProductSelect?.id);
    }
  };
  return (
    <div
      className={`${styles.baseStyleParent} flex flex-col my-5 px-4 xl:p-0 `}
    >
      <div className="space-y-2 lg:hidden block md:border-b md:pb-5">
        <p className={`${styles["p-light"]} text-[11px]`}>{product?.brand}</p>
        <h2 className={`${styles.h3}`}>{product?.productName}</h2>
      </div>
      {/* image slider */}
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-10">
        <div className="col-span-1 flex flex-col items-center gap-4 justify-center ">
          <div
            className={`aspect-square w-full h-full image-container ${
              fade ? "fade-out" : "fade-in"
            }`}
          >
            <img
              src={
                imageToShow.url.startsWith("/on")
                  ? `https://superpet.pe${imageToShow.url}`
                  : imageToShow.url
              }
              alt={
                imageToShow.url.startsWith("https")
                  ? `https://superpet.pe${imageToShow.alt}`
                  : imageToShow.alt
              }
              className="object-contain main-image"
            />
          </div>
          {product?.images.large && product.images.large.length > 1 && (
            <div className="w-full relative ">
              <button
                disabled={isPrevDisabled}
                onClick={handlePrevButton}
                className={`absolute left-2 hover:bg-black/10 p-2 rounded-full top-1/2 -translate-y-1/2 z-10 ${
                  isPrevDisabled && "cursor-not-allowed opacity-50"
                }`}
              >
                <ChevronLeft />
              </button>
              <button
                disabled={isNextDisabled}
                onClick={handleNextButton}
                className={`absolute right-2 hover:bg-black/10 p-2 rounded-full z-10 top-1/2 -translate-y-1/2 ${
                  isNextDisabled && "cursor-not-allowed opacity-50"
                }`}
              >
                <ChevronRight />
              </button>

              <div
                className={`flex gap-3 h-fit w-full ${
                  product.images.large.length < 7 &&
                  "justify-center items-center"
                } mx-auto overflow-x-hidden p-2`}
                ref={containerRef}
              >
                {product?.images.large.map((img, i) => (
                  <div
                    className={`aspect-square h-20 w-20 ${
                      currentTarget === i && "ring-2"
                    }`}
                    onClick={() => setCurrentTarget(i)}
                  >
                    <img
                      className="w-full thumbnail h-full border cursor-pointer"
                      key={i}
                      src={`https://superpet.pe${img.url}`}
                      alt={`${img.alt}`}
                    />
                  </div>
                )) ?? (
                  <div className="w-20 h-20 border bg-gray-100 thumbnail-placeholder">
                    <img src={IMAGE_DEFAULT} alt="sin imagen" />
                  </div>
                )}
              </div>
            </div>
          )}
          <div className="w-full  lg:hidden block">
            <p className={`${styles["p-light"]} text-xs`}>SKU: {product?.id}</p>
          </div>
        </div>
        {/* description */}
        <div className="col-span-1 flex flex-col gap-10 md:p-4">
          <div className="space-y-2 lg:block hidden">
            <p className={`${styles["p-light"]}`}>{product?.brand}</p>
            <h2 className={`${styles.h3}`}>{product?.productName}</h2>
            <p className={`${styles["p-light"]}`}>SKU: {product?.id}</p>
          </div>
          <div className="w-full h-fit">
            <img
              src={productUnitData.gif.url}
              alt={productUnitData.gif.alt}
              className="w-full h-fit object-contain"
            />
          </div>
          <div className="md:hidden block">
            <Button
              ariaLabel="show Description"
              size="full"
              variant="outline"
              className={`justify-between px-4`}
              onClick={() => setShowDescription(!showDescription)}
            >
              Descripción <ChevronDown />
            </Button>
          </div>
          <div className={`${showDescription ? "block" : "hidden"}`}>
            <p className={`${styles["p-light"]} leading-6`}>
              {product?.shortDescription}
            </p>
          </div>
          <div className={`md:block hidden`}>
            <p className={`${styles["p-light"]} leading-6`}>
              {product?.shortDescription}
            </p>
          </div>
          <div className="border-gray-700 border-t pt-4 space-y-5">
            <p className="text-sm">Seleccionar una opción</p>
            <div className="flex items-center  gap-4">
              {product?.variationAttributes &&
                product.variationAttributes[0].values.map(
                  (variation, index) => (
                    <div
                      key={index}
                      className="flex gap-2 items-center justify-center"
                      onClick={() => setVariationProduct(variation)}
                    >
                      <input
                        checked={variation.value === checkedId}
                        type="radio"
                        value={variation.value}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          setCheckedId(e.target.value);
                          handleProductChecked(product!);
                        }}
                      />
                      <p className={`${styles["p-light"]}`}>
                        {variation.value}
                      </p>
                    </div>
                  )
                )}
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex text-center gap-1">
                <p className={`text-red-400 text-xl font-black line-through`}>
                  {product && product.price?.list?.formatted}
                </p>
                <p className={`text-red-600 text-2xl font-black`}>
                  {product && product.price?.sales?.formatted}
                </p>
                <p className={`text-red-600 text-2xl font-black`}>
                  {product && product.price?.max?.sales.formatted}
                </p>
              </div>
              <div className="flex items-center gap-2 md:gap-2">
                <button
                  onClick={handleAddToCart}
                  className="w-8 h-8 font-medium rounded text-center border hover:bg-blue-300"
                >
                  +
                </button>
                <button className="w-8 h-8 font-medium rounded text-center border">
                  {cartProducts?.find((p) => p.id === newProductSelect?.id)
                    ?.selectedQuantity || 0}
                </button>

                <button
                  onClick={handleRemoveFromCart}
                  disabled={
                    cartProducts.length === 0 ||
                    cartProducts.some(
                      (p) =>
                        p.id === newProductSelect?.id &&
                        p.selectedQuantity === 1
                    )
                  }
                  className="w-8 h-8 rounded font-medium text-center border hover:bg-red-300 disabled:text-gray-400 disabled:cursor-not-allowed"
                >
                  -
                </button>
                <button
                  onClick={handleRemoveFromCart}
                  disabled={cartProducts.length === 0}
                  className="w-8 h-8 rounded font-medium text-center border hover:bg-red-300 disabled:text-gray-400 disabled:cursor-not-allowed grid place-content-center"
                >
                  <Trash2 />
                </button>
              </div>
            </div>
            <Button
              className={`bg-blue-600 text-white rounded mt-auto ${
                !newProductSelect && "cursor-not-allowed "
              }`}
              variant="default"
              ariaLabel="button add cart"
              size="full"
              onClick={handleAddProductCart}
              disabled={!newProductSelect}
            >
              Añadir al carrito
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-4 border-t space-y-5">
        <h3 className="text-xl font-bold">Productos recomendamos</h3>
        <RecommendedProducts recommendedProducts={products} />
      </div>
    </div>
  );
};
export default ProductDetails;
