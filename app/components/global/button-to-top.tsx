import { ArrowUpToLineIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {}

const ButtonToTop: React.FC<Props> = (props) => {
  const [showButton, setShowButton] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleYPosition = () => {
      const windowY = window.scrollY;
      setScrollY(windowY);
    };

    document.addEventListener("scroll", handleYPosition);
    return () => document.removeEventListener("scroll", handleYPosition);
  }, []);

  useEffect(() => {
    if (scrollY >= 900) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [scrollY]);

  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleToTop}
      className={`fixed bottom-20 md:right-6 right-2 h-[58px] w-[58px] rounded-full 
                 bg-blue-600 shadow-lg z-10 cursor-pointer
                 ${
                   showButton
                     ? "opacity-100 block duration-500"
                     : "opacity-0 hidden duration-500"
                 } 
                
                 group`}
    >
      <div className="group-hover:-translate-y-1 grid place-content-center ">
        <ArrowUpToLineIcon stroke="#fff" />
      </div>
    </button>
  );
};
export default ButtonToTop;
