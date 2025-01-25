import { useEffect, useState } from "react";
import clsx from "clsx";
import { WhatsappButtonData } from "public/data";

interface Props {
  className?: string;
  link?: boolean;
}

const WhatsappButton: React.FC<Props> = ({ className }) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setShowMessage(true);
    const hideTimer = setTimeout(() => {
      setShowMessage(false);
    }, 10000);
    return () => {
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div
      className={clsx(
        "fixed bottom-4 md:right-6 right-2 h-[58px] w-[58px] bg-transparent rounded-full group cursor-pointer group flex items-center justify-center z-10",
        className
      )}
    >
      <div className="relative w-14 h-14 z-10 overflow-hidden rounded-full">
        <a
          href="/"
          className="w-full h-full overflow-hidden m-auto rounded-full"
        >
          <img
            className="w-full h-full object-contain"
            src={WhatsappButtonData.image.src}
            alt={WhatsappButtonData.image.alt}
          />
        </a>
      </div>

      {showMessage && (
        <span
          className={`absolute bg-green-600 px-3 py-2 text-white -left-[230px] top-1/2 -translate-y-1/2 text-nowrap ${
            showMessage ? "scale-100 " : "scale-0"
          } duration-300 rounded-t rounded-bl `}
        >
          {WhatsappButtonData.label}
        </span>
      )}

      {!showMessage && (
        <span
          className={`absolute bg-green-600 px-3 py-2 -left-[230px] text-white top-1/2 scale-0 -translate-y-1/2 text-nowrap  duration-300  rounded-t rounded-bl group-hover:scale-100`}
        >
          {WhatsappButtonData.label}
        </span>
      )}
      <span className="inset-0 absolute rounded-full animate-pulse z-0 bg-green-500 w-full h-full"></span>
    </div>
  );
};
export default WhatsappButton;
