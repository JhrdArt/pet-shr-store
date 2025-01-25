import { useChatbotContext } from "~/context/useChatbotOpen";

interface Props {
  /*Props*/
}

const ChatbotAIWindow: React.FC<Props> = (props) => {
  const {} = useChatbotContext();
  return (
    <div className="w-80 hidden xl:h-[450px] bg-blue-600 rounded fixed right-5 bottom-5 z-20">
      hola
    </div>
  );
};
export default ChatbotAIWindow;
