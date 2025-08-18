import React, { useState, useEffect, useRef } from "react";
import "./header.scss";
import logo from "../../shared/logoHeader.png";
import { useTranslation } from "react-i18next";
import { FiMenu, FiX } from "react-icons/fi";
import abideal from "../../shared/Book (1).svg";
import ysl from "../../shared/Profile (1).svg";
import user from "../../shared/Characteristics (1).svg";
import news from "../../shared/Info abt Practice (2).svg";
import like from "../../shared/Info abt Practice (3).svg";
import ru from "../../shared/ru.svg";
import kg from "../../shared/kg.svg";
import en from "../../shared/en.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const Header = () => {
  const { t, i18n } = useTranslation();

  const languages = [
    { code: "ru", label: "Русский", flag: ru },
    { code: "kg", label: "Кыргызча", flag: kg },
    { code: "en", label: "English", flag: en },
  ];

  const currentLang = languages.find((lang) => lang.code === i18n.language) || languages[0];

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef(null); // Reference to the mobile menu

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Auto-close menu when screen width > 1064px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1064 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on mount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <header className="container header">
      <div className="header-logo">
        <img className="imglogo" src={logo} alt="Logo" />
      </div>

      <nav className="header-nav">
        <a className="linka" href="#pro" onClick={() => setMenuOpen(false)}>
          {t("menu.about")}
        </a>
        <a className="linka" href="#services" onClick={() => setMenuOpen(false)}>
          {t("menu.services")}
        </a>
        <a className="linka" href="#news" onClick={() => setMenuOpen(false)}>
          {t("menu.news")}
        </a>
        <a className="linka" href="#contacts" onClick={() => setMenuOpen(false)}>
          {t("menu.contacts")}
        </a>
        <a className="linka" href="#gallery" onClick={() => setMenuOpen(false)}>
          {t("menu.favorites")}
        </a>
      </nav>

      <div className="header-right">
        <div className="lang-dropdown">
          <button className="lang-button" onClick={() => setDropdownOpen(!dropdownOpen)}>
            {currentLang.label.slice(0, 2).toUpperCase()}
            <span className="arrow">
              <MdOutlineKeyboardArrowDown className={`arrow-icon ${dropdownOpen ? "rotated" : ""}`} />
            </span>
          </button>
          {dropdownOpen && (
            <ul className="lang-menu">
              {languages.map((lang) => (
                <li
                  key={lang.code}
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    setDropdownOpen(false);
                  }}
                >
                  {lang.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button className="header-login">Добавить объект</button>
        <button className="burger-btn" onClick={() => setMenuOpen(true)}>
          <FiMenu />
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} ref={menuRef}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          <FiX />
        </button>

        <a className="mobile-link" href="#pro" onClick={() => setMenuOpen(false)}>
          <img src={abideal} alt="" className="mobile-icon" />
          {t("menu.about")}
        </a>
        <a className="mobile-link" href="#services" onClick={() => setMenuOpen(false)}>
          <img src={ysl} alt="" className="mobile-icon" />
          {t("menu.services")}
        </a>
        <a className="mobile-link" href="#contacts" onClick={() => setMenuOpen(false)}>
          <img src={user} alt="" className="mobile-icon" />
          {t("menu.contacts")}
        </a>
        <a className="mobile-link" href="#news" onClick={() => setMenuOpen(false)}>
          <img src={news} alt="" className="mobile-icon" />
          {t("menu.news")}
        </a>
        <a className="mobile-link" href="#gallery" onClick={() => setMenuOpen(false)}>
          <img src={like} alt="" className="mobile-icon" />
          {t("menu.favorites")}
        </a>

        <div className="mobile-lang">
          <div
            className="custom-select"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img src={currentLang.flag} alt="" className="flag-icon" />
            <span className="selected-language">{currentLang.label}</span>
            <svg className="arrow-down" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {dropdownOpen && (
            <div className="dropdown-menu">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  className="dropdown-item"
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    setDropdownOpen(false);
                  }}
                >
                  <img src={lang.flag} alt="" className="flag-icon" />
                  <span>{lang.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <button className="mobile-login" onClick={() => setMenuOpen(false)}>
          Добавить объект
        </button>
      </div>
    </header>
  );
};