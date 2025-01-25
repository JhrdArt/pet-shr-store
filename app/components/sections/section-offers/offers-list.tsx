import { listOffersData } from "public/data";
import { Link } from "react-router";

interface Props {
  /*Props*/
}

const ListOffers: React.FC<Props> = (props) => {
  return (
    <div className="w-full max-w-7xl m-auto px-4 xl:p-0">
      <div className="md:space-y-8 space-y-4">
        <h1 className="text-xl text-black font-bold">
          {listOffersData.firstOffers.title}
        </h1>
        <div className="flex w-full h-auto justify-between max-lg:flex-col xl:flex gap-8">
          {listOffersData.firstOffers.offers.map((offer, index) => (
            <div className="md:space-y-8 space-y-4 text-center" key={index}>
              <div className="aspect-auto">
                <Link to={offer.href}>
                  <img
                    className="w-full h-auto object-contain"
                    src={offer.img}
                    alt={offer.description}
                  />
                </Link>
              </div>
              <p className="text-black text-sm font-light">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ListOffers;
