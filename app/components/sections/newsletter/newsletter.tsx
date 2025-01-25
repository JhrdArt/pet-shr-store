import { newsletterData } from "public/data";
import Button from "~/components/ui/button";

interface Props {
  /*Props*/
}

const Newsletter: React.FC<Props> = (props) => {
  return (
    <div className="w-full bg-blue-600 md:h-[400px] h-auto md:p-0 py-4 aspect-auto">
      <div className="max-w-7xl m-auto w-full h-full flex gap-2">
        <div className="w-1/2 h-full hidden md:block aspect-auto">
          <img
            src={newsletterData.image.src}
            alt={newsletterData.image.alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 w-full h-full p-4 flex flex-col gap-4 justify-center max-md:items-center max-md:text-center">
          <h1 className="xl:text-6xl md:text-5xl text-4xl font-bold text-white">
            {newsletterData.title}
          </h1>
          <p className="text-sm lg:text-base text-white">
            {newsletterData.description}
          </p>
          <label
            htmlFor="email"
            className="md:w-[80%] w-full h-12 bg-white content-center  "
          >
            <span className="sr-only">email</span>
            <input
              className="w-full h-full pl-2 bg-transparent outline-none text-gray-950 focus:ring-4 focus:ring-blue-100 focus:ring-opacity-50"
              type="email"
              placeholder={newsletterData.input.label}
            />
          </label>
          <Button
            ariaLabel="button send email"
            variant="outline"
            className="md:w-[80%] w-full hover:bg-blue-500/30 text-white"
            type="submit"
          >
            {newsletterData.button.label}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
