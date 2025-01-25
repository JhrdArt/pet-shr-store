import HeaderDesktop from "./desktop/header-desktop";
import HeaderMobile from "./mobil/header-mobil";

interface Props {
  /*Props*/
}

const Header: React.FC<Props> = (props) => {
  return (
    <header>
      <HeaderMobile />
      <HeaderDesktop />
    </header>
  );
};
export default Header;
