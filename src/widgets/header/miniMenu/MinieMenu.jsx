import React, { useEffect } from "react";
import "./miniMenu.scss";
import { GrHomeRounded } from "react-icons/gr";
import { RiHeartLine } from "react-icons/ri";
import { CiCirclePlus } from "react-icons/ci";
import { HiOutlineChatAlt2 } from "react-icons/hi";

export const MiniMenu = () => {
  useEffect(() => {
    const footer = document.querySelector('.foterAdmin');

    const handleScroll = () => {
      if (window.scrollY > 100) {
        footer.classList.add('stick-top');
      } else {
        footer.classList.remove('stick-top');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="foterAdmin">
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
