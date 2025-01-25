import { fetchProducts } from "~/services";
import { Link, useLoaderData } from "react-router";
import { styles } from "~/styles";
import { SectionDogData } from "public/data";
import type { Product, ProductForCartShop } from "~/types";
import CardProduct from "~/components/ui/product-card";
import { useProductType } from "~/context/useProductType";
import { useEffect, useMemo, useState } from "react";
import Button from "~/components/ui/button";
import SelectCollapsible from "~/components/global/select-comp";
import { useProduct } from "~/context/useProduct";
import SearchInput from "~/components/ui/SearchInput";

export async function loader() {
  const data = await fetchProducts();
  return data;
}

const sortOptions = [
  { value: "minorPrice", label: "Menor precio" },
  { value: "higherPrice", label: "Mayor precio" },
  { value: "nameAZ", label: "Nombre A - Z" },
  { value: "nameZA", label: "Nombre Z - A" },
  { value: "recommended", label: "Recomendados" },
];

type SortOptions = (typeof sortOptions)[number]["value"];

const Dog = () => {
  const products = useLoaderData<typeof loader>();
  const { cartProducts } = useProduct();
  const [selectValue, setSelectValue] = useState<SortOptions>("");
  const [selectBrandValue, setSelectBrandValue] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");

  const dogProducts = useMemo(
    () => products.filter((p: Product) => p.itemCategory.includes("perro")),
    [products]
  );
  const brandsOptions = useMemo(() => {
    const brands = Array.from(
      new Set(dogProducts.map((p: Product) => p.brand))
    );
    return brands.map((brand) => ({
      value: brand,
      label: brand,
    }));
  }, [products]);
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(dogProducts);

  const normalizeText = (text: string) =>
    text
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  useEffect(() => {
    const applyFiltersAndSorting = () => {
      let result = [...dogProducts];

      if (selectBrandValue) {
        result = result.filter((product) => product.brand === selectBrandValue);
      }

      if (searchTerm) {
        const search = normalizeText(searchTerm);
        result = result.filter((product) => {
          const fields = [
            product.brand,
            product.itemCategory,
            product.productName,
          ];
          return fields.some((f) => f && normalizeText(f).includes(search));
        });
      }

      switch (selectValue) {
        case "minorPrice":
          result.sort((a, b) => {
            const getPrice = (p: Product) =>
              p.price?.sales?.value || p.price?.max?.sales?.value || Infinity;
            return getPrice(a) - getPrice(b);
          });
          break;

        case "higherPrice":
          result.sort((a, b) => {
            const getPrice = (p: Product) =>
              p.price?.sales?.value || p.price?.max?.sales?.value || -Infinity;
            return getPrice(b) - getPrice(a);
          });
          break;

        case "nameAZ":
          result.sort((a, b) => a.productName.localeCompare(b.productName));
          break;

        case "nameZA":
          result.sort((a, b) => b.productName.localeCompare(a.productName));
          break;

        case "recommended":
          const cartCategories = Array.from(
            new Set(cartProducts.map((p: ProductForCartShop) => p.itemCategory))
          );

          result = result
            .filter((p) => !cartProducts.some((cp) => cp.id === p.id))
            .sort((a, b) => {
              const aScore = cartCategories.includes(a.itemCategory) ? 1 : 0;
              const bScore = cartCategories.includes(b.itemCategory) ? 1 : 0;
              return bScore - aScore;
            });

          if (result.length === 0) {
            result = [...dogProducts].sort((a, b) => b.rating - a.rating);
          }
          break;
      }

      return result;
    };

    setFilteredProducts(applyFiltersAndSorting());
  }, [selectBrandValue, searchTerm, selectValue, dogProducts, cartProducts]);

  const handleDeleteFilters = () => {
    setSelectValue("");
    setSelectBrandValue("");
    setSearchTerm("");
  };

  return (
    <div className={`${styles.baseStyleParent} mb-10 md:pt-5 space-y-16 `}>
      <div className="w-full h-auto px-4 xl:p-0">
        <img
          className="w-full h-fit object-contain"
          src={SectionDogData.banner.src}
          alt={SectionDogData.banner.alt}
        />
      </div>

      <div className="w-full grid grid-cols-6 max-md:grid-cols-3 gap-8 place-content-center place-items-center lg:px-0 px-4">
        {SectionDogData.listCategories.map((category, index) => (
          <Link
            to={category.to}
            className="grid col-span-1 place-items-center space-y-3"
            key={index}
          >
            <div className="w-28 h-28 aspect-square rounded-full overflow-hidden">
              <img
                className="w-full h-fit object-contain"
                src={category.img.src}
                alt={category.img.alt}
              />
            </div>
            <p className={`${styles["p-light"]} text-center hover:underline`}>
              {category.label}
            </p>
          </Link>
        ))}
      </div>

      <div className="grid w-full h-auto max-md:grid-rows-[auto_1fr] md:grid-cols-[200px_1fr] px-4 xl:px-0 md:gap-0 gap-10">
        <div className="h-auto flex flex-col gap-4">
          <SearchInput
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            label="Buscar tus productos"
          />
          <SelectCollapsible
            optionName="Ordenar por"
            elements={sortOptions}
            name="filter for"
            setSelectValue={setSelectValue}
            selectValue={selectValue}
          />

          <SelectCollapsible
            elements={brandsOptions}
            selectValue={selectBrandValue}
            setSelectValue={setSelectBrandValue}
            name="brandSelect"
            optionName="Marcas"
          />
          <Button
            ariaLabel="clean filters"
            size="full"
            variant="outline"
            className="rounded hover:bg-red-600/10"
            onClick={handleDeleteFilters}
          >
            Borrar filtros
          </Button>
        </div>
        <div className="h-full grid md:col-span-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 place-content-center place-items-center gap-y-10">
          {filteredProducts.map((product: Product, index: number) => (
            <CardProduct
              product={product}
              key={index}
              className="bg-white xs:w-80 sm:w-80 md:w-68 lg:w-[250px] xl:w-72"
            />
          ))}
        </div>
      </div>
      <div className="w-full h-auto space-y-5 px-4 xl:p-0">
        <p className={`${styles["p-light"]}`}>
          {SectionDogData.longDescription.introduction}
        </p>
        <div className="space-y-2">
          <h3 className="text-2xl">
            {SectionDogData.longDescription.food.title}
          </h3>
          <div className="space-y-2">
            <p className={`${styles["p-light"]}`}>
              {SectionDogData.longDescription.food.description.paragraph1
                .split(" ")
                .map((word, index) =>
                  word.startsWith("comida") ? (
                    <strong key={index}>{word}</strong>
                  ) : (
                    `${word}`
                  )
                )
                .join(" ")}
            </p>
            <p className={`${styles["p-light"]}`}>
              {SectionDogData.longDescription.food.description.paragraph2}
            </p>
            <p className={`${styles["p-light"]}`}>
              {SectionDogData.longDescription.food.description.paragraph3}
            </p>
            <p className={`${styles["p-light"]}`}>
              {SectionDogData.longDescription.food.description.paragraph4}
            </p>
            <p className={`${styles["p-light"]}`}>
              {SectionDogData.longDescription.food.description.paragraph5}
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl">
            {SectionDogData.longDescription.care.title}
          </h3>
          <p className={`${styles["p-light"]}`}>
            {SectionDogData.longDescription.care.description.paragraph1}
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl">
            {SectionDogData.longDescription.accessories.title}
          </h3>
          <p className={`${styles["p-light"]}`}>
            {SectionDogData.longDescription.accessories.description.paragraph1}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dog;
