import React, { useEffect, useRef, useState } from "react";
import "./miniMenu.scss";
import { GrHomeRounded } from "react-icons/gr";
import { RiHeartLine } from "react-icons/ri";
import { CiCirclePlus } from "react-icons/ci";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { NavLink } from "react-router-dom";

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
        <NavLink to={"/"} className="footer-link">
          <span className="icon">
            <GrHomeRounded size={30} />
          </span>
          Главная
        </NavLink>
        <NavLink to={"/favorites"} className="footer-link">
          <span className="icon">
            <RiHeartLine size={30} />
          </span>
          Избранное
        </NavLink>

        <NavLink to={"/create-object-public"} className="footer-link">
          <span className="icon">
            <CiCirclePlus size={30} />
          </span>
          Подать
        </NavLink>
      </div>
    </div>
  );
};

export default MiniMenu;
