import React from "react";
import img1 from "../../shared/images/marketNewsImg1.jpg";
import img2 from "../../shared/images/marketNewsImg2.jpg";
import img3 from "../../shared/images/marketNewsImg3.jpg";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import "./marketNews.scss";
import { height, width } from "@mui/system";

const MinText = (text) => {
      if (text.length > 80) {
            return text.slice(0, 80) + "...";
      } else {
            return text;
      }
}

const text = 'Следите за последними изменениями цен, трендами и новостями рынка в Кыргызстане'
const text2 = 'Аналитика, законы, тенденции — всё, что важно знать о рынке недвижимости.'
const text3 = 'Следите за последними изменениями цен, трендами и новостями рынка в Кыргызстане'

export const MarketNews = () => {
      return (
            <div className="container marketNews">
                  <h1 className="marketNews_title">Новости рынка недвижимости</h1>
                  <div className="marketNews_cart">
                        <div className="marketNews_card">
                              <img className="marketNews_image" src={img1} alt=""/>

                              <div className="marketNews_info">
                                    <h3 className="marketNews_info_text">{MinText(text)}</h3>
                                    <button className="marketNews_info_btn"><ArrowOutwardIcon sx={{ width: 30, height: 30, '@media (max-width:768px)': { width: 20,height: 20 }}} /></button>
                              </div>
                              <div className="marketNews_info">

                              </div>
                        </div>

                        <div className="marketNews_cards">
                              <div className="marketNews_info second">
                                    <h3 className="marketNews_info_text">{MinText(text2)}</h3>
                                    <button className="marketNews_info_btns"><ArrowOutwardIcon sx={{ width: 30, height: 30, '@media (max-width:768px)': { width: 20,height: 20 }}} /></button>
                              </div>

                              <img className="marketNews_images" src={img2} alt="" />
                        </div>

                        <div className="marketNews_card">
                              <img className="marketNews_image" src={img3} alt="" />
                              <div className="marketNews_info">
                                    <h3 className="marketNews_info_text">{MinText(text3)}</h3>
                                    <button className="marketNews_info_btn"><ArrowOutwardIcon sx={{ width: 30, height: 30, '@media (max-width:768px)': { width: 20,height: 20 }}}/></button>
                              </div>
                        </div>
                  </div>
            </div>
      )
}
