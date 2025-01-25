import { createContext, useContext, useState } from "react";

type ChatbotContextTypes = {
  setOpenChatbot: (value: boolean) => void;
  openChatbot: boolean;
};

const ChatbotContext = createContext<ChatbotContextTypes | null>(null);

export const ChatbotContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [openChatbot, setOpenChatbot] = useState<boolean>(false);

  const value = {
    openChatbot,
    setOpenChatbot,
  };
  return (
    <ChatbotContext.Provider value={value}>{children}</ChatbotContext.Provider>
  );
};

export const useChatbotContext = () => {
  const ctx = useContext(ChatbotContext);
  if (!ctx) {
    throw new Error(
      "useChatbotContext must be used within ChatbotContextProvider"
    );
  }
  return ctx;
};
