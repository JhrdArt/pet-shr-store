import clsx from "clsx";

interface Props {
  className?: string;
}

const Separator: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={clsx(
        "xl:w-full w-[95%] max-w-7xl bg-gray-300 h-[.0313rem] px-4 xl:p-0 m-auto md:my-8 my-4",
        className
      )}
    ></div>
  );
};
export default Separator;
