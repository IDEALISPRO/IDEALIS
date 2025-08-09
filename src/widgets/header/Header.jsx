import './header.scss';
import logo from '../../shared/img/logoHeader.png';

import { MdOutlineKeyboardArrowDown, MdOutlineClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'; // Import useEffect
import { useTranslation } from 'react-i18next';

import iconB from '../../shared/img/Book.svg';
import yslogo from '../../shared/img/Profile.svg';
import konLogo from '../../shared/img/Characteristics.svg';
import inLogo from '../../shared/img/Info abt Practice (1).svg';
import izLogo from '../../shared/img/Info abt Practice (1).svg';

import ruFlag from '../../shared/img/Frame 54.svg';
import kgFlag from '../../shared/img/kg.svg';
import enFlag from '../../shared/img/en.svg';

import ModalLang from '../../entities/modalLang/ModalLang';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const HandleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const currentLang = (i18n.language || '').toUpperCase();

  const flagSrc =
    i18n.language === 'ru' ? ruFlag : i18n.language === 'kg' ? kgFlag : enFlag;

  // UseEffect to handle screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setMenuOpen(false); // Close burger menu if screen width is >= 992px
      }
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="header container">
      <Link to="/">
        <img src={logo} alt="IDEALIS Logo" />
      </Link>

      <nav className="nav-menu">
        <div className="menu-items-desktop">
          <a href="#">{t('menu.about')}</a>
          <a href="#">{t('menu.services')}</a>
          <a href="#">{t('menu.news')}</a>
          <a href="#">{t('menu.contacts')}</a>
          <a href="#">{t('menu.favorites')}</a>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>

        <div
          className={`menu-overlay ${menuOpen ? 'active' : ''}`}
          onClick={closeMenu}
        ></div>

        <div className={`menu-items-mobile ${menuOpen ? 'active' : ''}`}>
          <div className="menu-header">
            <MdOutlineClose
              size={28}
              onClick={toggleMenu}
              className="close-icon"
            />
          </div>

          <a href="#" className="active" onClick={closeMenu}>
            <img className="img" src={iconB} alt="" />
            {t('menu.about')}
          </a>
          <a href="#" onClick={closeMenu}>
            <img className="img" src={yslogo} alt="" />
            {t('menu.services')}
          </a>
          <a href="#" onClick={closeMenu}>
            <img className="img" src={inLogo} alt="" />
            {t('menu.news')}
          </a>
          <a href="#" onClick={closeMenu}>
            <img className="img" src={konLogo} alt="" />
            {t('menu.contacts')}
          </a>
          <a href="#" onClick={closeMenu}>
            <img className="img" src={izLogo} alt="" />
            {t('menu.favorites')}
          </a>

          <button onClick={HandleModal} className="langBtn sidebar_menu_link">
            <div className="sidebar_menu_link_icon">
              <img src={flagSrc} alt="lang" />
            </div>
            <span className="sidebar_menu_link_text">{t('lang')}</span>
            <MdOutlineKeyboardArrowDown />
          </button>

          <button className="button">Добавить объект</button>
        </div>
      </nav>

      <button className="lang" onClick={HandleModal}>
        {currentLang} <MdOutlineKeyboardArrowDown />
      </button>

      <button className="button">Добавить объект</button>

      {isModalOpen && <ModalLang HandleModal={HandleModal} />}
    </div>
  );
};