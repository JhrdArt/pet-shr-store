import { CheckoutDetailsData } from "public/data";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import Button from "~/components/ui/button";
import { useCheckout } from "~/context/useCheckoutDetails";
import { useProduct } from "~/context/useProduct";
import { useUserData } from "~/context/useUserData";
import { styles } from "~/styles";
import { TypePickUp, type User } from "~/types";
interface Props {
  /*Props*/
}

const CheckoutDetails: React.FC<Props> = (props) => {
  const { cartProducts } = useProduct();
  const [selectedOption, setSelectedOption] = useState("tienda");
  const [nextPage, setNextPage] = useState(false);
  const { user, setUser } = useUserData();
  const { setTypeCheckout } = useCheckout();
  const totalProducts = cartProducts.reduce(
    (total, product) =>
      (total + product.price.salesPrice.value) * product.selectedQuantity,
    0
  );

  const TAXES_PERCENT = 18;
  const totalProductsWithTaxes =
    totalProducts + (totalProducts * TAXES_PERCENT) / 100;

  const productQuantities = cartProducts.reduce(
    (total, prod) => total + prod.selectedQuantity,
    0
  );

  const navigate = useNavigate();

  const deliveryOption = CheckoutDetailsData.formulary.deliveryOption;
  const storeOption = CheckoutDetailsData.formulary.storeOption;

  const currentOption =
    selectedOption === "delivery" ? deliveryOption : storeOption;

  const handleInputChange = (key: string, value: string) => {
    setUser({ ...user, [key]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedOption === "delivery") {
      if (
        !user.name ||
        !user.lastName ||
        !user.phoneNumber ||
        !user.address ||
        !user.department ||
        !user.province
      ) {
        toast.warning(
          "Rellena los campos para proseguir con el siguiente paso"
        );
        return;
      }
      const userDelivery = {
        id: "1",
        user,
        dateDelivery: new Date(2025, 1, 16).toString(),
        deliveryCompany: "InDrive",
      };

      const deliveryData = {
        type: TypePickUp.DELIVERY,
        data: userDelivery,
      };

      setTypeCheckout(deliveryData);

      if (deliveryData) {
        navigate("/payment-process");
        toast.success("Registro validado");
      }
    } else if (selectedOption === "tienda") {
      if (!user.name || !user.lastName || !user.phoneNumber) {
        toast.warning(
          "Rellena los campos para proseguir con el siguiente paso"
        );
        return;
      }
      const userStore = {
        id: "2",
        user,
        addressStore: "Urb. San Diego Mz A lt 15",
      };

      const dataStore = {
        type: TypePickUp.STORE,
        data: userStore,
      };
      setTypeCheckout(dataStore);

      if (dataStore) {
        navigate("/payment-process");
        toast.success("Registro validado");
      }
    }
  };

  return (
    <div className="w-full h-auto max-w-7xl mx-auto my-4 flex max-lg:flex-col gap-5">
      <div className="lg:w-[60%] w-full h-[900px] border">
        <div className="p-4 border-b border-dashed">
          <h2 className={`${styles.h1} text-red-600`}>
            {CheckoutDetailsData.formulary.title}
          </h2>
        </div>
        <div className="w-full p-4 space-y-4">
          <h4 className="text-sm font-light">
            {CheckoutDetailsData.formulary.typeCollectProduct.selectOptionTitle}
          </h4>
          <div className="w-full flex gap-4">
            {CheckoutDetailsData.formulary.typeCollectProduct.options.map(
              (option, index) => (
                <div
                  key={index}
                  className={`w-1/2 p-4 border ${
                    selectedOption === option.name
                      ? "bg-blue-100"
                      : "bg-gray-100 opacity-50"
                  }`}
                  onClick={() => {
                    setSelectedOption(option.name);
                  }}
                >
                  <label
                    htmlFor={option.desc}
                    className="flex items-start gap-4"
                  >
                    <input
                      id={option.desc}
                      type="radio"
                      checked={option.name === selectedOption}
                      aria-label="radio type select"
                      onChange={(e) => {
                        console.log("checked", option.name === selectedOption);
                      }}
                      className="w-5 h-5"
                    />
                    <div className="flex flex-col gap-2">
                      <h5 className="text-sm font-semibold">{option.label}</h5>
                      <p className="text-xs">{option.desc}</p>
                    </div>
                  </label>
                </div>
              )
            )}
          </div>

          <div className="space-y-4">
            <h4 className="font-light text-sm ">{currentOption.desc}</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              {currentOption.clientDataForm.map((field) => (
                <div key={field.key} className="flex flex-col">
                  <label
                    htmlFor={field.key}
                    className="text-xs font-medium text-gray-600 mb-1"
                  >
                    {field.label}
                  </label>
                  <input
                    type="text"
                    id={field.key}
                    placeholder={field.placeholder}
                    value={user[field.key as keyof User] || ""}
                    onChange={(e) =>
                      handleInputChange(field.key, e.target.value)
                    }
                    className="border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}
              <Button
                ariaLabel={CheckoutDetailsData.formulary.sendButtonData.label}
                size="full"
                variant="primary"
                type="submit"
                onClick={() => handleSubmit}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                {CheckoutDetailsData.formulary.sendButtonData.label}
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="lg:w-[40%] w-full h-auto">
        <div className="w-full h-auto bg-gray-100 p-8 space-y-4">
          <h4 className={`${styles.h3}`}>
            {CheckoutDetailsData.summaryOrder.title}
          </h4>
          <div className="w-full space-y-4">
            <div className="flex justify-between w-full items-end leading-0">
              <p className={`${styles["p-light"]}`}>
                {CheckoutDetailsData.summaryOrder.cantProducts}
              </p>
              <div className="w-[80%] opacity-40 h-[1px] border-[1px] leading-none mb-1 border-black border-dashed"></div>
              <p className={`${styles["p-light"]}`}>{productQuantities}</p>
            </div>
            <div className="flex justify-between w-full items-end">
              <p className={`${styles["p-light"]}`}>
                {CheckoutDetailsData.summaryOrder.sub}
              </p>
              <div className="w-[75%] opacity-40 h-[1px] border-[1px] leading-none mb-1 border-black border-dashed"></div>
              <p className={`${styles["p-light"]}`}>{totalProducts}</p>
            </div>
            {selectedOption === "delivery" && (
              <div className="flex justify-between w-full items-end">
                <p className={`${styles["p-light"]}`}>
                  {CheckoutDetailsData.summaryOrder.delivery}
                </p>
                <div className="w-[66%] opacity-40 h-[1px] border-[1px] leading-none mb-1 border-black border-dashed"></div>
                <p className={`${styles["p-light"]}`}>Gratis</p>
              </div>
            )}
            <div className="flex justify-between w-full">
              <p className={`${styles.h2} text-xl`}>
                {CheckoutDetailsData.summaryOrder.total}
              </p>
              <p className={`${styles.h2} text-xl`}>
                S/. {totalProductsWithTaxes.toFixed(2)}
              </p>
            </div>
          </div>
          <p className="text-xs">{CheckoutDetailsData.summaryOrder.message}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetails;
