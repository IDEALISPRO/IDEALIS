import { useEffect, useState } from "react";
import "./historyAgency.scss";
import con from "../../../shared/btnConnect.png";
import { useDispatch } from "react-redux";
import { agencyHistoryGet } from "../../../app/store/reducers/public/about/aboutThunks";
import { useAbout } from "../../../app/store/reducers/public/about/aboutSlice";

export const HistoryAgency = () => {
  const [active, setActive] = useState(1);
  const dispatch = useDispatch();
  const { agencyHistory } = useAbout();

  useEffect(() => {
    dispatch(agencyHistoryGet());
  }, []);
  return (
    <section className="historyAgency_cont">
      <h2 className="title">ИСТОРИЯ АГЕНСТВА</h2>
      <div className="historyAgency_cont_btns">
        {agencyHistory &&
          agencyHistory.map((btn) => (
            <button
              onClick={() => setActive(btn.id)}
              className={active === btn.id ? `active` : ""}
              key={btn.id}
            >
              <img className="connect" src={con} alt="" />
              {btn.year}
            </button>
          ))}
      </div>

      {agencyHistory &&
        agencyHistory
          .filter((item) => item.id === active)
          .map((item) => (
            <div key={item.id} className="historyAgency_cont_content row">
              <div className="historyAgency_cont_content_top">
                <h2>{item.title}</h2>
              </div>

              <div className="historyAgency_cont_content_bottom">
                <img src={item.image} alt="history" />
                <h3>{item.caption}</h3>
                <div
                  className="detail_text row"
                  dangerouslySetInnerHTML={{
                    __html:
                      item?.description.length > 370
                        ? item?.description.slice(0, 370) + "..."
                        : item?.description,
                  }}
                ></div>
              </div>
            </div>
          ))}
    </section>
  );
};
