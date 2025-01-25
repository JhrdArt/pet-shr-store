import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/controller";
import { Controller, Navigation } from "swiper/modules";

import { memo, useEffect, useRef } from "react";
import CardProduct from "../ui/product-card";
import RecommendedProductsSkeleton from "../ui/Loader/skeleton-recommended";
import type { Product } from "~/types";

interface Props {
  recommendedProducts: Product[];
}

const RecommendedProducts: React.FC<Props> = memo(({ recommendedProducts }) => {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  if (!recommendedProducts) {
    return <RecommendedProductsSkeleton />;
  }

  return (
    <Swiper
      modules={[Controller, Navigation]}
      slidesPerView={1}
      breakpoints={{
        500: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      direction="horizontal"
      loop={true}
      className="w-full max-w-7xl h-[550px] mb-8 relative"
      onBeforeInit={(swiper) => {
        if (swiper.params.navigation) {
          const navigation = swiper.params.navigation as any;
          navigation.prevEl = prevRef.current;
          navigation.nextEl = nextRef.current;
        }
      }}
    >
      {recommendedProducts?.map((product: Product, index: number) => (
        <SwiperSlide key={index}>
          <CardProduct product={product} />
        </SwiperSlide>
      ))}
      <div ref={prevRef} className="swiper-button-prev"></div>
      <div ref={nextRef} className="swiper-button-next"></div>
    </Swiper>
  );
});
export default RecommendedProducts;
