import { useEffect, useRef } from "react";
import "./footer.scss";
import { BsTelegram } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import { FaVk } from "react-icons/fa6";
import {  } from "react-icons/bi";
import footerLogo from "../../shared/img/logogo.jpg";
import Geeks from "../../shared/img/geeks.png";
import { Link, useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();
  if (
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/login")
  )
    return null;

  const footerRef = useRef();

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footer.classList.add("footer-visible");
        } else {
          footer.classList.remove("footer-visible");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(footer);

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  return (
    <div ref={footerRef} className="footer">
      <div className="sb__footer container section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links-div">
            <h4>Ош</h4>
            <h4>Бишкек</h4>
            <h4>Жалал Абад</h4>
          </div>

          <div className="sb__footer-links-div-text1">
            <h4 className="text_1">
              Начните сотрудничество с IDEALIS — найдём идеальную недвижимость
              для вас.
            </h4>
          </div>

          <div className="sb__footer-links-div-buttons">
            <div className="block2">
              <Link to="/">
                <h4>Главная</h4>
              </Link>
              <Link to="/about">
                <h4>Про IDEALIS</h4>
              </Link>
              <Link to="/services">
                <h4>Услуги</h4>
              </Link>
            </div>
            <div className="block1">
              <Link to="/news">
                <h4>Новости</h4>
              </Link>
              <Link to="/contacts">
                <h4>Контакты</h4>
              </Link>
              <div className="izbrannoe">
                <Link to="/favorites">
                  <h4>Избранное</h4>
                </Link>
              </div>
            </div>
          </div>

          <div className="sb__footer-links-div-text2">
            <h4 className="text_2">
              Самый лучший в Кыргызстане 2025 года недвижимость IDEALIS
            </h4>
          </div>

          <div className="sb__footer-links-div-socialsmedia socials-block">
            <div className="socialmedia">
              <h4>Соц сети</h4>
              <div className="socialsmedia-icon">
                <a href="https://geeks.kg/" target="_blank" rel="noopener noreferrer"><BsTelegram size={24} /></a>
                <a href="https://geeks.kg/" target="_blank" rel="noopener noreferrer"><TbBrandWhatsappFilled size={24} /></a>
                <a href="https://geeks.kg/" target="_blank" rel="noopener noreferrer"><FaVk size={24} /></a>
                <a href="https://geeks.kg/" target="_blank" rel="noopener noreferrer"><BiLogoInstagramAlt size={24} /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-logo-div">
          <img src={footerLogo} alt="IDEALIS" className="footer-logo" />
        </div>

        <hr />

        <a
          href="https://geeks.kg/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-madeby"
        >
          <img src={Geeks} alt="Geeks Logo" className="geeks-logo" />
          <span>
            MADE BY{" "}
            <strong>
              <br />
              GEEKS
            </strong>
          </span>
        </a>
      </div>
    </div>
  );
};
