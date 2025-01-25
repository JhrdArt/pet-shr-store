import { footerBottom } from "public/data";
import { Link } from "react-router";
import { styles } from "~/styles";

interface Props {
  /*Props*/
}

const FooterBottom: React.FC<Props> = (props) => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-4 px-4 xl:px-0">
      <div className=" grid lg:grid-cols-3 grid-cols-1 max-lg:gap-6 place-content-center py-10">
        <div className="col-span-1 content-center mx-auto order-2 lg:order-1">
          <div className="flex items-center gap-4">
            <img
              className="w-24"
              src={footerBottom.logo.src}
              alt={footerBottom.logo.alt}
            />
            <span className={`text-black text-4xl font-black`}>
              {footerBottom.logo.name}
            </span>
          </div>
        </div>
        <div className="col-span-1 content-center mx-auto order-3 lg:order-2">
          <p className={`${styles.p}`}>{footerBottom.rights}</p>
        </div>
        <ul className="flex col-span-1 items-center justify-center gap-4 ">
          {footerBottom.socials.map((social, index) => (
            <li className="text-black" key={index}>
              <Link to={social.url}>{social.icon}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full text-center py-4 border-t">
        <p className="text-sm ">
          <em className="text-black">Developed by</em>{" "}
          <a
            className="font-bold text-black"
            href="https://samir-dev.netlify.app/"
            target="_blank"
          >
            Samir Arteaga
          </a>
        </p>
      </div>
    </div>
  );
};
export default FooterBottom;
