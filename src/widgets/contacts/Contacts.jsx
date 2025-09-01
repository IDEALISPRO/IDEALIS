import "./contacts.scss";

export const Contacts = ({ contact }) => {
  return (
    <>
      {contact && (
        <div className="contacts-container container">
          <div className="contacts-top">
            <div className="contact-item">
              <span className="label">{contact.e_mail}</span>
              <span className="value">{contact.email}</span>
            </div>
            <div className="contact-item">
              <span className="label">{contact.number}</span>
              <span className="value">{contact.phone}</span>
            </div>
            <div className="contact-item">
              <span className="label">Адрес</span>
              <span className="value">{contact.location}</span>
            </div>
            <div className="contact-item">
              <span className="label">{contact.mode}</span>
              <span className="value">{contact.time_working}</span>
            </div>
          </div>

          <strong className="map-title">НАШЕ МЕСТОПОЛОЖЕНИЕ</strong>

          <div className="map-container">
            <iframe
              title="Google Map"
              src={contact.address}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};
