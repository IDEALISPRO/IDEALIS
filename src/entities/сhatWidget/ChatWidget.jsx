import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

import { useState } from "react";

export const ChatWidget = () => {
  const [messages, setMessages] = useState([
    {
      message: "Здравствуйте! Я ваш онлайн-помощник 👋\nКак вас зовут?",
      sentTime: "just now",
      sender: "bot",
      direction: "incoming",
    },
  ]);
  const [typing, setTyping] = useState(false);

  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    question: "",
  });

  const handleSend = (text) => {
    if (!text.trim()) return;

    const newMessage = {
      message: text,
      sender: "user",
      direction: "outgoing",
    };
    setMessages((prev) => [...prev, newMessage]);
    setTyping(true);

    setTimeout(() => {
      let botReply = "";
      if (step === 0) {
        setForm((f) => ({ ...f, name: text }));
        botReply =
          "Приятно познакомиться, " +
          text +
          "! 📱 Укажите, пожалуйста, ваш номер телефона:";
        setStep(1);
      } else if (step === 1) {
        setForm((f) => ({ ...f, phone: text }));
        botReply = "Спасибо! ✍️ Опишите, пожалуйста, ваш вопрос:";
        setStep(2);
      } else if (step === 2) {
        setForm((f) => ({ ...f, question: text }));
        botReply = "Отлично! Сейчас перенаправлю вас в WhatsApp ✅";
        setStep(3);

        // открыть WhatsApp
        const phone = "996773446312"; // 👉 твой номер
        const finalMsg = `Имя: ${form.name}\nТелефон: ${form.phone}\nВопрос: ${text}`;
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(finalMsg)}`;
        setTimeout(() => window.open(url, "_blank"), 2000);
      }

      setMessages((prev) => [
        ...prev,
        {
          message: botReply,
          sender: "bot",
          direction: "incoming",
        },
      ]);
      setTyping(false);
    }, 1000);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "350px",
        height: "500px",
      }}
    >
      <MainContainer>
        <ChatContainer>
          <MessageList
            typingIndicator={
              typing ? <TypingIndicator content="Печатает..." /> : null
            }
          >
            {messages.map((msg, i) => (
              <Message key={i} model={msg} />
            ))}
          </MessageList>
          {step < 3 && (
            <MessageInput
              placeholder="Введите сообщение..."
              onSend={handleSend}
            />
          )}
        </ChatContainer>
      </MainContainer>
    </div>
  );
};
