import React, { useState } from "react";
import { RxExit } from "react-icons/rx";
import { FaPen } from "react-icons/fa";
import supp from "../../shared/img/поддержка.png";
import "./HeaderAdmin.scss";
import logoAdmin from "../../shared/img/logoAdmin.png";
export const HeaderAdmin = ({ activeTab = "published", onTabChange }) => {
  const [currentTab, setCurrentTab] = useState(activeTab);

  const tabs = [
    { id: "published", label: "Опубликованные" },
    { id: "no-ads", label: "Без рекламы" },
    { id: "ad-requests", label: "Заявки на рекламу" },
    { id: "pending", label: "Ожидающие подтверждения" },
    { id: "deleted", label: "Удаленные" },
    { id: "my", label: "Мои" },
    { id: "sales", label: "Продажи" },
    { id: "saved-searches", label: "Сохраненные поиски" },
    { id: "others-search", label: "Другие ищут" },
    { id: "views", label: "Показы" },
    { id: "lawyers", label: "Юристы" },
    { id: "agents-list", label: "Список агентов новостройки" },
    { id: "rules", label: "Правила" },
    { id: "video-lessons", label: "Видеоуроки" },
  ];

  const handleTabClick = (tabId) => {
    setCurrentTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

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
          <img
            className="header-admin__support none"
            src={supp}
            alt="icon"
            loading="lazy"
          />

        <div className="header-admin__actions">
          <button className="add-object-btn">Добавить объект</button>
        </div>
      </div>

      <div className="header-admin__navigation">
        <div className="nav-tabs">
          <div className="nav-tabs__container">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`nav-tab ${
                  currentTab === tab.id ? "nav-tab--active" : ""
                }`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
