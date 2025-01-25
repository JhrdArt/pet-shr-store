import { headerData } from "public/data";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Button from "~/components/ui/button";
import ModalTrigger from "~/components/ui/SlidingPanel/slidding-panel-trigger";
import { useProduct } from "~/context/useProduct";
import { useSlidePanel } from "~/context/useSlidePanel";

interface Props {
  /*Props*/
}

const HeaderMobile: React.FC<Props> = (props) => {
  const { setActiveSlidePanel } = useSlidePanel();
  const { cartProducts } = useProduct();
  const [countProducts, setCountProducts] = useState<number>(0);
  useEffect(() => {
    setCountProducts(cartProducts.length);
  }, [cartProducts]);
  const handleModal = () => {
    setActiveSlidePanel("nav");
  };

  return (
    <div className="w-full h-auto bg-blue-600 flex md:hidden items-center justify-between p-2">
      <div className="flex gap-4 overflow-y-auto">
        <div>
          <Button
            type="button"
            size="icon"
            variant="icon"
            ariaLabel={headerData.header.menuMobile.open.ariaLabel}
            className="h-12 w-12"
            onClick={handleModal}
          >
            {headerData.header.menuMobile.open.icon}
          </Button>
        </div>
        <div className="flex items-center">
          <Link
            to={headerData.header.logo.link}
            className="inline-flex gap-2 items-center"
          >
            <img
              src={headerData.header.logo.src}
              alt={headerData.header.logo.name}
              className="object-contain w-12 h-12 aspect-square"
            />
          </Link>
        </div>
      </div>
      <ul className="w-fit flex items-center gap-2">
        <li className="text-white">
          <ModalTrigger modalId="modal-search">
            {headerData.header.inputLabels.icon}
          </ModalTrigger>
        </li>
        {headerData.header.actions.map((action) =>
          action.name === "Carrito" ? (
            <li key={action.name} className="relative">
              <ModalTrigger modalId="shopping">{action.icon}</ModalTrigger>
              <span className="sr-only">{action.name}</span>
              {countProducts > 0 && (
                <span className="absolute bg-red-500 w-4 h-4 text-xs text-center rounded-full right-0 text-white">
                  {countProducts}
                </span>
              )}
            </li>
          ) : (
            <li key={action.name} className="relative group">
              <Button
                type="button"
                size="icon"
                variant="icon"
                className="p-2 rounded-full"
                ariaLabel={action.ariaLabel}
              >
                <a href="/">{action.icon}</a>
              </Button>
              <span className="sr-only">{action.name}</span>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
export default HeaderMobile;
