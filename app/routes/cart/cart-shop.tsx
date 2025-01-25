import { Frown, ShoppingCart, Trash2 } from "lucide-react";
import { Link, useLoaderData } from "react-router";
import { useLoading } from "~/context/useLoader";
import { useProduct } from "~/context/useProduct";
import type { Product, ProductForCartShop } from "~/types";
import { styles } from "~/styles";
import { CartShopData } from "public/data";
import Button from "~/components/ui/button";
import RecommendedProducts from "~/components/global/recommended-products";
import { fetchProducts } from "~/services";

export async function loader() {
  const product = await fetchProducts();
  return product;
}

const CartShop = () => {
  const { setLoading } = useLoading();
  const { cartProducts, removeFromCart, addToCart, removeProductCompletely } =
    useProduct();
  const products = useLoaderData<typeof loader>();
  const tagsCartProducts =
    cartProducts && cartProducts.map((p) => p.itemCategory);

  const recommendedProductsBasedTagsCart =
    products &&
    products.filter((p: Product) => {
      return tagsCartProducts.some((tag) => p.itemCategory === tag);
    });

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

  const totalProducts = cartProducts.reduce((total, product) => {
    if (!product || typeof product.price.salesPrice.value !== "number") {
      console.warn("Producto sin precio", product);
      return total;
    }
    return total + product.selectedQuantity;
  }, 0);

  const totalSalesValue = cartProducts
    .reduce((total, product) => {
      if (!product || typeof product.price.salesPrice.value !== "number") {
        console.warn("Producto inválido encontrado en cartProducts:", product);
        return total;
      }
      return total + product.price.salesPrice.value * product.selectedQuantity;
    }, 0)
    .toFixed(2);
  return (
    <section className="w-full max-w-7xl mx-auto h-auto space-y-8 max-2xl:px-4 p-4 mb-10">
      <div className="space-y-2 pt-4">
        <h2 className={`${styles.h1}`}>{CartShopData.title}</h2>
        <div className="flex gap-1 items-center w-full justify-between">
          <div className="flex items-center">
            {CartShopData.links.toBack.icon}
            <Link
              to={"/"}
              className={`${styles["p-light"]} hover:underline hover:underline-offset-2`}
            >
              {CartShopData.links.toBack.title}
            </Link>
          </div>
          <div className={`${styles["p-light"]}`}>
            <span className="hidden md:block">
              {CartShopData.links.call.desktop} {CartShopData.links.call.number}
            </span>
            <span className="md:hidden flex items-center gap-2">
              {CartShopData.links.call.mobile}
              {CartShopData.links.call.number}
            </span>
          </div>
        </div>
      </div>
      <div
        className={`${styles["p-light"]} mx-auto w-full bg-blue-200 p-2 text-center rounded`}
      >
        <p>
          <strong className="font-semibold">
            {CartShopData.alert.split(" ").splice(0, 4).join(" ")}
          </strong>{" "}
          {CartShopData.alert.split(" ").splice(4).join(" ")}
        </p>
      </div>
      {totalProducts > 0 && (
        <div>
          <p>Tienes {totalProducts} productos</p>
        </div>
      )}
      <div>
        {cartProducts.length === 0 && (
          <div className="w-full grid place-content-center">
            <p className="flex items-center gap-2">
              El carrito está vacío
              <span>
                <Frown size={20} />
              </span>
            </p>

            <Button
              ariaLabel="button to shop"
              size="full"
              variant="link"
              target="_self"
              to="/"
            >
              Ir de compras <ShoppingCart />
            </Button>
          </div>
        )}
      </div>
      {cartProducts.length > 0 && (
        <>
          <div className="w-full h-auto flex max-lg:flex-col gap-8 ">
            <div className="lg:w-[70%] w-full block">
              {cartProducts.map((product, index) => (
                <div className="h-44 max-lg:h-auto w-full py-4" key={index}>
                  {/* header product */}
                  <div className="flex justify-between items-center mb-2">
                    <h3 className={`${styles.h3} text-sm`}>
                      {product.productName}
                    </h3>
                    <Button
                      ariaLabel="trash button"
                      size="icon"
                      variant="icon"
                      onClick={() => handleRemoveProductCompletely(product.id)}
                      className="text-gray-500"
                    >
                      <Trash2 size={18} />
                    </Button>
                  </div>
                  {/* body product */}
                  <div className="inline-flex max-lg:block gap-10 h-32 max-lg:h-auto w-full border-b border-b-gray-400 pb-3">
                    <div className="inline-flex gap-7 max-lg:w-full">
                      <div className="w-32 h-full aspect-auto overflow-hidden">
                        <img
                          className="w-full h-full object-cover"
                          src={`https://superpet.pe${product.images.small[0].url}`}
                          alt={product.images.small[0].alt}
                        />
                      </div>
                      <div
                        className={`${styles["p-light"]} text-sm h-28 flex flex-col`}
                      >
                        <div className="">
                          <p>
                            {product.brand.split(" ").slice(0, 2).join(" ")}
                          </p>
                          <p>{product.id}</p>
                          <p>
                            Peso:{" "}
                            {product.productWeight &&
                              product.productWeight.toString()}
                            kg
                          </p>
                          <p className="capitalize">
                            {product.available ? "en stock" : "no stock"}
                          </p>
                        </div>
                        <button
                          className={`${styles["p-light"]} text-sm mt-auto mr-auto hover:underline`}
                        >
                          Editar
                        </button>
                      </div>
                    </div>

                    <div className="inline-flex gap-10 lg:gap-14 max-lg:w-full">
                      <div className="h-full flex items-center p-2 text-center max-lg:my-auto">
                        <p className={`${styles.h1}`}>
                          {product.price.salesPrice.formatted}
                        </p>
                      </div>
                      <div className="block space-y-2">
                        <p className={`${styles["p-light"]} text-xs`}>
                          Cantidad
                        </p>

                        <div className="flex max-md:flex-col items-center gap-0 md:gap-4">
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
                      </div>
                      <div className="space-y-2">
                        <p className={`${styles["p-light"]} uppercase`}>
                          Total
                        </p>
                        <div>
                          <p
                            className={`${styles.h1} text-gray-400 line-through`}
                          >
                            {product.price.listPrice?.value !== 0 ? (
                              <span>
                                S/.{" "}
                                {(
                                  product.price?.listPrice?.value ??
                                  0 * product.selectedQuantity
                                ).toFixed(2)}
                              </span>
                            ) : null}
                          </p>
                          <p className={`${styles.h1}`}>
                            S/.{" "}
                            {product.price.salesPrice
                              ? (
                                  product.price.salesPrice.value *
                                  product.selectedQuantity
                                ).toFixed(2)
                              : null}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:w-[30%] w-full h-full space-y-4">
              <div className=" flex flex-col justify-center p-4 border gap-4">
                <h3 className={`text-lg font-semibold`}>
                  {CartShopData.cupon.title}
                </h3>
                <div className="h-10 w-full flex gap-4 ">
                  <label className="h-full">
                    <input
                      type="text"
                      className="bg-transparent w-full h-full outline-none pl-2 focus:ring focus:ring-blue-400 border"
                      placeholder={CartShopData.cupon.placeholder}
                    />
                  </label>
                  <Button
                    type="submit"
                    className=" text-black rounded hover:bg-blue-600/10 w-32"
                    variant="outline"
                    ariaLabel="button cupon"
                  >
                    {CartShopData.cupon.labelButton}
                  </Button>
                </div>
              </div>
              <div className="text-center">
                <p className=" text-xs text-balance">{CartShopData.message}</p>
              </div>
              <div className="flex justify-between font-bold">
                <p>Total</p>
                <p>S/. {totalSalesValue}</p>
              </div>
              <Button
                variant="link"
                to={CartShopData.buttonToOrder.href}
                ariaLabel={CartShopData.buttonToOrder.ariaLabel}
                size="full"
                className="border rounded bg-blue-600 text-white hover:no-underline"
              >
                {CartShopData.buttonToOrder.label}
              </Button>
            </div>
          </div>
          <div className="py-10 space-y-10">
            <div className="space-y-4">
              <h3 className={`${styles.h2} text-xl`}>
                {CartShopData.recommendedZone.title}
              </h3>
              <p className={`${styles.p} text-xs font-semibold`}>
                {CartShopData.recommendedZone.disclamer}
              </p>
            </div>
            <RecommendedProducts
              recommendedProducts={recommendedProductsBasedTagsCart}
            />
          </div>
        </>
      )}
    </section>
  );
};

export default CartShop;
