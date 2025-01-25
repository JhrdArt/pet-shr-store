import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { toast } from "sonner";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./payment-form";
import { useCheckout } from "~/context/useCheckoutDetails";
import { createPaymentIntent, updatePaymentIntent } from "~/services/request";
import { styles } from "~/styles";
interface Props {
  /*Props*/
}

const stripePromise = loadStripe(
  "pk_test_51Qhb4qIeutI1jxWEXd1SzLNFprmLotwMCCQgfh3ikrOhAjhpeZoogVHGBLtR9R6JSEktmVKQPPS9Iu0MUM9xHUeR00l7vdrs3B"
);

const PaymentProcess: React.FC<Props> = (props) => {
  const [stripeClientSecret, setStripeClientSecret] = useState<string | null>(
    null
  );
  const [currency, setCurrency] = useState("usd");
  const { typeCheckout } = useCheckout();
  const data = typeCheckout?.data;

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log("stripeClientSecret:", stripeClientSecret);
  }, [stripeClientSecret]);

  useEffect(() => {
    const redirectStatus = searchParams.get("redirect-status");

    if (redirectStatus === "successful") {
      toast.success("El pago se realizó con éxito");
      localStorage.removeItem("paymentIntendId");
    } else if (redirectStatus === "failed") {
      toast.warning("Ha ocurrido un error");
    }
  }, [searchParams]);

  const navigate = useNavigate();

  useEffect(() => {
    const checkoutStorage = localStorage.getItem("checkout-details");
    if (!data && !checkoutStorage) {
      navigate("/checkout-details");
      toast.error("No tienes permiso para acceder a esta ruta");
    }
  }, [navigate, data]);
  console.log("Stripe client initialized:", !!stripeClientSecret);
  const handleClickCurrencyChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const paymentIntentId = localStorage.getItem("paymentIntentId")!;

    const { clientSecret } = await updatePaymentIntent(
      paymentIntentId,
      e.target.value
    );
    setStripeClientSecret(clientSecret);
    setCurrency(e.target.value);
  };

  useEffect(() => {
    const initClientSecret = async () => {
      const paymentIntentId = localStorage.getItem("paymentIntentId");

      if (paymentIntentId) {
        const { clientSecret } = await updatePaymentIntent(
          paymentIntentId,
          "usd"
        );
        setStripeClientSecret(clientSecret);
      } else {
        const { clientSecret, paymentIntentId } = await createPaymentIntent(
          "usd"
        );
        localStorage.setItem("paymentIntentId", paymentIntentId);
        setStripeClientSecret(clientSecret);
      }
    };
    initClientSecret();
  }, []);

  return (
    <div className="w-full h-full max-w-7xl m-auto flex pt-4">
      <div className="w-[60%] h-full p-4 space-y-4">
        <h2 className={`${styles.h2}`}>Datos del comprador</h2>
        {typeCheckout?.type === "store" ? (
          <ul className="space-y-1">
            <li className={`${styles["p-light"]}`}>
              Nombre: {data?.user.name} {data?.user.lastName}
            </li>
            <li className={`${styles["p-light"]}`}>
              Celular: {data?.user.phoneNumber}{" "}
            </li>
            <li className={`${styles["p-light"]}`}>
              Dirección de recojo: {data && data.addressStore}
            </li>
          </ul>
        ) : (
          <ul className="space-y-1">
            <li className={`${styles["p-light"]}`}>
              Nombre: {data?.user.name} {data?.user.lastName}
            </li>
            <li className={`${styles["p-light"]}`}>
              Celular: {data?.user.phoneNumber}{" "}
            </li>
            <li className={`${styles["p-light"]}`}>
              Dirección de recojo: {data && data.addressStore}
            </li>
            <li className={`${styles["p-light"]}`}>
              Dirección de recojo: {data?.dateDelivery}
            </li>
            <li className={`${styles["p-light"]}`}>
              Dirección de recojo: {data?.deliveryCompany}
            </li>
          </ul>
        )}
      </div>
      <div className="w-[60%] h-full flex flex-col items-center justify-start">
        <h2>Selecciona tu método de pago</h2>
        {stripeClientSecret ? (
          <>
            <select onChange={handleClickCurrencyChange} value={currency}>
              <option value="usd">USD</option>
              <option value="pen">PEN</option>
            </select>
            <Elements
              stripe={stripePromise}
              options={{ clientSecret: stripeClientSecret }}
            >
              <PaymentForm />
            </Elements>
          </>
        ) : (
          <div>Cargando...</div>
        )}
      </div>
    </div>
  );
};
export default PaymentProcess;
