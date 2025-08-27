import './contacts.scss'

export const Contacts = ({contact}) => {
  console.log(contact);
  
  return (
    <div className="contacts-container container">
      <div className="contacts-top">
        <div className="contact-item">
          <span className="label">ЭЛЕКТРОННАЯ ПОЧТА</span>
          <span className="value">INFO@ARCHIDREAM.RU</span>
        </div>
        <div className="contact-item">
          <span className="label">НОМЕР ТЕЛЕФОНА</span>
          <span className="value">8(978)777-01-06</span>
        </div>
        <div className="contact-item">
          <span className="label">АДРЕС</span>
          <span className="value">Г.СЕВАСТОПЛЬ, УЛ. ГЕРОЕВ СТАЛИНГРАДА, 63</span>
        </div>
        <div className="contact-item">
          <span className="label">РЕЖИМ РАБОТЫ</span>
          <span className="value">ПН-СБ<br />ОТ 8:00 ДО 22:00</span>
        </div>
      </div>

      <strong className="map-title">НАШЕ МЕСТОПОЛОЖЕНИЕ</strong>

      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.678674770862!2d33.512347!3d44.589832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40eb0a4c6f0e0d4d%3A0x53c81c3f90f2e01!2z0YPQuy4g0JHQtdC70L7QvNCw0Y8g0KHRg9GA0LHQtdC90YHQutC40LkgNjMsINCh0LXQstC10YDQvdC-LCDQodC10LLQtdGA0L3Qviwg0KDQtdGB0L8u!5e0!3m2!1sru!2s!4v1692877287374!5m2!1sru!2s"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
