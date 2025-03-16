import React, { useState } from "react";
import { useParams } from "react-router-dom";
import RSVPForm from "./RSVPForm";
import events from "./Datas";  // Importing local event data
import "./css/EventDetailsPage.css";

const EventDetailsPage = () => {
  const { eventId } = useParams();
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);

  // Find the event from the imported data
  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <div className="event-details-page">
      <header className="event-header">
        <img src={event.image} alt={event.title} className="event-banner" />
        <h1>{event.title}</h1>
        <p>{event.date}</p>
        <p className="event-location">{event.location}</p>
      </header>

      <section className="event-details">
        <h2>Event Details</h2>
        <p>{event.description}</p>

        <h3>Schedule</h3>
        <ul>
          {event.schedule.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Participation Details</h3>
        <p>{event.participationDetails}</p>

        <h3>Attendees</h3>
        <div className="attendees-list">
          {event.attendees.map((attendee, index) => (
            <div key={index} className="attendee">
              <img src={attendee.photo} alt={attendee.name} />
              <p>{attendee.name}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="event-footer">
        <button className="rsvp-button" onClick={() => setIsRSVPOpen(true)}>
          RSVP
        </button>
      </footer>

      {isRSVPOpen && <RSVPForm event={event} closeForm={() => setIsRSVPOpen(false)} />}
    </div>
  );
};

export default EventDetailsPage;
