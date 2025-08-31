import { useLocation } from "react-router-dom";
import "./banner.scss";

export function Banner({ title, description, img }) {
  const location = useLocation();
  return (
    <div className="Banner">
      {img && location.pathname === '/' ? <img className="logo" src={img} alt="" /> : <p className="BannerTitle">{title}</p>}
      <p
        className="BannerDescription"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}
