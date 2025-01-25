import { listOffersData } from "public/data";
import { Link } from "react-router";

interface Props {
  /*Props*/
}

const OffersEndYear: React.FC<Props> = (props) => {
  return (
    <div className="grid grid-cols-4 max-lg:grid-cols-2 w-full md:gap-8 gap-4 place-content-center xl:p-0 px-4">
      {listOffersData.fortyOffer.map((offer, index) => (
        <div
          className="space-y-4 flex flex-col justify-start col-span-1 place-content-center"
          key={index}
        >
          <div className="aspect-square">
            <Link to={offer.href}>
              <img
                className="w-full h-full object-contain "
                src={offer.img}
                alt={offer.title}
              />
            </Link>
          </div>
          <div className="text-center space-y-2">
            <h2 className="text-gray-800 leading-tight  font-bold text-sm line-clamp-2">
              {offer.title}
            </h2>
            <p className="text-black  text-xs">{offer.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default OffersEndYear;
