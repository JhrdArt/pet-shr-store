import { useRef, useState } from "react";
import SlidePanel from "../../ui/SlidingPanel/sliding-panel";
import { useSlidePanel } from "~/context/useSlidePanel";
import { useProduct } from "~/context/useProduct";
import type { ProductForCartShop } from "~/types";
import Loader from "~/components/ui/Loader/loader";
import { styles } from "~/styles";
import Button from "~/components/ui/button";
import { Frown, ShoppingCartIcon, Trash2 } from "lucide-react";
import { Link } from "react-router";

const ModalShopping = () => {
  const refModalShopping = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const { setActiveSlidePanel } = useSlidePanel();
  const { cartProducts, removeFromCart, addToCart, removeProductCompletely } =
    useProduct();
  console.log("🚀 ~ ModalShopping ~ cartProducts:", cartProducts);

  const handleAddToCart = (product: ProductForCartShop) => {
    setLoading(true);
    addToCart(product);
    setLoading(false);
  };

  const handleRemoveProductCompletely = (
    productId: ProductForCartShop["id"]
  ) => {
    setLoading(true);
    removeProductCompletely(productId);
    setLoading(false);
  };

  const handleRemoveFromCart = (productId: ProductForCartShop["id"]) => {
    setLoading(true);
    removeFromCart(productId);
    setLoading(false);
  };

  const totalListPrice = cartProducts
    .reduce((total, product: ProductForCartShop) => {
      if (!product || typeof product.price.listPrice?.value !== "number") {
        console.warn("Producto inválido encontrado en cartProducts:", product);
        return total;
      }
      return total + product.price?.listPrice.value * product.selectedQuantity;
    }, 0)
    .toFixed(2);

  const totalSalesValue = cartProducts
    .reduce((total, product: ProductForCartShop) => {
      if (!product || typeof product.price.salesPrice.value !== "number") {
        console.warn("Producto inválido encontrado en cartProducts:", product);
        return total;
      }
      return total + product.price.salesPrice.value * product.selectedQuantity;
    }, 0)
    .toFixed(2);
  console.log(totalSalesValue > totalListPrice);

  const handleCloseModal = () => {
    setActiveSlidePanel("");
  };
  return (
    <SlidePanel
      buttonSide="left"
      type="text"
      ref={refModalShopping}
      size="large"
      pos="right"
      classname="bg-white shadow-xl border-l flex"
      id="shopping"
    >
      {cartProducts && cartProducts.length > 0 ? (
        <div className="w-full h-full">
          <div className="flex flex-col w-full h-[480px] overflow-y-auto  items-center gap-4 my-auto text-center p-2">
            {cartProducts.map((product, index) => (
              <div
                key={index}
                className=" w-full h-56 flex flex-col justify-center items-center gap-2 p-3 relative"
              >
                {loading && <Loader />}
                <div className="flex w-full h-full gap-2">
                  <div className="w-[30%] h-40 bg-slate-900 my-auto">
                    <img
                      className="w-full h-full object-cover"
                      src={`https://www.superpet.pe${product?.images?.small[0].url}`}
                      alt={product?.images?.small[0].alt}
                    />
                  </div>
                  <div className="w-[70%] flex flex-col items-start gap-4 my-auto">
                    <p
                      className={`${styles.p} text-xs font-semibold text-wrap text-start `}
                    >
                      {product && product.productName}
                    </p>
                    {product.productWeight && (
                      <em className="text-xs">
                        Peso {product.productWeight}kg
                      </em>
                    )}
                    {product.variant && (
                      <em className="text-xs">{product.variant.value}</em>
                    )}

                    <p className="flex gap-2">
                      <em className="line-through">
                        {product.price.listPrice?.formatted !== null &&
                          product.price.listPrice?.formatted}
                      </em>
                      <strong className="text-red-500">
                        {product.price && product.price.salesPrice.formatted}
                      </strong>
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="space-x-1">
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="w-8 h-8 font-medium rounded text-center border hover:bg-blue-300"
                        >
                          +
                        </button>
                        <button className="w-8 h-8 font-medium rounded text-center border">
                          {product.selectedQuantity &&
                            product.selectedQuantity.toString()}
                        </button>

                        <button
                          onClick={() => handleRemoveFromCart(product.id)}
                          disabled={product.selectedQuantity === 1}
                          className="w-8 h-8 rounded font-medium text-center border hover:bg-red-300 disabled:text-gray-400 disabled:cursor-not-allowed"
                        >
                          -
                        </button>
                      </div>
                      <div>
                        <p className="flex gap-2 ">
                          <strong className="text-red-500 text-xl">
                            S/.{" "}
                            {(
                              product.price.salesPrice.value *
                              product.selectedQuantity
                            )
                              .toFixed(2)
                              .toString() ?? 0}
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-between items-center">
                  {product.promotion && (
                    <em className="text-xs text-blue-600">
                      ¡{product.promotion}!
                    </em>
                  )}

                  <Button
                    ariaLabel="trash button"
                    size="icon"
                    variant="icon"
                    onClick={() => handleRemoveProductCompletely(product.id)}
                    className={`${!product.promotion && "ml-auto"}`}
                  >
                    <Trash2 size={18} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full h-auto p-4 space-y-4">
            <div className="border-dashed border-black border-t border-b flex justify-between py-4">
              <strong>Total</strong>
              <div className="flex gap-2">
                <p className=" text-gray-600 line-through">
                  {parseFloat(totalListPrice) === 0.0 ||
                  totalSalesValue >= totalListPrice ? (
                    ""
                  ) : (
                    <span>S/. {totalListPrice}</span>
                  )}
                </p>
                <p className="font-semibold">S/. {totalSalesValue}</p>
              </div>
            </div>
            <div>
              <p className="text-[9px] md:text-xs text-balance text-center">
                Recuerda iniciar sesión para aplicar cupones. Los SHR-Puntos,
                por el momento, no son válidos para canjear en compras web.
              </p>
            </div>
            <Link
              to={"/carrito"}
              className="bg-blue-700 hover:bg-blue-700/90 text-blue-100 hover:text-white hover:no-underline w-full flex items-center justify-center p-2 rounded gap-2"
              onClick={handleCloseModal}
            >
              Ir al carrito <ShoppingCartIcon size={15} />
            </Link>
          </div>
        </div>
      ) : (
        <div className="m-auto flex flex-col items-center gap-4">
          <p>El carrito está vacío</p>
          <div>
            <Frown size={40} />
          </div>
          <Button
            ariaLabel="button to shop"
            size="full"
            variant="link"
            target="_self"
            to="/home"
            onClick={() => setActiveSlidePanel("")}
          >
            Ir de compras
          </Button>
        </div>
      )}
    </SlidePanel>
  );
};

export default ModalShopping;
