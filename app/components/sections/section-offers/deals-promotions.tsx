import { listOffersData } from "public/data";
import { Link } from "react-router";

interface Props {
  /*Props*/
}

const ChristmasOffers: React.FC<Props> = (props) => {
  return (
    <div className="w-full flex md:gap-8 gap-4 max-lg:flex-col xl:p-0 px-4 ">
      {listOffersData.thirdOffer.map(({ img, name, href }, index) => (
        <div key={index}>
          <Link to={href} className="md:w-1/2 w-full h-auto aspect-auto">
            <img className="w-full h-full" src={img} alt={name} />
          </Link>
        </div>
      ))}
    </div>
  );
};
export default ChristmasOffers;
