import { useSlidePanel } from "~/context/useSlidePanel";
import Button from "../button";

interface Props {
  children: React.ReactNode;
  modalId: string;
  className?: string;
}

const ModalTrigger: React.FC<Props> = ({ children, modalId, className }) => {
  const { setActiveSlidePanel } = useSlidePanel();
  const handleOpen = () => {
    setActiveSlidePanel(modalId);
  };
  return (
    <Button
      type="button"
      size="icon"
      variant="icon"
      ariaLabel="Modal Trigger"
      onClick={handleOpen}
      className={className}
    >
      {children}
    </Button>
  );
};
export default ModalTrigger;
