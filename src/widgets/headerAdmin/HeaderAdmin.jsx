import { RxExit } from "react-icons/rx";
import { FaPen } from "react-icons/fa";
import supp from "../../shared/img/поддержка.svg";
import "./HeaderAdmin.scss";
import logoAdmin from "../../shared/img/logoAdmin.png";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const HeaderAdmin = () => {
  const location = useLocation();
  if (!location.pathname.startsWith("/admin")) return null;
  const { t } = useTranslation();

  const linksAdmin = [
    { name: "published", path: "/admin/published" },
    { name: "without_ads", path: "/admin/no-ads" },
    { name: "advertising_requests", path: "/admin/advertising-requests" },
    { name: "pending_approval", path: "/admin/pending-confirmation" },
    { name: "deleted", path: "/admin/deleted" },
    { name: "my_listings", path: "/admin/my-objects" },
    { name: "sales", path: "/admin/sales" },
    { name: "saved_searches", path: "/admin/saved-searches" },
    { name: "others_searching", path: "/admin/others-looking" },
    { name: "views", path: "/admin/impressions" },
    { name: "lawyers", path: "/admin/lawyers" },
    { name: "new_list", path: "/admin/list-agents" },
    { name: "rules", path: "/admin/rules" },
    { name: "video", path: "/admin/video-tutorials" },
  ];

  // const [setMenuOpen] = useState(false);

  return (
    <div className="header-admin container">
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
                // onClick={() => {
                //   setMenuOpen(false);
                //   e.preventDefault();
                // }}
              >
                {t(`adminLinks.${item.name}`)}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
