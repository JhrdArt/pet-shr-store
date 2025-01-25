import { useState } from "react";
import banner from "public/images/cinti-verano-desktop.jpg";
import bannerMobile from "public/images/cinti-verano-mobile.jpg";
import { X } from "lucide-react";
import Button from "../ui/button";

const Announced = () => {
  const [close, setClose] = useState(false);
  const handleCloseAnnounced = () => {
    setClose((prev) => !prev);
  };
  return (
    <div
      className={`w-full h-auto relative bg-blue-700 text-center content-center aspect-auto max-w-[1920px] mx-auto ${
        close ? "hidden" : "block"
      }`}
    >
      <img
        src={banner}
        alt="banner promo"
        className="w-full object-contain md:block hidden"
      />
      <img
        src={bannerMobile}
        alt="banner promo"
        className="w-full object-contain md:hidden block"
      />
      <Button
        className="absolute md:right-4 text-white drop-shadow-md right-2 hover:bg-black/20 max-md:bg-black/40 rounded-full -translate-y-1/2 top-1/2"
        type="button"
        variant="icon"
        size="icon"
        ariaLabel="close announced"
        onClick={handleCloseAnnounced}
      >
        <X />
      </Button>
    </div>
  );
};
export default Announced;
