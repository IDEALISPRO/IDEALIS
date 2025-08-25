import "./messenger.scss";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { useLocation } from "react-router-dom";

export const Messenger = () => {
  const location = useLocation();
  if (location.pathname.startsWith("/admin")) return null;
  const openWhatsApp = () => {
    const whatsappNumber = "996773446312";
    const message = encodeURIComponent("Здравствуйте! Хотелось бы узнать...");
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <div className="iconsContainer">
        <button className="iconsContainer-btn messaging" onClick={openWhatsApp}>
          <MdOutlineMessage className="iconsContainer-btn-icon" />
        </button>
        <button className="iconsContainer-btn whatsApp" onClick={openWhatsApp}>
          <FaWhatsapp className="iconsContainer-btn-icon" />
        </button>
      </div>
    </div>
  );
};
