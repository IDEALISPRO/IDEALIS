import React, { useEffect, useRef, useState } from "react";
import "./miniMenu.scss";
import { GrHomeRounded } from "react-icons/gr";
import { RiHeartLine } from "react-icons/ri";
import { CiCirclePlus } from "react-icons/ci";
import { HiOutlineChatAlt2 } from "react-icons/hi";

export const MiniMenu = () => {
  const menuRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    const footer = document.querySelector(".footer");
    if (footer) {
      const observer = new IntersectionObserver(
        ([entry]) => setFooterVisible(entry.isIntersecting),
        { threshold: 0.1 }
      );
      observer.observe(footer);
      return () => observer.unobserve(footer);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={menuRef}
      className={`foterAdmin ${scrolled ? "stick-top" : ""} ${
        footerVisible ? "footer-visible" : ""
      } show`}
    >
      <div className="footer-nav">
        <a href="#home" className="footer-link">
          <span className="icon"><GrHomeRounded size={30} /></span>
          Главная
        </a>
        <a href="#favorites" className="footer-link">
          <span className="icon"><RiHeartLine size={30} /></span>
          Избранное
        </a>
        <a href="#submit" className="footer-link">
          <span className="icon"><CiCirclePlus size={30} /></span>
          Подать
        </a>
        <a href="#chat" className="footer-link">
          <span className="icon"><HiOutlineChatAlt2 size={30} /></span>
          Чат
        </a>
      </div>
    </div>
  );
};

export default MiniMenu;
