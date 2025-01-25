import { ChevronRight } from "lucide-react";
import { headerData } from "public/data";
import { useRef, useState } from "react";
import Button from "~/components/ui/button";
import SlidePanel from "~/components/ui/SlidingPanel/sliding-panel";
import type { NavLinksTypes } from "~/context/useNavbar";
import { useSlidePanel } from "~/context/useSlidePanel";

interface Props {}

const ModalNavContent: React.FC<Props> = () => {
  const [heading, setHeading] = useState<NavLinksTypes>("");
  const refModalNav = useRef<HTMLDivElement>(null);
  const { setActiveSlidePanel } = useSlidePanel();

  return (
    <SlidePanel
      type="button"
      id="nav"
      ref={refModalNav}
      size="full"
      pos="left"
      classname="md:hidden"
      buttonSide="right"
    >
      <div className="w-full bg-white h-full p-4 overflow-y-auto">
        <h2 className="text-black text-xl mb-4 font-bold uppercase">Menú</h2>
        {headerData.nav.map((link, index) => (
          <div
            key={index}
            className="cursor-pointer border-b border-b-black p-2"
          >
            <div className="w-full flex items-center">
              <h2
                className="text-black w-fit font-black uppercase flex items-center gap-2"
                onClick={() =>
                  setHeading((prev) => (prev === link.name ? "" : link.name))
                }
              >
                <span className="text-black">{link.icon}</span>
                {link.name}
                {link.submenu && (
                  <ChevronRight
                    stroke="#000"
                    size={15}
                    className={`${
                      heading === link.name ? "rotate-90" : "rotate-0"
                    } duration-300`}
                  />
                )}
              </h2>
              <Button
                ariaLabel="see all"
                size="sm"
                variant="link"
                to={link.link}
                className="text-black ml-auto text-xs"
                onClick={() => setActiveSlidePanel("")}
              >
                ver
              </Button>
            </div>

            {link.submenu && (
              <div
                className={`
                  transform duration-300 ease-in-out overflow-hidden
                  ${
                    heading === link.name
                      ? "max-h-screen translate-x-0 opacity-100"
                      : "max-h-0 -translate-x-full opacity-0"
                  }
                `}
              >
                {link.sublinks?.map((slink, index) => (
                  <div key={index}>
                    <h3 className="text-sm uppercase font-bold text-black my-2 pl-4">
                      {slink.Head}
                    </h3>
                    {slink.sublink.map((sub, index) => (
                      <div
                        className="text-sm border-b w-fit py-2 text-black font-sans font-medium pl-6"
                        key={index}
                        onClick={() => setActiveSlidePanel("")}
                      >
                        <a href="#">{sub.name}</a>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-auto">
        <Button
          to="/login"
          ariaLabel="button mobil login"
          variant="link"
          size="full"
          className="bg-blue-600 text-white"
          onClick={() => setActiveSlidePanel("")}
        >
          Iniciar sesión / Registrate
        </Button>
      </div>
    </SlidePanel>
  );
};

export default ModalNavContent;
