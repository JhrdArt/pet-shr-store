import { fetchProducts } from "~/services";
import { useLoaderData } from "react-router";
import { SectionDogData } from "public/data";

import ProductComponent from "../products-component";

export async function loader() {
  const data = await fetchProducts();
  return data;
}

const Dog = () => {
  const products = useLoaderData<typeof loader>();

  return (
    <ProductComponent
      products={products}
      nameComponent="perro"
      sectionData={SectionDogData}
    />
  );
};

export default Dog;
