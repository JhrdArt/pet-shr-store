import { informationData } from "public/data";

interface Props {
  /*Props*/
}

const Information: React.FC<Props> = (props) => {
  return (
    <div className="w-full bg-gray-100 h-auto max-2xl:px-4">
      <div className="max-w-7xl grid md:grid-cols-4 grid-cols-2 m-auto justify-between">
        {informationData.map(({ title, subtitle, img }, index) => (
          <div
            className="flex col-span-1 w-fit p-2 items-center gap-2"
            key={index}
          >
            <div className="w-12 h-12 aspect-square content-center">
              <img src={img} alt="" className="w-full object-contain" />
            </div>
            <div>
              <a
                href=""
                className="text-black text-sm font-bold hover:underline hover:underline-offset-2"
              >
                {title}
              </a>
              <p className="text-black text-xs">{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Information;
