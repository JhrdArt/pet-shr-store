import HeaderActions from "./header-actions";
import Navbar from "./navbar";
interface Props {
  /*Props*/
}

const HeaderDesktop: React.FC<Props> = (props) => {
  return (
    <div className="w-full bg-blue-600 h-auto flex-col items-center hidden md:flex">
      <HeaderActions />
      <Navbar />
    </div>
  );
};
export default HeaderDesktop;
