import { useEffect, useRef } from "react";
import "./footer.scss";
import { BsTelegram } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import { FaVk } from "react-icons/fa6";
import footerLogo from "../../shared/img/logogo.jpg";
import Geeks from "../../shared/img/geeks.png";
import { Link, useLocation } from "react-router-dom";


import { useHeader } from "../../app/store/reducers/admin/header/headerSlice";

export const Footer = () => {
  const location = useLocation();
  if (
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/login")
  )
    return null;

  const footerRef = useRef();

  const { header } = useHeader(); 
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
            <h4
              className="text_1"
              dangerouslySetInnerHTML={{ __html: header?.footer_text }}
            />
          </div>

    
          <div className="sb__footer-links-div-buttons">
            <div className="block2">
              <Link to="/"><h4>Главная</h4></Link>
              <Link to="/about"><h4>{header?.about_idealis || "Про IDEALIS"}</h4></Link>
              <Link to="/services"><h4>{header?.services || "Услуги"}</h4></Link>
            </div>
            <div className="block1">
              <Link to="/news"><h4>{header?.news || "Новости"}</h4></Link>
              <Link to="/contacts"><h4>{header?.contacts || "Контакты"}</h4></Link>
              <div className="izbrannoe">
                <Link to="/favorites"><h4>{header?.favorite || "Избранное"}</h4></Link>
              </div>
            </div>
          </div>

          <div className="sb__footer-links-div-text2">
            <h4 className="text_2">{header?.slogan_footer}</h4>
          </div>

       
          <div className="sb__footer-links-div-socialsmedia socials-block">
            <div className="socialmedia">
              <h4>Соц сети</h4>
              <div className="socialsmedia-icon">
                {header?.telegram && (
                  <a href={header.telegram} target="_blank" rel="noopener noreferrer">
                    <BsTelegram size={24} />
                  </a>
                )}
                {header?.whatsup && (
                  <a href={header.whatsup} target="_blank" rel="noopener noreferrer">
                    <TbBrandWhatsappFilled size={24} />
                  </a>
                )}
                {header?.vk && (
                  <a href={header.vk} target="_blank" rel="noopener noreferrer">
                    <FaVk size={24} />
                  </a>
                )}
                {header?.instagram && (
                  <a href={header.instagram} target="_blank" rel="noopener noreferrer">
                    <BiLogoInstagramAlt size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

    
        <div className="footer-logo-div">
          {header?.logo ? (
            <img src={header.logo} alt="IDEALIS" className="footer-logo" />
          ) : (
            <img src={footerLogo} alt="IDEALIS" className="footer-logo" />
          )}
        </div>

        <hr />

        {/* нижний блок */}
        <a
          href="https://geeks.kg/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-madeby"
        >
          <img src={Geeks} alt="Geeks Logo" className="geeks-logo" />
          <span>
            MADE BY <br />
            <strong>GEEKS</strong>
          </span>
        </a>
      </div>
    </div>
  );
};
