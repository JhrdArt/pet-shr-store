import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import Button from "~/components/ui/button";

interface Props {}

const PaymentForm: React.FC<Props> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (e: FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      toast.error(
        "Stripe no está disponible en este momento. Inténtalo más tarde."
      );
      return;
    }

    setIsLoading(true);

    try {
      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "http://localhost:5173/payment-confirmation", // URL del frontend
        },
        redirect: "if_required",
      });

      if (result.error) {
        toast.error(
          result.error.message ?? "Ha ocurrido un error desconocido."
        );
      } else {
        toast.success("¡Pago procesado exitosamente!");
        localStorage.removeItem("paymentIntentId");
      }
    } catch (error) {
      console.error(error);
      toast.error("Algo salió mal al procesar el pago.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handlePayment}>
      <PaymentElement />
      <Button
        variant="primary"
        size="full"
        ariaLabel="submit button payment"
        disabled={isLoading}
      >
        {isLoading ? "Procesando el pago..." : "Pagar"}
      </Button>
    </form>
  );
};

export default PaymentForm;
