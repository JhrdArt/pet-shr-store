import { useState } from "react";
import Button from "../../ui/button";
import { styles } from "~/styles";
import { aboutUs } from "public/data";

interface Props {
  /*Props*/
}

const AboutUs: React.FC<Props> = (props) => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div
      className={`w-full max-w-7xl mx-auto h-auto p-4 xl:p-0 m-8 flex flex-col gap-4`}
    >
      <div className="w-full text-balance space-y-2 h-auto">
        <h2 className={`${styles.h2} text-lg`}>{aboutUs.About.title}</h2>
        <p className={`${styles.p} font-light`}>{aboutUs.About.description}</p>
      </div>
      <div
        className={`w-full text-pretty space-y-2 ${
          seeMore ? "max-lg:block" : "max-lg:hidden"
        }`}
      >
        <h2 className={`${styles.h2} text-lg`}>{aboutUs.Delivery.title}</h2>
        <p className={`${styles.p} font-light`}>
          {aboutUs.Delivery.description}
        </p>
      </div>
      <div
        className={`w-full text-pretty space-y-2 ${
          seeMore ? "max-lg:block" : "max-lg:hidden"
        }`}
      >
        <h2 className={`${styles.h2} text-lg`}>{aboutUs.Food.title}</h2>
        <p className={`${styles.p} font-light`}>{aboutUs.Food.description}</p>
      </div>
      <div
        className={`w-full text-pretty space-y-2 ${
          seeMore ? "max-lg:block" : "max-lg:hidden"
        }`}
      >
        <h2 className={`${styles.h2} text-lg`}>{aboutUs.FunAndMore.title}</h2>
        <p className={`${styles.p} font-light`}>
          {aboutUs.FunAndMore.description}
        </p>
      </div>
      <div
        className={`w-full text-pretty space-y-2 ${
          seeMore ? "max-lg:block" : "max-lg:hidden"
        }`}
      >
        <h2 className={`${styles.h2} text-lg`}>{aboutUs.Hygiene.title}</h2>
        <p className={`${styles.p} font-light`}>
          {aboutUs.Hygiene.description}
        </p>
      </div>
      <div
        className={`w-full text-pretty space-y-2 ${
          seeMore ? "max-lg:block" : "max-lg:hidden"
        }`}
      >
        <h2 className={`${styles.h2} text-lg`}>
          {aboutUs.Pharmaceuticals.title}
        </h2>
        <p className={`${styles.p} font-light`}>
          {aboutUs.Pharmaceuticals.description}
        </p>
      </div>

      <Button
        ariaLabel="See more"
        variant="outline"
        size="full"
        className="text-black hover:bg-blue-500/30 rounded-md hidden max-lg:block"
        onClick={() => setSeeMore((prev) => !prev)}
      >
        {seeMore ? "Ver menos" : "Ver más"}
      </Button>
    </div>
  );
};
export default AboutUs;
