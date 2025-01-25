import { Frown, Loader } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import Button from "~/components/ui/button";
import SearchInput from "~/components/ui/SearchInput";
import SlidePanel from "~/components/ui/SlidingPanel/sliding-panel";
import { useSearchGlobal } from "~/context/useSearchGlobalValue";
import { useSlidePanel } from "~/context/useSlidePanel";
import { fetchProducts } from "~/services";
import type { Product } from "~/types";

interface Props {
  /*Props*/
}

type SearchResult = {
  exactMatches: Product[];
  topRatedFromBrand: Product[];
  nonBrandRelated: Product[];
  relatedCategories: string[];
};

const ModalSearchMobile: React.FC<Props> = (props) => {
  const { searchGlobal, setSearchGlobal } = useSearchGlobal();
  const { setActiveSlidePanel } = useSlidePanel();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<SearchResult>({
    exactMatches: [],
    topRatedFromBrand: [],
    nonBrandRelated: [],
    relatedCategories: [],
  });
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

  return (
    <SlidePanel buttonSide="left" type="text" size="full" id="modal-search">
      <div className="px-5 py-10">
        <SearchInput
          searchTerm={searchGlobal}
          setSearchTerm={setSearchGlobal}
        />
      </div>

      <div className="px-5">
        {!loading && <Loader className="animate-spin text-white" size={30} />}
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
        {results.exactMatches.length > 0 && (
          <section className="flex flex-col col-span-1 w-full">
            <h3 className="text-sm font-bold mb-4">Coincidencias exactas</h3>
            <div className="flex flex-col gap-4">
              {results.exactMatches
                .map((product) => (
                  <Link
                    onClick={() => {
                      setSearchGlobal("");
                      setActiveSlidePanel("");
                    }}
                    to={`/product/${encodeURIComponent(
                      product.itemCategory
                    )}/${encodeURIComponent(product.productName)}/${
                      product.id
                    }`}
                    key={product.id}
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
                    </div>
                    <p className="text-xs text-gray-500">{product.brand}</p>
                  </Link>
                ))
                .slice(0, 6)}
            </div>
          </section>
        )}
      </div>
    </SlidePanel>
  );
};
export default ModalSearchMobile;
