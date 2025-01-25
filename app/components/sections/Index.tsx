import { useEffect, useState } from "react";

import RecommendedProducts from "../global/recommended-products";
import { useLoaderData } from "react-router";
import type { loader } from "~/routes/home";
import AboutUs from "./about-us/about-us";
import Newsletter from "./newsletter/newsletter";
import type { Product, Promotion } from "~/types";
import SectionOffers from "./section-offers";
import Separator from "../ui/separator";
import Confidence from "./confidence/confidence";

const Sections = () => {
  const products = useLoaderData<typeof loader>();

  const recommendedProducts = products.filter((product: Product) => {
    if (!product.promotions) return false;

    const promotionsName = [
      "Precios Bomba",
      "40% dsct en productos seleccionados.",
    ];

    return product.promotions.some((promotion: Promotion) =>
      promotionsName.some((msg) => promotion.calloutMsg.includes(msg))
    );
  });

  return (
    <section className="w-full h-full max-w-7xl mx-auto  xl:px-0">
      <SectionOffers />
      <Separator />
      <RecommendedProducts recommendedProducts={recommendedProducts} />
      <Confidence />
      <Separator />
      <AboutUs />
      <Newsletter />
    </section>
  );
};
export default Sections;
