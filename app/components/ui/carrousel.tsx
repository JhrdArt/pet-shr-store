import { A11y, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
<div>
  <span></span>
  <div>
    <img src="" alt="" />
  </div>
</div>;
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Link } from "react-router";
import clsx from "clsx";

interface Props {
  elements: string[];
  href: string;
  visibility: "max-md:block hidden" | "md:block hidden";
}

const Carrousel: React.FC<Props> = ({ elements, href, visibility }) => {
  return (
    <div className={clsx(`w-full h-auto relative`, visibility)}>
      <Swiper
        className=" w-full h-full"
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        direction="horizontal"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
      >
        {elements.map((el, i) => (
          <SwiperSlide key={i} className="">
            <Link to={href}>
              <img
                src={el}
                alt={el.toString() + i}
                className="object-contain w-full h-full"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Carrousel;
