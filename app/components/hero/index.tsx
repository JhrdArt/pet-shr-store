import Carrousel from "../ui/carrousel";
import banner from "public/banners/banner-desktop/sem-nat-origens-desktop.jpg";
import banner1 from "public/banners/banner-desktop/sem-nat-snacks-desktop.jpg";
import banner2 from "public/banners/banner-desktop/sup-o-antipulgas-desktop.jpg";
import banner3 from "public/banners/banner-desktop/sup-o-camas-desktop.jpg";
import banner4 from "public/banners/banner-desktop/sup-o-transportadores-desktop.jpg";
//mobile
import bannerMobile1 from "public/banners/banner-mobile/sem-nat-arenas-mobile.jpg";
import bannerMobile2 from "public/banners/banner-mobile/sem-nat-naturaal-mobile.jpg";
import bannerMobile3 from "public/banners/banner-mobile/sem-nat-origens-mobile.jpg";
import bannerMobile4 from "public/banners/banner-mobile/sem-nat-snacks-mobile.jpg";
import bannerMobile5 from "public/banners/banner-mobile/sup-o-antipulgas-mobile.jpg";
import bannerMobile6 from "public/banners/banner-mobile/sup-o-camas-mobile.jpg";
import bannerMobile7 from "public/banners/banner-mobile/sup-o-relajante-mobile.jpg";
import bannerMobile8 from "public/banners/banner-mobile/sup-o-transportadores-mobile.jpg";

import Services from "./Services";
import Information from "./information";

const Hero = () => {
  const images: string[] = Array.from([
    banner,
    banner1,
    banner2,
    banner3,
    banner4,
  ]);
  const imagesMobile: string[] = Array.from([
    bannerMobile1,
    bannerMobile2,
    bannerMobile3,
    bannerMobile4,
    bannerMobile5,
    bannerMobile6,
    bannerMobile7,
    bannerMobile8,
  ]);
  return (
    <div className="w-full h-auto aspect-auto max-w-[1920px] mx-auto">
      <Services />
      <Carrousel
        href="/"
        elements={imagesMobile}
        visibility="max-md:block hidden"
      />
      <Carrousel href="/" elements={images} visibility="md:block hidden" />
      <Information />
    </div>
  );
};
export default Hero;
