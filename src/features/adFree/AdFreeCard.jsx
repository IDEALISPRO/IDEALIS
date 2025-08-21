import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useMediaQuery } from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./adFreeCard.scss";

import img1 from "../../shared/house1.svg";
import img2 from "../../shared/card2.svg";
import img3 from "../../shared/card3.svg";
import img4 from "../../shared/card4.svg";
import location from "../../shared/location.svg";
import line from "../../shared/gradLine.svg";

const imgList = [
  {
    img: img1,
    cols: 3,
    rows: 2,
  },
  {
    img: img2,
    cols: 0.8,
    rows: 0.8,
  },
  {
    img: img3,
    cols: 0.8,
    rows: 0.8,
  },
];
export const AdFreeCard = () => {
  const isSmall = useMediaQuery("(max-width:600px)");
  const isMedium = useMediaQuery("(max-width:900px)");
  return (
    <div className="card">
      <div className="card-block1 block1">
        <ImageList
          className="img-list"
          cols={5}
          rowHeight={isSmall ? 90 : isMedium ? 140 : 190}
          gap={12}
          variant="quilted"
        >
          {imgList.map((item, i) => (
            <ImageListItem
              key={i}
              cols={item.cols || 1}
              rows={item.rows || 1}
              sx={{ borderRadius: 2, overflow: "hidden" }}
            >
              <img
                src={`${item.img}?w=400&h=400&fit=crop&auto=format`}
                srcSet={`${item.img}?w=400&h=400&fit=crop&auto=format&dpr=2 2x`}
                alt=""
              />
            </ImageListItem>
          ))}
          <ImageListItem
            rows={0.8}
          >
            <img src={img4} alt="" style={{ borderRadius: 8 }}  className="item-img"/>
          </ImageListItem>
        </ImageList>
        <h3 className="block1-title">+996 775 65 65 98</h3>
        <p className="block1-text">Собственник</p>
        <button className="block1-btn">Подробнее</button>
      </div>
      <div className="card-block2 block2">
        <h3 className="block2-title">Данные*</h3>
        <ul className="block2-list list">
          <li className="list-li">
           
            Площадь:
            <img src={line} alt="" className="list-img" />
            <span className="data">85 м²</span>
          </li>
          <li className="list-li">
            Этажность: <img src={line} alt="" className="list-img" />
            <span className="data">8 из 10</span>
          </li>
          <li className="list-li">
            Цена: <img src={line} alt="" className="list-img" />
             <span className="data">7 200 000 с</span>
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
