import ChristmasOffers from "./deals-promotions";
import ListBrands from "../list-brands/list-brands";
import ListOffers from "./offers-list";
import OffersEndYear from "./offers-end";
import OnlineTalks from "./online-talks";
import OptionsStoreChristmasOffers from "./store-options";
import Settlement from "./settlement";

interface Props {
  /*Props*/
}

const SectionOffers: React.FC<Props> = (props) => {
  return (
    <div className="w-full max-w-7xl m-auto md:space-y-8 space-y-4 md:mt-8 mt-4">
      <ListBrands />
      <ListOffers />
      <OnlineTalks />
      <ChristmasOffers />
      <OffersEndYear />
      <Settlement />
      <OptionsStoreChristmasOffers />
    </div>
  );
};
export default SectionOffers;
