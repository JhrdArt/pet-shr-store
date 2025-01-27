import { BotIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "../ui/button";
import { useChatbotContext } from "~/context/useChatbotOpen";
import dogBot from "public/images/bot-doggi.png";
interface Props {
  /*Props*/
}

const ChatbotTrigger: React.FC<Props> = (props) => {
  const [showMessage, setShowMessage] = useState(false);
  const { openChatbot, setOpenChatbot } = useChatbotContext();

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowMessage(true);

      const hideTimer = setTimeout(() => {
        setShowMessage(false);
      }, 10000);

      return () => clearTimeout(hideTimer);
    }, 12000);

    return () => clearTimeout(showTimer);
  }, []);

  const handleOpenChatbot = () => {
    setOpenChatbot(!openChatbot);
  };

  return (
    <div
      className="h-14 w-14 bg-blue-600 rounded-full flex items-center justify-center group relative shadow-md"
      onClick={handleOpenChatbot}
    >
      <Button variant="icon" ariaLabel="chatbot trigger">
        <img
          src={dogBot}
          alt="GuauGPT img"
          className="w-14 h-14 object-contain "
        />
      </Button>
      {showMessage && (
        <span
          className={`absolute bg-blue-600 px-3 py-2 text-white -left-[150px] top-1/2 -translate-y-1/2 text-nowrap ${
            showMessage ? "scale-100 " : "scale-0"
          } duration-300 rounded-t rounded-bl text-xs`}
        >
          Chatea con GuauGPT
        </span>
      )}

      {!showMessage && (
        <span
          className={`absolute bg-blue-600 px-3 py-2 -left-[150px] text-white top-1/2 scale-0 -translate-y-1/2 text-nowrap duration-300  rounded-t rounded-bl group-hover:scale-100 text-xs`}
        >
          Chatea con GuauGPT
        </span>
      )}
    </div>
  );
};
export default ChatbotTrigger;
