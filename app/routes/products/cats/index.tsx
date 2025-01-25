import { fetchProducts } from "~/services";
import ProductComponent from "../products-component";
import { useLoaderData } from "react-router";
import { SectionCatData } from "public/data";

export async function loader() {
  const data = await fetchProducts();
  return data;
}

const Cat = () => {
  const products = useLoaderData<typeof loader>();
  return (
    <ProductComponent
      products={products}
      nameComponent="gato"
      sectionData={SectionCatData}
    />
  );
};

export default Cat;
