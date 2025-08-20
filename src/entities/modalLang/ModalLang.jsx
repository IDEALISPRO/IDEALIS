import { useTranslation } from 'react-i18next';
import './modalLang.scss';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

import ru from '../../shared/img/Frame 54.svg';
import kg from '../../shared/img/kg.svg';
import en from '../../shared/img/en.svg';

const ModalLang = ({ HandleModal }) => {
  const { i18n } = useTranslation();

  const handleChangeLang = (value) => {
    if (i18n.language !== value) {
      i18n.changeLanguage(value);
    }
    HandleModal();
  };

  const currentLang = i18n.language || 'ru';

  return (
    <div onClick={HandleModal} className="modal" role="dialog" tabIndex={-1}>
      <div onClick={(e) => e.stopPropagation()} className="modal__langs">
        {[
          { code: 'ru', label: 'Русский', img: ru },
          { code: 'kg', label: 'Кыргызча', img: kg },
          { code: 'en', label: 'English', img: en },
        ].map(({ code, label, img }) => (
          <label key={code} className="modal__lang">
            <input
              type="radio"
              name="language"
              value={code}
              checked={currentLang.startsWith(code)}
              onChange={() => handleChangeLang(code)}
              
            />
            <div className="modal__lang-img">
              <img src={img} alt={label} />
            </div>
            <p>{label} </p> 
          </label>
        ))}
      </div>
    </div>
  );
};

export default ModalLang;
