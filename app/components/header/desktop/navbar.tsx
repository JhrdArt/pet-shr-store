import { Link } from "react-router";
import NavContent from "./nav-content";
import { headerData } from "public/data";
import { useNavbar } from "~/context/useNavbar";

interface Props {
  /*Props*/
}

const Navbar: React.FC<Props> = (props) => {
  const { setNavlinkHovered } = useNavbar();

  return (
    <nav className="relative w-full flex items-center bg-blue-600 max-w-7xl">
      <ul className="inline-flex gap-x-4 max-w-7xl mx-auto group">
        {headerData.nav.map((links, index) => (
          <li
            key={index}
            className={`py-2 px-10`}
            onMouseEnter={() => setNavlinkHovered(links.name)}
          >
            <Link
              className="py-2 px-10 text-sm hover:bg-blue-500/90 cursor-pointer rounded-t-md text-white"
              to={links.link}
            >
              {links.name}
            </Link>
          </li>
        ))}
        <NavContent />
      </ul>
    </nav>
  );
};
export default Navbar;
