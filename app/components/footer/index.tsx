import FooterMaxWidth from "./footer-xl";
import FooterLargeWidth from "./footer-large";
import FooterMobileWidth from "./footer-mobile";
import Separator from "../ui/separator";
import FooterBottom from "./footer-bottom";

const Footer = () => {
  return (
    <footer className="w-full max-2xl:px-4 pt-5">
      <FooterMaxWidth />
      {/* middle screen */}
      <FooterLargeWidth />
      {/* screen mobile */}
      <FooterMobileWidth />
      <Separator className="md:block hidden" />
      <FooterBottom />
    </footer>
  );
};
export default Footer;
