import { Phone } from "lucide-react";
import whatsappGif from "public/icons/whatsapp.gif";
import { styles } from "~/styles";

const Services = () => {
  return (
    <div className="w-full h-auto bg-white flex max-lg:flex-col justify-between py-2 items-center max-w-7xl m-auto max-lg:space-y-4 px-4 max-xl:px-4">
      <div>
        <p className={`${styles.p}`}>
          <strong>Encuentra lo que buscas para tu mascota</strong>
        </p>
      </div>
      <div className="flex gap-2">
        <a
          href="/"
          className="bg-gray-50 md:w-fit md:px-14 px-4 py-1 flex items-center gap-2 md:gap-4 border rounded-md opacity-90 hover:opacity-100"
        >
          <div>
            <Phone stroke="#000" />
          </div>
          <div>
            <p className={`${styles.p} max-md:hidden text-nowrap text-black`}>
              <strong>Llámanos</strong>
            </p>
            <p className={`${styles.p} text-nowrap max-md:text-xs`}>
              01-067-2323
            </p>
          </div>
        </a>
        <a
          href="/"
          className="bg-gray-50 md:w-fit md:px-14 px-4 py-1 flex items-center justify-start gap-2 md:gap-4 border rounded-md opacity-90 hover:opacity-100"
        >
          <div className="w-8 h-8 md:w-12 md:h-12 aspect-square">
            <img
              src={whatsappGif}
              alt="whatsapp ico"
              className="object-contain w-full h-full "
            />
          </div>
          <div>
            <p className={`${styles.p} max-md:hidden text-nowrap text-black`}>
              <strong>Compra por Whatsapp</strong>
            </p>
            <p className={`${styles.p} max-md:text-xs text-nowrap text-black`}>
              933 493 999
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Services;
