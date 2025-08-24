import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./adFreeCard.scss";

import img1 from "../../shared/house1.svg";
import img2 from "../../shared/card2.svg";
import img3 from "../../shared/card3.svg";
import img4 from "../../shared/card4.svg";
import location from "../../shared/location.svg";
import { Box } from "@mui/material";

const imgList = [
  {
    img: img1,
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
  {
    img: img4,
  },
];
export const AdFreeCard = () => {
  return (
    <div className="card">
      <div className="card-block1 block1">
        <ImageList
          sx={{
            display: "flex",
            gap: "20px",
            width: "100%",
            mb: "15px",
          }}
        >
          <ImageListItem
            sx={{ width: "48%", borderRadius: 2, overflow: "hidden" }}
          >
            <img
              src={`${imgList[0]?.img}?w=400&h=400&fit=crop&auto=format`}
              srcSet={`${imgList[0]?.img}?w=400&h=400&fit=crop&auto=format&dpr=2 2x`}
              alt=""
            />
          </ImageListItem>
          <Box
            component={"div"}
            sx={{
              ml: "12px",
              width: "49%",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "12px",
            }}
          >
            {imgList
              .filter((_, indx) => indx != 0)
              .map((item, i) => (
                <ImageListItem
                  key={i}
                  sx={{ borderRadius: 2, overflow: "hidden" }}
                >
                  <img
                    src={`${item.img}?w=400&h=400&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=400&h=400&fit=crop&auto=format&dpr=2 2x`}
                    alt=""
                  />
                </ImageListItem>
              ))}
          </Box>
        </ImageList>
        <h3 className="block1-title">+996 775 65 65 98</h3>
        <p className="block1-text">Собственник</p>
        <button className="block1-btn">Подробнее</button>
      </div>
      <div className="card-block2 block2">
        <h3 className="block2-title">Данные*</h3>
        <ul className="block2-list list">
          <li className="list-li">
            <span className="dotline__label">Площадь:</span>
            <span aria-hidden="true" className="dotline__leader" />
            <span className="dotline__value">85 м²</span>
          </li>
          <li className="list-li">
            <span className="dotline__label">Этажность:</span>
            <span aria-hidden="true" className="dotline__leader" />
            <span className="dotline__value">8 из 10</span>
          </li>
          <li className="list-li">
            <span className="dotline__label">Цена:</span>
            <span aria-hidden="true" className="dotline__leader" />
            <span className="dotline__value">7 200 000 с</span>
          </li>
          <li className="list-li">
            Срочно:
            <input type="checkbox" className="list-checkbox" />
          </li>
        </ul>
        <div className="location">
          <img src={location} alt="" className="location-img" />
          <span>г. Бишкек, мкр. Ала-Тоо, ул. Южная магистраль, 45</span>
        </div>
        <button className="second-btn">Подробнее</button>
      </div>
    </div>
  );
};
