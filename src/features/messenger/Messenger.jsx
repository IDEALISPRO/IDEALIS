import "./messenger.scss";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChatWidget } from "../../entities";
import { useHeader } from "../../app/store/reducers/admin/header/headerSlice";
import { useContact } from "../../app/store/reducers/public/contact/contactSlice";
import { useDispatch } from "react-redux";
import { contactGet } from "../../app/store/reducers/public/contact/contactThunks";

export const Messenger = () => {
  const location = useLocation();
  const { header } = useHeader();
  const { contact } = useContact();
  const [isChatOpen, setIsChatOpen] = useState(false);
  // const dispatch = useDispatch();

  if (
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/login")
  )
    return null;

  const openWhatsApp = () => {
    const url = header?.whatsup;
    window.open(url, "_blank");
  };


  // useEffect(() => {
  //   dispatch(contactGet());
  // }, [dispatch]);
  

  return (
    <div className="messenger">
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
