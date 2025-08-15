import "./footer.scss";
import { FaTelegramPlane, FaWhatsapp, FaVk, FaInstagram } from "react-icons/fa";
import footerLogo from '../../shared/img/logogo.jpg';
import Geeks from '../../shared/img/geeks.png';
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer ">
      <div className="sb__footer  container section__padding">
        <div className="sb__footer-links">
          
          <div className="sb__footer-links-div">
            <h4>Ош</h4>
            <h4>Бишкек</h4>
            <h4>Жалал Абад</h4>
          </div>

          <div className="sb__footer-links-div">
            <h4 className="text_1">
              Начните сотрудничество с IDEALIS —<br />
              найдём идеальную недвижимость для вас.
            </h4>
          </div>

            <div className="sb__footer-links-div">
        <Link to="/"><h4>Главная</h4></Link>
        <Link to="/about"><h4>Про IDEALIS</h4></Link>
        <Link to="/services"><h4>Услуги</h4></Link>
        <Link to="/news"><h4>Новости</h4></Link>
        <Link to="/contacts"><h4>Контакты</h4></Link>
        <Link to="/favorites"><h4>Избранное</h4></Link>
      </div> 
   
             <div className="sb__footer-links-div">
            <h4 className="text_2">
              Самый лучший в<br />
              Кыргызстане 2025 года<br />
              недвижимость IDEALIS
            </h4>
          </div>

          <div className="sb__footer-links-div socials-block">
            <div className="socialmedia">
              <h4>Соц сети</h4>
              <div className="socialsmedia-icon">
              <p><FaTelegramPlane size={24} /></p>
              <p><FaWhatsapp size={24} /></p>
              <p><FaVk size={24} /></p>
              <p><FaInstagram size={24} /></p>
              </div>
              
            </div>
          </div>
        </div>

        <div className="footer-logo-div">
          <img src={footerLogo} alt="IDEALIS" className="footer-logo" />
        </div>

        <hr />

        <a href="https://geeks.kg/" target="_blank" rel="noopener noreferrer" className="footer-madeby">
          <img src={Geeks} alt="Geeks Logo" className="geeks-logo" />
          <span>
            MADE BY <strong><br />GEEKS </strong>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
