 import React from "react";
import img1 from "../../shared/images/marketNewsImg1.jpg";
import img2 from "../../shared/images/marketNewsImg2.jpg";
import img3 from "../../shared/images/marketNewsImg3.jpg";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import "./marketNews.scss";


export const MarketNews = () => {
  return (
    <div className="marketNews">
                                <h1 className="marketNews_title">Новости рынка недвижимости</h1>
   <div className="marketNews_cart">                             
        <div className="marketNews_card">
              <img className="marketNews_image" src={img1} alt="" />
              <h3 className="marketNews_text">Следите за последними изменениями цен, трендами и новостями рынка в Кыргызстане</h3>
              <button className="marketNews_btn"><ArrowOutwardIcon/></button>
        </div>

        <div className="marketNews_cards">
              <h3 className="marketNews_texts">Аналитика, законы, тенденции — всё, что важно знать о рынке недвижимости.</h3>
              <button className="marketNews_btns"><ArrowOutwardIcon/></button>
               <img className="marketNews_images" src={img2} alt="" />
        </div>
        
        <div className="marketNews_card">
              <img className="marketNews_image" src={img3} alt="" />
              <h3 className="marketNews_text">Следите за последними изменениями цен, трендами и новостями рынка в Кыргызстане</h3>
              <button className="marketNews_btn"><ArrowOutwardIcon/></button>
        </div>
        </div>
    </div>
  )
}
