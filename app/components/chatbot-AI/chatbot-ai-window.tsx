import { Dog, SendHorizonal, Trash2, User2, X } from "lucide-react";
import { useChatbotContext } from "~/context/useChatbotOpen";
import Button from "../ui/button";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { styles } from "~/styles";
import dogBot from "public/images/bot-doggi.png";
import { postQuestionAI } from "~/services/question";
import { toast } from "sonner";

interface Props {
  /*Props*/
}

type Message = {
  role: "Chatbot" | "User";
  message: string | null;
};

type FaqTypes = (typeof faqArray)[number]["value"];

const ChatbotAIWindow: React.FC<Props> = (props) => {
  const { openChatbot, setOpenChatbot } = useChatbotContext();
  const [faqMessage, setFaqMessage] = useState<FaqTypes>();
  const [error, setError] = useState("");
  const [userMessage, setUserMessage] = useState<Message["message"]>("");
  console.log("🚀 ~ userMessage:", userMessage);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "Chatbot",
      message:
        "Hola, soy GuauGPT 🐕‍🦺, tu asistente IA, y estoy aquí para ayudarte a elegir el mejor producto para tu mascota. ¿Tienes alguna consulta?",
    },
  ]);

  const handleFaqClick = async (faqMsg: FaqTypes) => {
    setMessages((prev) => [...prev, { role: "User", message: faqMsg }]);
    setMessages((prev) => [
      ...prev,
      { role: "Chatbot", message: "Pensando..." },
    ]);

    try {
      const res = await postQuestionAI(faqMsg);
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          role: "Chatbot",
          message:
            res.message.content[0].text ??
            "Lo siento, no puedo responder en este momento.",
        },
      ]);
    } catch (error: any) {
      setError(error && error.message);
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { role: "Chatbot", message: "Hubo un error al procesar tu solicitud." },
      ]);
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userMessage?.trim()) return;
    setMessages((prev) => [...prev, { role: "User", message: userMessage }]);
    setMessages((prev) => [
      ...prev,
      { role: "Chatbot", message: "Estoy pensando... 🐾" },
    ]);
    setUserMessage("");
    try {
      const res = await postQuestionAI(userMessage);
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          role: "Chatbot",
          message:
            res.message.content[0].text ??
            "Lo siento, en este momento no podemos atenderte",
        },
      ]);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const messagesRef = useRef<HTMLDivElement>(null); //actualizar el height al tamaño del scrollTop
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  const handleClearMessages = () => {
    //resetear el chatbothttps://samir-dev.netlify.app/
    setMessages([
      {
        role: "Chatbot",
        message:
          "Hola, soy GuauGPT 🐕‍🦺, tu asistente IA, y estoy aquí para ayudarte a elegir el mejor producto para tu mascota. ¿Tienes alguna consulta?",
      },
    ]);
  };

  const [checkedButton, setCheckedButton] = useState(false);

  return (
    <div
      className={`w-[350px] xl:h-[480px] ${
        messages.some((m) => m.role === "User") && "md:h-[650px]"
      } bg-white rounded fixed right-5 bottom-5 z-30 px-2 py-4 shadow-lg duration-300 ease-out space-y-2 grid grid-rows-[40px_1fr_80px] ${
        openChatbot ? "visible " : "animate-slide-out invisible"
      }`}
    >
      <div className="flex w-full items-center justify-between row-span-1">
        <h3 className="flex gap-1">
          <strong>GuauGPT</strong>
        </h3>
        <div className="pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 transition duration-200 ease-in-out ring-inset bg-slate-900/10 ring-slate-900/5">
          <div
            className={`size-4 rounded-full bg-white ring-1 shadow-xs ring-slate-700/10 transition duration-200 ease-in-out`}
          ></div>
        </div>
        <div>
          <Button
            ariaLabel="close bot"
            type="button"
            size="icon"
            className="p-2 hover:bg-black/10 rounded"
            onClick={handleClearMessages}
          >
            <Trash2 />
          </Button>
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
      </div>
      {/*! Messages */}
      <div
        className="w-full flex flex-col gap-2 overflow-hidden row-span-1 overflow-y-auto"
        ref={messagesRef}
      >
        {messages.map((message, index) => (
          <div
            className={`w-full grid grid-cols-[40px_1fr] text-[13px] px-2 py-4 rounded gap-0 h-fit ${
              message.role === "Chatbot" ? "bg-gray-100" : " "
            }`}
            key={index}
          >
            {message.role === "Chatbot" ? (
              <span className="bg-blue-600 text-white  rounded-full p-1 w-8 h-8 col-span-1">
                <img
                  src={dogBot}
                  alt="doggi bot"
                  className="w-full h-full object-contain"
                />
              </span>
            ) : (
              <span className="bg-gray-200 h-8 w-8 rounded-full p-1 col-span-1 content-center">
                <User2 size={18} className="m-auto " />
              </span>
            )}
            <p className="col-span-1">{message.message}</p>
          </div>
        ))}
        {!messages.some((m) => m.role === "User") && (
          <div className="w-full space-y-4 mt-4">
            <h4 className="text-xs">Preguntas frecuentes:</h4>
            {faqArray.map((question, i) => (
              <div
                onClick={() => handleFaqClick(question.question)}
                key={i}
                className="py-2 pl-2 border rounded-full hover:border-blue-500 duration-300"
              >
                <button
                  onClick={() => setFaqMessage(question.value)}
                  type="submit"
                  className={`${styles["p-light"]} text-xs select-none cursor-auto`}
                >
                  {question.question}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* "submit message" */}
      <div className="w-full py-1 flex flex-col items-center row-span-1">
        <form
          onSubmit={onSubmit}
          className="w-full h-full p-1 flex items-center rounded duration-300 focus-within:border-blue-500  border"
        >
          <input
            value={userMessage as string}
            onChange={(e) => setUserMessage(e.target.value)}
            type="text"
            className="w-full outline-none h-6 px-2 text-sm"
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
        </form>
        <p className="text-[10px] text-center text-gray-700">
          La IA podría cometer errores
        </p>
      </div>
    </div>
  );
};
export default ChatbotAIWindow;

const faqArray = [
  {
    question: "¿Qué comida me recomendarías para mi gatito?",
    value: "¿Qué comida me recomendarías para mi gatito?",
  },
  {
    question: "¿Qué comida me recomendarías para mi perrito?",
    value: "¿Qué comida me recomendarías para mi perrito?",
  },
  {
    question: "Coméntame sobre las promociones existentes",
    value: "Coméntame sobre las promociones existentes",
  },
];
