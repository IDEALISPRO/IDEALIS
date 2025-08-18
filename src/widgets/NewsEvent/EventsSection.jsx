import React, { useEffect, useState } from "react";
import "./EventsSection.scss";
import data from "./api.json";

export const EventsSection = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(data)
  }, []);

  return (
    <section className="container events-section">
      <h2 className="eventsTitle">СОБЫТИЯ И МЕРОПРИЯТИЯ IDEALIS</h2>
      {events[2] && (
  <div className="cardLarge-2">
    <img
      className="Img"
      src={new URL(`./${events[2].image}`, import.meta.url).href}
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
        <img
          className="Img"
          src={new URL(`./${event.image}`, import.meta.url).href}
          alt={event.description}
        />
        <p className="Card-description">{event.description}</p>
      </div>
    );
  })}
</div>


    </section>
  );
};
