interface Props {
  /*Props*/
}
import { headerData } from "public/data";
import { useEffect, useState } from "react";
import Button from "~/components/ui/button";
import ModalTrigger from "~/components/ui/SlidingPanel/slidding-panel-trigger";
import { useProduct } from "~/context/useProduct";
import { styles } from "~/styles";
import { useSearchGlobal } from "~/context/useSearchGlobalValue";
import { SearchContent } from "./search-content";

const HeaderActions: React.FC<Props> = (props) => {
  const { cartProducts } = useProduct();
  const { setSearchGlobal, searchGlobal } = useSearchGlobal();
  const [countProducts, setCountProducts] = useState<number>(0);
  useEffect(() => {
    setCountProducts(cartProducts.length);
  }, [cartProducts]);

  return (
    <div
      className={`${styles.baseStyleParent} p-2 inline-flex items-center justify-between max-2xl:px-4 bgblue`}
    >
      <a
        href={headerData.header.logo.link}
        className="inline-flex gap-2 items-center"
      >
        <img
          src={headerData.header.logo.src}
          alt=""
          className="object-contain w-12 h-12 aspect-square"
        />
        <span className="font-sans text-2xl font-black text-white">
          {headerData.header.logo.name}
        </span>
      </a>
      <div className="flex gap-2 bg-white lg:px-8 px-5 py-2 group relative">
        <span className="text-blue-500">
          {headerData.header.inputLabels.icon}
        </span>
        <input
          value={searchGlobal}
          onChange={(e) => setSearchGlobal(e.target.value)}
          className="bg-transparent outline-none placeholder:text-sm xl:w-[500px] text-gray-950"
          type="text"
          placeholder={headerData.header.inputLabels.placeholder}
        />
        <SearchContent />
      </div>
      <ul className="w-fit inline-flex gap-2">
        {headerData.header.actions.map((action) =>
          action.name === "Carrito" ? (
            <li
              key={action.name}
              className="relative group rounded-full hover:bg-black/20"
            >
              <ModalTrigger className=" rounded-full" modalId="shopping">
                {action.icon}
              </ModalTrigger>
              <span className="absolute duration-300 opacity-0 invisible ease-in text-nowrap text-xs top-10 bg-black/20 px-2 py-1 rounded-tr-md rounded-b-md -left-2 text-white z-10 delay-300 group-hover:opacity-100 group-hover:visible">
                {action.name}
              </span>
              {countProducts > 0 && (
                <span className="absolute bg-red-600 w-4 h-4 text-xs text-center rounded-full right-0 text-white">
                  {countProducts}
                </span>
              )}
            </li>
          ) : (
            <li key={action.name} className="relative group">
              <Button
                size="icon"
                variant="icon"
                className="p-2 hover:bg-black/20 rounded-full"
                ariaLabel={action.ariaLabel}
              >
                <span>{action.icon}</span>
              </Button>
              <span className="absolute opacity-0 invisible duration-300 ease-in text-nowrap text-xs top-11 bg-black/20 px-2 py-1 rounded-tr-md rounded-b-md -left-3 text-white z-10 delay-300 group-hover:opacity-100 group-hover:visible">
                {action.name}
              </span>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
export default HeaderActions;
