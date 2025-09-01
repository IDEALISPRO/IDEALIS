import React, { useState, useEffect, useRef } from "react";
import "./header.scss";
import { useTranslation } from "react-i18next";
import { FiMenu, FiX } from "react-icons/fi";
import ru from "../../shared/ru.svg";
import kg from "../../shared/kg.svg";
import en from "../../shared/en.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { MiniMenu } from "../index";

import { useDispatch } from "react-redux";
import { headerGet } from "../../app/store/reducers/admin/header/headerThunk";
import { useHeader } from "../../app/store/reducers/admin/header/headerSlice";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  if (
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/login")
  )
    return null;

  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const { header, loading, error } = useHeader();

  useEffect(() => {
    dispatch(headerGet());
  }, [dispatch]);

  const languages = [
    { code: "ru", label: "Ру", flag: ru },
    { code: "ky", label: "Ky", flag: kg }, 
    { code: "en", label: "En", flag: en },
  ];

  const currentLang =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuOpen
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1064 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  // helper: change language, close dropdown/menu and reload the page
  const changeLanguageAndReload = (code, closeMenu = false) => {
    // i18n.changeLanguage returns a promise; wait for it to finish, then reload
    i18n.changeLanguage(code).then(() => {
      setDropdownOpen(false);
      if (closeMenu) setMenuOpen(false);
      // force full reload so server-rendered / fetched content updates
      window.location.reload();
    });
  };

  return (
    <header className="container header">
      <div className="header-logo">
        <NavLink to={"/"}>
          {header?.logo ? (
            <img className="imglogo" src={header.logo} alt="Logo" />
          ) : (
            <span>{header?.main || "IDEALIS"}</span>
          )}
        </NavLink>
      </div>

      <nav className="header-nav">
        {loading && <span>Загрузка...</span>}
        {error && <span className="error">Ошибка загрузки</span>}
        {header && (
          <>
            <NavLink to="/about" className="linka">
              {header.about_idealis}
            </NavLink>
            <NavLink to="/services" className="linka">
              {header.services}
            </NavLink>
            <NavLink to="/news" className="linka">
              {header.news}
            </NavLink>
            <NavLink to="/contacts" className="linka">
              {header.contacts}
            </NavLink>
            <NavLink to="/favorites" className="linka">
              {header.favorite}
            </NavLink>
          </>
        )}
      </nav>

      <div className="header-right">
        <div className="lang-dropdown">
          <button
            className="lang-button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {currentLang.label.slice(0, 2).toUpperCase()}
            <span className="arrow">
              <MdOutlineKeyboardArrowDown
                className={`arrow-icon ${dropdownOpen ? "rotated" : ""}`}
              />
            </span>
          </button>
          {dropdownOpen && (
            <ul className="lang-menu">
              {languages.map((lang) => (
                <li
                  key={lang.code}
                  onClick={() => changeLanguageAndReload(lang.code)}
                >
                  {lang.label}
                </li>
              ))}
            </ul>
          )}
        </div>
        <NavLink to={"/create-object-public"}>
          <button className="header-login">Добавить объект</button>
        </NavLink>
        <button className="burger-btn" onClick={() => setMenuOpen(true)}>
          <FiMenu />
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} ref={menuRef}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          <FiX />
        </button>

        {header && (
          <>
            <NavLink
              className="mobile-link"
              to="/about"
              onClick={() => setMenuOpen(false)}
            >
              {header.about_idealis}
            </NavLink>
            <NavLink
              className="mobile-link"
              to="/services"
              onClick={() => setMenuOpen(false)}
            >
              {header.services}
            </NavLink>
            <NavLink
              className="mobile-link"
              to="/contacts"
              onClick={() => setMenuOpen(false)}
            >
              {header.contacts}
            </NavLink>
            <NavLink
              className="mobile-link"
              to="/news"
              onClick={() => setMenuOpen(false)}
            >
              {header.news}
            </NavLink>
            <NavLink
              className="mobile-link"
              to="/favorites"
              onClick={() => setMenuOpen(false)}
            >
              {header.favorite}
            </NavLink>
          </>
        )}

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
                  onClick={() => changeLanguageAndReload(lang.code, true)}
                >
                  <img src={lang.flag} alt="" className="flag-icon" />
                  <span>{lang.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          className="mobile-login"
          onClick={() => {
            setMenuOpen(false);
            navigate("create-object-public");
          }}
        >
          Добавить объект
        </button>
      </div>

      <MiniMenu />
    </header>
  );
};
