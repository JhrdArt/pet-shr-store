import { Frown, Loader } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLoaderData } from "react-router";
import Button from "~/components/ui/button";
import { useSearchGlobal } from "~/context/useSearchGlobalValue";
import { fetchProducts } from "~/services";
import type { Product } from "~/types";

interface Props {}

type SearchResult = {
  exactMatches: Product[];
  topRatedFromBrand: Product[];
  nonBrandRelated: Product[];
  relatedCategories: string[];
};

export const SearchContent: React.FC<Props> = (props) => {
  const { searchGlobal, setSearchGlobal } = useSearchGlobal();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<SearchResult>({
    exactMatches: [],
    topRatedFromBrand: [],
    nonBrandRelated: [],
    relatedCategories: [],
  });
  const [hoverProduct, setHoverProduct] = useState<Product["productName"]>("");
  const refSearchContent = useRef<HTMLDivElement>(null);
  const normalizeText = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };
  const searchResult = (products: Product[], searchTerm: string) => {
    const sanitizedValue = normalizeText(searchTerm);

    const exactMatches = products.filter((p: Product) => {
      const fieldsToSearch = [
        p.brand,
        p.itemCategory,
        p.productName,
        p.shortDescription,
      ];
      return fieldsToSearch.some(
        (field) => field && normalizeText(field).includes(sanitizedValue)
      );
    });

    const topBrand = exactMatches.reduce(
      (acc: { [key: string]: number }, product) => {
        acc[product.brand] = (acc[product.brand] || 0) + 1;
        return acc;
      },
      {}
    );
    console.log(topBrand);
    const mainBrand = Object.entries(topBrand).sort(
      (a, b) => b[1] - a[1]
    )[0]?.[0];
    console.log(mainBrand);

    const topRatedFromBrand = products
      .filter((p) => p.brand === mainBrand)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 5);
    const nonBrandRelated = products
      .filter(
        (p) =>
          p.brand !== mainBrand &&
          normalizeText(p.productName).includes(sanitizedValue)
      )
      .slice(0, 5);
    const relatedCategories = Array.from(
      new Set(exactMatches.map((p) => p.itemCategory))
    );
    return {
      exactMatches,
      topRatedFromBrand,
      nonBrandRelated,
      relatedCategories,
    };
  };

  useEffect(() => {
    if (!searchGlobal) return;
    setLoading(true);
    try {
      const loader = async () => {
        const products = await fetchProducts();
        const result = searchResult(products, searchGlobal);
        setResults(result);
      };
      loader();
    } catch (error: any) {
      const message = "Error al cargar los productos";
      setError(message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [searchGlobal]);

  useEffect(() => {
    const handleFocusOut = (e: MouseEvent) => {
      if (
        refSearchContent.current &&
        !refSearchContent.current.contains(e.target as Node)
      ) {
        setSearchGlobal("");
      }
    };
    window.addEventListener("mousedown", handleFocusOut);
    return () => window.removeEventListener("mousedown", handleFocusOut);
  });

  if (!searchGlobal) return;

  return (
    <>
      {searchGlobal && (
        <div
          ref={refSearchContent}
          className={`w-screen h-auto bg-transparent backdrop-blur-md left-1/2 -translate-x-1/2 top-10 absolute m-auto z-10 justify-center hidden md:flex`}
        >
          <div className="bg-white w-[80%] h-fit shadow-md items-start justify-around  max-w-7xl p-10 flex">
            {!loading && (
              <Loader className="animate-spin text-white" size={30} />
            )}
            {error && <p className="text-red-500 italic text-sm">{error}</p>}
            {results.exactMatches.length === 0 && (
              <div className=" flex flex-col items-center ">
                <p className="text-sm flex items-center gap-1">
                  Ningún producto coincide con su búsqueda <Frown size={18} />
                </p>
                <Button
                  to="/perro"
                  variant="link"
                  ariaLabel="go shopping"
                  onClick={() => setSearchGlobal("")}
                >
                  Ir de compras
                </Button>
              </div>
            )}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-5">
                {results.exactMatches.length > 0 && (
                  <section className="flex flex-col col-span-1 w-full">
                    <h3 className="text-sm font-bold mb-4">
                      Coincidencias exactas
                    </h3>
                    <div className="flex flex-col gap-4">
                      {results.exactMatches
                        .map((product) => (
                          <Link
                            onClick={() => setSearchGlobal("")}
                            to={`/product/${encodeURIComponent(
                              product.itemCategory
                            )}/${encodeURIComponent(product.productName)}/${
                              product.id
                            }`}
                            key={product.id}
                            onMouseEnter={() =>
                              setHoverProduct(product.productName)
                            }
                            onMouseLeave={() => setHoverProduct("")}
                            className="p-2 border rounded-lg relative group"
                          >
                            <div className="flex items-center gap-2">
                              <div className="w-[20%]  overflow-hidden">
                                <img
                                  src={`https://www.superpet.pe${product.images.small[0].url}`}
                                  alt=""
                                  className="w-10 h-10 object-cover rounded-full border"
                                />
                              </div>
                              <p className="w-[90%] font-medium text-[13px] overflow-hidden whitespace-normal text-nowrap">
                                {product.productName}
                              </p>
                              {hoverProduct === product.productName && (
                                <span className="absolute text-xs top-10 right-0 p-2 bg-blue-500 text-white rounded opacity-0 invisible transition-opacity duration-300 delay-500 group-hover:opacity-100 group-hover:visible">
                                  {product.productName}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-gray-500">
                              {product.brand}
                            </p>
                          </Link>
                        ))
                        .slice(0, 6)}
                    </div>
                  </section>
                )}

                {results.topRatedFromBrand.length > 0 && (
                  <section>
                    <h3 className="text-sm font-bold mb-4">
                      Recomendados para ti
                    </h3>
                    <div className="flex flex-col gap-4 pb-2">
                      {results.topRatedFromBrand.map((product) => (
                        <Link
                          onClick={() => setSearchGlobal("")}
                          to={`/product/${encodeURIComponent(
                            product.itemCategory
                          )}/${encodeURIComponent(product.productName)}/${
                            product.id
                          }`}
                          key={product.id}
                          className=" flex flex-col p-2 border rounded-lg"
                        >
                          <div className="flex items-center gap-0">
                            <div className="w-[15%]  overflow-hidden">
                              <img
                                src={`https://www.superpet.pe${product.images.small[0].url}`}
                                alt=""
                                className="w-10 h-10 object-cover rounded-full border"
                              />
                            </div>
                            <p className="w-[85%] font-medium text-[13px] overflow-hidden whitespace-normal text-nowrap">
                              {product.productName}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-yellow-500 text-xs">
                              {Array.from({ length: product.rating }).map(
                                (_, i) => (
                                  <span key={i}>★</span>
                                )
                              )}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}

                {results.nonBrandRelated.length > 0 && (
                  <section>
                    <h3 className="text-sm font-bold mb-4">Otras opciones</h3>
                    <div className="flex flex-col gap-4">
                      {results.nonBrandRelated.map((product) => (
                        <Link
                          onClick={() => setSearchGlobal("")}
                          to={`/product/${encodeURIComponent(
                            product.itemCategory
                          )}/${encodeURIComponent(product.productName)}/${
                            product.id
                          }`}
                          key={product.id}
                          className=" flex flex-col  p-3 border rounded-lg"
                        >
                          <p className="font-medium text-[13px]">
                            {product.productName}
                          </p>
                          <p className="text-sm text-gray-500">
                            {product.brand}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              {/* Categorías relacionadas */}
              {results.relatedCategories.length > 0 && (
                <section>
                  <h3 className="text-sm font-bold mb-4">
                    Categorías relacionadas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {results.relatedCategories.map((category) => (
                      <span
                        key={category}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
