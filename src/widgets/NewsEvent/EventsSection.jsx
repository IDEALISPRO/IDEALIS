import React, { useEffect, useState } from "react";
import "./EventsSection.scss";
import data from "./api.json";

export const EventsSection = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(data); // потом заменишь на API
  }, []);

  return (
    <section className="container events-section">
      <h2 className="eventstitle">СОБЫТИЯ И МЕРОПРИЯТИЯ IDEALIS</h2>
      <div className="card-container">
       {events.map((event, index) => {
        let sizeClass = "";

        if (index === 0 || index === 4) sizeClass = "events-section__card--small";    // 1 и 5
        else if (index === 1 || index === 3) sizeClass = "events-section__card--medium"; // 2 и 4
        else if (index === 2) sizeClass = "events-section__card--large";               // 3 центр

        return (
          <div key={event.id} className={`events-section__card ${sizeClass}`}>
            <img src={new URL(`./${event.image}`, import.meta.url).href} alt={event.description} />
            <p>{event.description}</p>
          </div>
        );
      })}

      </div>
    </section>
  );
};
