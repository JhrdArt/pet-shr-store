import { BotIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "../ui/button";

interface Props {
  /*Props*/
}

const ChatbotTrigger: React.FC<Props> = (props) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setShowMessage(true);
    const hideTimer = setTimeout(() => {
      setShowMessage(false);
    }, 10000);
    return () => {
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="h-14 w-14 bg-blue-600 rounded-full flex items-center justify-center group relative shadow-md">
      <Button variant="icon" ariaLabel="chatbot trigger">
        <BotIcon
          className="text-white text-center group-hover:animate-bounce"
          size={25}
        />
      </Button>
      {showMessage && (
        <span
          className={`absolute bg-blue-600 px-3 py-2 text-white -left-[180px] top-1/2 -translate-y-1/2 text-nowrap ${
            showMessage ? "scale-100 " : "scale-0"
          } duration-300 rounded-t rounded-bl `}
        >
          Chatea con una IA
        </span>
      )}

      {!showMessage && (
        <span
          className={`absolute bg-blue-600 px-3 py-2 -left-[180px] text-white top-1/2 scale-0 -translate-y-1/2 text-nowrap  duration-300  rounded-t rounded-bl group-hover:scale-100`}
        >
          Chatea con una IA
        </span>
      )}
    </div>
  );
};
export default ChatbotTrigger;
