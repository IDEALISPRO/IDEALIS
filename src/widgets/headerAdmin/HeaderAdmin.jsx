import { RxExit } from "react-icons/rx";
import { FaCheck, FaPen } from "react-icons/fa";
import supp from "../../shared/img/поддержка.svg";
import "./HeaderAdmin.scss";
import logoAdmin from "../../shared/img/logoAdmin.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { getUser, updateUser } from "../../app/store/reducers/auth/authThunks";
import { logout, useAuth } from "../../app/store/reducers/auth/authSlice";

export const HeaderAdmin = () => {
  const [state, setState] = useState({
    avatar: File || null,
  });
  const fileInputRef = React.useRef(null);
  const [preview, setPreview] = useState(null);
  const location = useLocation();
  if (!location.pathname.startsWith("/admin")) return null;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    name: user?.name || "",
    phone_number: user?.phone_number || "",
    avatar_url: user?.avatar_url || "",
    avatar: File || null,
  });

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

  const onFormSubmit = async () => {
    try {
      // console.log(state);

      await dispatch(updateUser(form)).unwrap();
      setIsEditing(false);
      dispatch(getUser());
    } catch {
      alert("Ошибка обновления клиента");
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const file = files[0];
      setForm((prev) => ({
        ...prev,
        avatar: file,
        avatar_url: "",
      }));
      setPreview(URL.createObjectURL(file));
    }
  };
  // const onFileChange1 = (e) => {
  //   const { name, files } = e.target;
  //   setState((prev) => ({
  //     ...prev,
  //     [name]: files[0],
  //   }));
  // };

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  // const [setMenuOpen] = useState(false);

  return (
    <div className="header-admin container">
      <div className="header-admin__top">
        <div className="header-admin__user-info">
          <div className="user-profile">
            <div className="user-profile__avatar">
              {isEditing ? (
                <>
                  <img
                    className="profile__data-image"
                    src={preview || form.avatar_url || logoAdmin}
                    alt="avatar"
                    onClick={handleDivClick}
                  />

                  <input
                    type="file"
                    style={{ display: "none" }}
                    ref={fileInputRef}
                    name="avatar"
                    onChange={onFileChange}
                  />
                </>
              ) : (
                <img src={user?.avatar_url || logoAdmin} alt="Аслан" />
              )}
            </div>
            <div
              className={`user-profile__details ${isEditing ? "editing" : ""}`}
            >
              {isEditing ? (
                <>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    className="user-profile__input"
                  />
                  <input
                    type="text"
                    name="phone_number"
                    value={form.phone_number}
                    onChange={onChange}
                    className="user-profile__input"
                  />
                </>
              ) : (
                <>
                  <h3 className="user-profile__name">{user?.name}</h3>
                  <p className="user-profile__phone">{user?.phone_number}</p>
                </>
              )}
            </div>

            <div className="user-profile__actions">
              <button
                className="user-profile__action-btn"
                title="Редактировать"
                onClick={() => {
                  setIsEditing((prev) => !prev);
                  if (isEditing) {
                    onFormSubmit();
                  } else {
                    setForm({
                      name: user?.name || "",
                      phone_number: user?.phone_number || "",
                      avatar_url: user?.avatar_url || File,
                    });
                  }
                }}
              >
                {isEditing ? <FaCheck size={13} /> : <FaPen size={13} />}
              </button>
              <button
                onClick={() => {
                  dispatch(logout());
                  navigate("/login");
                }}
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
