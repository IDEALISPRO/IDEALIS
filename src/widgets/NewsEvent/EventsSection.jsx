import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNews } from "../../app/store/reducers/admin/news/newsSlice";
import { getNewsEvents } from "../../app/store/reducers/admin/news/newsThunk";
import "./eventsSection.scss";
// import data from "./api.json";

export const EventsSection = () => {
  const { newsEvents: events } = useNews();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsEvents());
  }, [dispatch]);
  // const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   setEvents(data);
  // }, []);

  return (
    <section className="container events-section">
      <h2 className="title">СОБЫТИЯ И МЕРОПРИЯТИЯ IDEALIS</h2>
      {events[2] && (
        <div className="cardLarge-2">
          <img
            className="Img"
            src={events[2].image}
            alt={events[2].description}
          />
          <p className="Card-description">{events[2].description}</p>
        </div>
      )}

      <div className="card-container">
        {events.map((event, index) => {
          let sizeClass = "";

          if (index === 0 || index === 4) sizeClass = "cardSmall";
          else if (index === 1 || index === 3) sizeClass = "cardMedium";
          else if (index === 2) sizeClass = "cardLarge";

          return (
            <div key={event.id} className={`events-section__card ${sizeClass}`}>
              <img className="Img" src={event.image} alt={event.description} />
              <p
                className="Card-description"
                dangerouslySetInnerHTML={{ __html: event.description }}
              />
              {/* {event.description} */}
            </div>
          );
        })}
      </div>
    </section>
  );
};
