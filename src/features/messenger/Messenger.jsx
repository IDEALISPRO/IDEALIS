import "./messenger.scss";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { BsFillFileTextFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useHeader } from "../../app/store/reducers/admin/header/headerSlice";

export const Messenger = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const { header } = useHeader();

  console.log(header);

  if (
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/login")
  )
    return null;

  return (
    <div className="messenger">
      <div className="iconsContainer">
        <button
          onClick={() => setOpen(!open)}
          className="iconsContainer-btn open"
        >
          <BsFillFileTextFill className="iconsContainer-btn-icon" />
        </button>

        <AnimatePresence>
          {open && (
            <>
              <a href={header.telegram} target="_blank">
                <motion.button
                  className="iconsContainer-btn telegram"
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: -80 }}
                  exit={{ opacity: 0, y: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <FaTelegramPlane className="iconsContainer-btn-icon" />
                </motion.button>
              </a>

              <a href={header.whatsup} target="_blank">
                <motion.button
                  className="iconsContainer-btn whatsApp"
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: -160 }}
                  exit={{ opacity: 0, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.05,
                  }}
                >
                  <FaWhatsapp className="iconsContainer-btn-icon" />
                </motion.button>
              </a>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
