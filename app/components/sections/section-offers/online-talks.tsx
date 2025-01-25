import { listOffersData } from "public/data";
import { Link } from "react-router";

interface Props {
  /*Props*/
}

const OnlineTalks: React.FC<Props> = (props) => {
  return (
    <div className="max-w-7xl w-full h-auto px-4 xl:p-0 m-auto">
      {listOffersData.secondOffer.map(
        ({ href, imgDesktop, imgMobile, name }, index) => (
          <Link to={href} key={index}>
            <img
              className="w-full object-contain max-md:block hidden"
              src={imgMobile}
              alt={name}
            />
            <img
              className="w-full object-contain md:block hidden"
              src={imgDesktop}
              alt={name}
            />
          </Link>
        )
      )}
    </div>
  );
};
export default OnlineTalks;
