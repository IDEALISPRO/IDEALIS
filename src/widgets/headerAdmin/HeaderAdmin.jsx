import { RxExit } from "react-icons/rx";
import { FaPen } from "react-icons/fa";
import supp from "../../shared/img/поддержка.svg";
import "./HeaderAdmin.scss";
import logoAdmin from "../../shared/img/logoAdmin.png";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";

export const HeaderAdmin = () => {
  const linksAdmin = [
    { name: "Опубликованные", path: "/" },
    { name: "Без рекламы", path: "/" },
    { name: "Заявки на рекламу", path: "/" },
    { name: "Ожидающие подтверждения", path: "/" },
    { name: "Удаленные", path: "/" },
    { name: "Мои", path: "/" },
    { name: "Продажи", path: "/" },
    { name: "Сохраненные поиски", path: "/" },
    { name: "Другие ищут", path: "/" },
    { name: "Показы", path: "/" },
    { name: "Юристы", path: "/" },
    { name: "Список агентов новостройки", path: "/" },
    { name: "Правила", path: "/" },
    { name: "Видеоуроки", path: "/" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header-admin">
      <div className="header-admin__top">
        <div className="header-admin__user-info">
          <div className="user-profile">
            <div className="user-profile__avatar">
              <img src={logoAdmin} alt="Аслан" />
            </div>
            <div className="user-profile__details">
              <h3 className="user-profile__name">Аслан</h3>
              <p className="user-profile__phone">+996 999 999 999</p>
            </div>
            <div className="user-profile__actions">
              <button
                className="user-profile__action-btn"
                title="Редактировать"
              >
                <FaPen size={13} />
              </button>
              <button
                className="user-profile__action-btn"
                title="Внешняя ссылка"
              >
                <RxExit size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="header-admin__support">
          <div className="support-info">
            <p className="support-info__title">Служба поддержки IDEAīīS</p>
            <p className="support-info__email">IDEAKIS@GMAIL.COM</p>
          </div>
        </div>

        <button className="btnSp">
          <img
            className="header-admin__support none"
            src={supp}
            alt="icon"
            loading="lazy"
          />
        </button>

        <div className="header-admin__actions">
          <button className="add-object-btn">Добавить объект</button>
        </div>
      </div>

      <div className="header-admin__navigation">
        <div className="nav-tabs">
          <div className="nav-tabs__container">
            {linksAdmin.map((item, index) => (
              <NavLink
                key={index}
                className={({ isActive }) =>
                  `nav-tab ${isActive ? "nav-tab--active" : ""}`
                }
                to={item.path}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
