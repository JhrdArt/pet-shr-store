import { PurchaseDetailsData } from "public/data";
import { Link, Outlet } from "react-router";
import FooterBottom from "~/components/footer/footer-bottom";
import { styles } from "~/styles";

interface Props {
  children: React.ReactNode;
}

const Purchase: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-screen flex flex-col">
      <header className="w-full bg-blue-600 py-1 mx-auto px-0 max-md:px-4">
        <div className="w-full h-full mx-auto flex max-w-7xl justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <img
              className="w-10 h-10"
              src={PurchaseDetailsData.login.header.logo}
              alt={PurchaseDetailsData.login.header.name}
            />
            <p className={`${styles.h1} text-white`}>
              {PurchaseDetailsData.login.header.name}
            </p>
          </a>
          <div className={`${styles.p} text-white`}>
            {PurchaseDetailsData.login.header.title}
          </div>
          <div className="text-white">
            {PurchaseDetailsData.login.header.icon}
          </div>
        </div>
      </header>
      <div className="w-full bg-gray-300 py-1 px-0 max-md:px-4">
        <div className="max-w-7xl mx-auto flex justify-between">
          <Link
            className="flex items-center text-sm hover:underline hover:underline-offset-2"
            to={PurchaseDetailsData.login.action.links.toBack.href}
          >
            {PurchaseDetailsData.login.action.links.toBack.icon}{" "}
            {PurchaseDetailsData.login.action.links.toBack.title}
          </Link>
          <div>
            <div className="hidden md:flex">
              <p className={`${styles["p-light"]}`}>
                {PurchaseDetailsData.login.action.links.call.desktop}{" "}
                <a
                  href="/"
                  className="hover:underline hover:underline-offset-2 font-medium"
                >
                  {PurchaseDetailsData.login.action.links.call.number}
                </a>
              </p>
            </div>
            <div className="md:hidden flex">
              <p className={`${styles["p-light"]} flex gap-2 items-center`}>
                {PurchaseDetailsData.login.action.links.call.mobile}{" "}
                <a
                  href="/"
                  className="hover:underline hover:underline-offset-2 font-medium"
                >
                  {PurchaseDetailsData.login.action.links.call.number}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
      <FooterBottom />
    </div>
  );
};
export default Purchase;
