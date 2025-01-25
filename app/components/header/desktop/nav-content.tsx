import { headerData } from "public/data";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useNavbar } from "~/context/useNavbar";

interface Props {
  children: React.ReactNode;
}

const NavContent: React.FC<Props> = (props) => {
  const { navlinkHovered, setNavlinkHovered } = useNavbar();
  const navItem = headerData.nav.find((nav) => nav.name === navlinkHovered);

  if (!navItem) return null;

  return (
    <>
      {navItem.submenu && (
        <div
          className={`w-screen h-auto  bg-transparent backdrop-blur-md left-1/2 -translate-x-1/2 top-10 absolute m-auto  hidden group-hover:flex z-10 justify-center`}
        >
          <div
            onMouseLeave={() => setNavlinkHovered("")}
            className="bg-blue-800 w-[80%] h-fit shadow-md items-start justify-around  max-w-7xl p-10 flex"
          >
            {navItem.submenu &&
              navItem.sublinks?.map((slinks, index) => (
                <div className="w-fit flex flex-col gap-2 " key={index}>
                  <h2 className="uppercase font-bold text-white">
                    {slinks.Head}
                  </h2>
                  {slinks.sublink.map((sub, index) => (
                    <div className="" key={index}>
                      <Link
                        to={sub.link}
                        className="text-sm text-blue-100 hover:text-white"
                      >
                        {sub.name}
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};
export default NavContent;
