import { listOffersData } from "public/data";

interface Props {
  /*Props*/
}

const Settlement: React.FC<Props> = (props) => {
  return (
    <div className="w-full max-w-7xl m-auto xl:p-0 px-4">
      {listOffersData.settlement.map((offer, index) => (
        <div className="w-full h-auto aspect-auto" key={index}>
          <a href={offer.href}>
            <img
              className="object-contain w-full h-full md:hidden"
              src={offer.img.mobile}
              alt={offer.name}
            />
            <img
              className="object-contain w-full max-md:block hidden"
              src={offer.img.desktop}
              alt={offer.name}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Settlement;
