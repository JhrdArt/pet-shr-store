import { Eye, EyeClosed } from "lucide-react";
import { PurchaseDetailsData } from "public/data";
import { useState } from "react";
import Button from "~/components/ui/button";
import { styles } from "~/styles";

interface Props {
  /*Props*/
}

const Login: React.FC<Props> = (props) => {
  const [activeSection, setActiveSection] = useState("login");
  const [isHidden, setIsHidden] = useState(false);

  const handleIsHidden = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      {/* form  */}

      <div className="w-full max-w-7xl m-auto flex flex-col h-full py-4 px-0 max-md:p-4">
        <h2 className="text-2xl font-bold mb-4">
          {PurchaseDetailsData.login.title}
        </h2>
        <div className="m-auto md:w-[600px] w-full h-[450px]">
          {/* buttons */}
          <div className="flex relative">
            <button
              aria-label="button action register"
              type="button"
              onClick={() => setActiveSection("register")}
              className={`w-1/2 h-12 text-sm font-semibold z-10 relative ${
                activeSection === "register"
                  ? "border-x border-t border-gray-400 "
                  : "border-b border-gray-400 text-gray-600"
              }`}
            >
              Regístrate
            </button>
            <button
              aria-label="button action login"
              type="button"
              onClick={() => setActiveSection("login")}
              className={`w-1/2 h-12 text-sm font-semibold z-10 relative ${
                activeSection === "login"
                  ? "border-x border-t border-gray-400  "
                  : "border-b border-gray-400 text-gray-600"
              }`}
            >
              Inicia sesión
            </button>
          </div>
          {/* content cards */}
          <div
            className={`w-full h-full border border-gray-400 border-t-0 p-8 space-y-4  ${
              activeSection === "register"
                ? "flex flex-col gap-4 text-center justify-center"
                : "hidden"
            }`}
          >
            <Button
              ariaLabel="button open register"
              className="bg-blue-600 text-white w-full mx-auto"
              variant="default"
            >
              {PurchaseDetailsData.login.registerFormInfo.button.label}
            </Button>
            <div>
              <p className={`${styles.p}`}>
                {PurchaseDetailsData.login.registerFormInfo.message}
              </p>
            </div>
          </div>

          {/* Content login */}
          <div
            className={`w-full h-full border border-gray-400  border-t-0 p-6 space-y-4 ${
              activeSection === "login"
                ? "flex flex-col gap-4 text-center"
                : "hidden"
            }`}
          >
            <p className={`${styles.p}`}>
              {PurchaseDetailsData.login.loginFormInfo.message}
            </p>
            <form className="space-y-4">
              <div className="w-full flex flex-col items-start">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  {PurchaseDetailsData.login.loginFormInfo.inputs.email.label}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={
                    PurchaseDetailsData.login.loginFormInfo.inputs.email
                      .placeholder
                  }
                  className="mt-1 w-full p-2 border-none focus:outline-none focus:ring-4 placeholder:text-sm focus:ring-blue-500 shadow-sm"
                />
              </div>
              <div className="w-full flex flex-col items-start relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  {
                    PurchaseDetailsData.login.loginFormInfo.inputs.password
                      .label
                  }
                </label>
                <input
                  type={isHidden ? "password" : "text"}
                  id="password"
                  name="password"
                  placeholder={
                    PurchaseDetailsData.login.loginFormInfo.inputs.password
                      .placeholder
                  }
                  className="mt-1 w-full p-2 border-none focus:outline-none focus:ring-4 placeholder:text-sm focus:ring-blue-500 shadow-sm"
                />
                <span
                  className="absolute right-2 top-1/2 text-xs opacity-75"
                  onClick={handleIsHidden}
                >
                  {isHidden ? <EyeClosed size={20} /> : <Eye size={20} />}
                </span>
              </div>
              <div className="flex w-full justify-between">
                <label htmlFor="remember" className="flex gap-2 items-center">
                  <input type="checkbox" aria-label="checkbox" />
                  <span className={`${styles["p-light"]}`}>
                    {
                      PurchaseDetailsData.login.loginFormInfo.inputs.remenber
                        .label
                    }
                  </span>
                </label>
                <a
                  className={`${styles["p-light"]} hover:underline`}
                  href={
                    PurchaseDetailsData.login.loginFormInfo.actions
                      .forgotPassword.href
                  }
                >
                  {
                    PurchaseDetailsData.login.loginFormInfo.actions
                      .forgotPassword.label
                  }
                </a>
              </div>
              <Button
                type="submit"
                className="bg-blue-600 text-white  rounded"
                ariaLabel="submit button"
                size="full"
              >
                {
                  PurchaseDetailsData.login.loginFormInfo.actions.loginButton
                    .label
                }
              </Button>
            </form>
            <div className="w-full space-y-4">
              <p className={`${styles.p} pb-3`}>o continúa como </p>
              <Button
                to="/checkout-details"
                className="bg-gray-900 text-white rounded hover:no-underline"
                variant="link"
                size="full"
                ariaLabel="guest button"
              >
                {
                  PurchaseDetailsData.login.loginFormInfo.actions.guestButton
                    .label
                }
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
