import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import { useNews } from "../../../app/store/reducers/admin/news/newsSlice";
import { getMarketNews } from "../../../app/store/reducers/admin/news/newsThunk";
import "./marketNews.scss";

const MinText = (text) => {
  if (!text) return "";
  return text.length > 80 ? text.slice(0, 80) + "..." : text;
};

export const MarketNews = () => {
  const dispatch = useDispatch();
  const { marketNews: cards } = useNews();

  useEffect(() => {
    dispatch(getMarketNews());
  }, [dispatch]);

  return (
    <div className="container marketNews">
      <h1 className="title">Новости рынка недвижимости</h1>
      <div className="marketNews_cart">
        {cards?.map((card, idx) => (
          <div
            key={idx}
            className={`marketNews_card ${idx === 1 ? "marketNews_cards" : ""}`}
          >
            {idx === 1 ? (
              <>
                <div className="marketNews_info second">
                  <h3
                    className="marketNews_info_text"
                    dangerouslySetInnerHTML={{
                      __html: MinText(card?.description),
                    }}
                  ></h3>
                  <button className="marketNews_info_btns">
                    <ArrowOutwardIcon
                      sx={{
                        width: 30,
                        height: 30,
                        "@media (max-width:768px)": { width: 20, height: 20 },
                      }}
                    />
                  </button>
                </div>
                <img
                  className="marketNews_images"
                  src={card?.image}
                  alt={card?.description}
                />
              </>
            ) : (
              <>
                <img
                  className="marketNews_image"
                  src={card?.image}
                  alt={card?.description}
                />
                <div className="marketNews_info">
                  <h3
                    className="marketNews_info_text"
                    dangerouslySetInnerHTML={{
                      __html: MinText(card?.description),
                    }}
                  ></h3>
                  <button className="marketNews_info_btn">
                    <ArrowOutwardIcon
                      sx={{
                        width: 30,
                        height: 30,
                        "@media (max-width:768px)": { width: 20, height: 20 },
                      }}
                    />
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
