
import { listBrandsData } from "public/data";
import { Link } from "react-router";
import { styles } from "~/styles";

interface Props {
  /*Props*/
}

const ListBrands: React.FC<Props> = (props) => {
  return (
    <div className="gap-8 flex flex-col max-w-7xl m-auto px-4 xl:p-0">
      <div>
        <h1 className=" flex flex-wrap gap-2 items-center md:p-0">
          <strong className={styles.h1}>
            Las marcas favoritas de tus mascotas
          </strong>
          <Link
            className={`${styles.p} hover:underline hover:underline-offset-2 text-xs md:text-sm`}
            to="/"
          >
            (Ver todas las marcas disponibles)
          </Link>
        </h1>
      </div>
      <div
        className={`grid xl:grid-cols-8 grid-cols-4 place-items-center xl:gap-2 md:gap-10 md:gap-y-10 gap-y-4`}
      >
        {listBrandsData.map((brand) => (
          <div
            key={brand.id}
            className="xl:w-[133px] md:w-[173px] xl:h-[133px] md:h-[173px] sm:w-[80px] max-sm:h-[80px] aspect-auto overflow-hidden bg-gray-500 rounded-full hover:shadow-lg hover:scale-105 duration-200 shadow-inner col-span-1"
          >
            <a href="/">
              <img
                src={brand.src}
                alt={brand.name}
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ListBrands;
