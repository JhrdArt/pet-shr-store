import { Dog, SendHorizonal, User2, X } from "lucide-react";
import { useChatbotContext } from "~/context/useChatbotOpen";
import Button from "../ui/button";
import { useEffect, useState, type FormEvent } from "react";

interface Props {
  /*Props*/
}

type Message = {
  role: "bot" | "user";
  message: string;
};

const ChatbotAIWindow: React.FC<Props> = (props) => {
  const { openChatbot, setOpenChatbot } = useChatbotContext();
  const [error, setError] = useState("");
  const [userMessage, setUserMessage] = useState<Message["message"]>("");
  const [messages, setMessage] = useState<Message[]>([
    {
      role: "bot",
      message:
        "Hola, soy Pelusa 🐶, tu asistente IA, estoy aquí para ayudarte a elegir el mejor producto para tu mascota. ¿Tienes alguna consulta?",
    },
    {
      role: "user",
      message: "",
    },
  ]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message: Message = {
      role: "user",
      message: userMessage.trim(),
    };
    setMessage((prev) => [...prev, message]);
    setUserMessage("");
  };

  return (
    <div
      className={`w-[350px] xl:h-[450px] bg-white rounded fixed right-5 bottom-100 z-20 px-2 py-4 shadow-lg duration-300 ease-out space-y-2 ${
        openChatbot ? "visible" : "animate-slide-out invisible"
      } `}
    >
      <div className="flex w-full items-center justify-between h-10 ">
        <h3 className="flex gap-1">
          <strong>Pelusa bot</strong>
        </h3>
        <Button
          ariaLabel="close bot"
          type="button"
          size="icon"
          className="p-2 hover:bg-black/10 rounded"
          onClick={() => setOpenChatbot(!openChatbot)}
        >
          <X />
        </Button>
      </div>
      {/*! Messages */}
      <div className="w-full h-80 flex flex-col gap-2 overflow-hidden">
        {messages.map(
          (message, index) =>
            message.message !== "" && (
              <div
                className={`w-full flex  text-[13px] px-2 py-4 rounded gap-4 ${
                  message.role === "bot" ? "bg-gray-100" : " "
                }`}
                key={index}
              >
                {message.role === "bot" ? (
                  <span className="bg-blue-600 text-white h-fit rounded-full p-1">
                    <Dog size={18} />
                  </span>
                ) : (
                  <span className="bg-gray-300 h-fit rounded-full p-1">
                    <User2 size={18} />
                  </span>
                )}
                {message.message}
              </div>
            )
        )}
      </div>
      {/* "submit message" */}
      <form
        className="w-full h-14 py-1 flex justify-between items-center group"
        onSubmit={onSubmit}
      >
        <div className="w-full h-full p-1 flex items-center rounded duration-300 group-focus-visible:border-blue-500  border">
          <input
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            type="text"
            className="w-full outline-none h-6 pl-2 text-sm"
            placeholder="¿En qué puedo ayudarte?"
          />
          <Button
            ariaLabel="send button"
            type="submit"
            disabled={!userMessage}
            className={` rounded w-12 p-0  ${
              userMessage
                ? "bg-blue-600"
                : "disabled:bg-gray-200 disabled:cursor-not-allowed"
            }`}
          >
            <SendHorizonal
              className={` ${userMessage ? "text-blue-200" : "text-gray-600"}`}
            />
          </Button>
        </div>
      </form>
      <p className="text-[10px] text-center text-gray-700">
        La IA podría cometere errores
      </p>
    </div>
  );
};
export default ChatbotAIWindow;
