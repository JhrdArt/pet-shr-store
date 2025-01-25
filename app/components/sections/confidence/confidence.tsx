import { confidences } from "public/data";
import { forwardRef } from "react";
import { Link } from "react-router";
import { styles } from "~/styles";

interface ConfidenceProps extends React.HTMLAttributes<HTMLDivElement> {}

const Confidence = forwardRef<HTMLDivElement, ConfidenceProps>((props, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className="w-full max-w-7xl bg-blue-600 h-auto md:h-52 mx-auto grid md:grid-cols-3 grid-cols-1 p-4 max-md:gap-4"
    >
      {confidences.map(({ icon, paragraph, title, href }, index) => (
        <Link
          to={href}
          key={index}
          className="col-span-1 flex md:flex-col items-center max-md:w-full h-auto m-auto md:w-auto gap-5 max-md:py-4"
        >
          <div className="md:w-10 w-14 md:h-10 h-14 aspect-square md:m-auto">
            <img
              src={icon}
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="md:text-center space-y-2 w-full">
            <h2 className={`${styles.h2} text-white max-md:text-lg`}>
              {title}
            </h2>
            <p className={`${styles.p} text-white max-md:text-base`}>
              {paragraph}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
});
export default Confidence;
