import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import "./lawyers.scss";
import PersonIcon from "@mui/icons-material/Person";

export const LawyersCard = ({ lawyer }) => {
  return (
    <section className="card-lawyers">
      <div className="left-card-lawyers">
        {lawyer.photo_url ? (
          <img src={lawyer.photo_url} alt="profile picture" />
        ) : (
          <PersonIcon style={{ fontSize: "80px", color: "#888" }} />
        )}
        <h3>{lawyer.name}</h3>
        <p>{lawyer.title}</p>
        <h4>{lawyer.email}</h4>
        <button className="btn-lawyers btn-for-dec">
          <PhoneIcon /> Позвонить
        </button>
      </div>
      <div className="line-lawyers"></div>
      <div className="right-card-lawyers">
        <div className="specialization">
          <h2>Специализация:</h2>
          <ul dangerouslySetInnerHTML={{ __html: lawyer.specializations }}></ul>
          <div className="address-lawyers">
            <RoomIcon className="gps-lawyers" />
            <p>{lawyer.office_address}</p>
          </div>
          <button className="btn-lawyers btn-for-mobile">
            <a href={`tel:${lawyer.phone}`}>
              <PhoneIcon /> Позвонить
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};
