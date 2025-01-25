import { listOffersData } from "public/data";
import { Link } from "react-router";
import { styles } from "~/styles";

interface Props {
  /*Props*/
}

const OptionsStoreChristmasOffers: React.FC<Props> = (props) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 content-start md:gap-8 gap-4 xl:p-0 px-4 w-full  ">
      {listOffersData.fiveOffer.map((offer, index) => (
        <div className="flex flex-col items-center space-y-4" key={index}>
          <Link to={offer.href} className="aspect-auto h-auto">
            <img
              src={offer.img}
              alt={offer.title}
              className="h-full object-contain"
            />
          </Link>
          <div className="text-center">
            <h2 className={styles.h2}>{offer.title}</h2>
            <p className={`${styles.p}`}>{offer.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default OptionsStoreChristmasOffers;
