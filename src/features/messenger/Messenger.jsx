import "./messenger.scss";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { ChatWidget } from "../../entities";

export const Messenger = () => {
  const location = useLocation();
  const [isChatOpen, setIsChatOpen] = useState(false);

  if (
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/login")
  )
    return null;

  const openWhatsApp = () => {
    const whatsappNumber = "996773446312";
    const message = encodeURIComponent("Здравствуйте! Хотелось бы узнать...");
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <div className="iconsContainer">
        <button
          className="iconsContainer-btn messaging"
          onClick={() => setIsChatOpen((prev) => !prev)}
        >
          <MdOutlineMessage className="iconsContainer-btn-icon" />
        </button>

        <button className="iconsContainer-btn whatsApp" onClick={openWhatsApp}>
          <FaWhatsapp className="iconsContainer-btn-icon" />
        </button>
      </div>

      {isChatOpen && (
        <div className="chat-popup">
          <div className="chat-header">
            <span>Онлайн-помощник</span>
            <button className="close-btn" onClick={() => setIsChatOpen(false)}>
              ✖
            </button>
          </div>
          <ChatWidget />
        </div>
      )}
    </div>
  );
};
