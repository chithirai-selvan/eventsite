import React, { useState } from "react";
import { useParams } from "react-router-dom";
import RSVPForm from "./RSVPForm";
import events from "./Datas";  // Importing local event data
import "./css/EventDetailsPage.css";

const EventDetailsPage = () => {
  const { eventId } = useParams();
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);

  // Convert eventId to a number (if stored as a number in Datas.js)
  const event = events.find((e) => e.id === parseInt(eventId, 10));

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <div className="event-details-page">
      {/* Event Header */}
      <header className="event-header">
        <img src={event.image} alt={event.title} className="event-banner" />
        <h1>{event.title}</h1>
        <p>{event.date}</p>
        <p className="event-location">{event.location}</p>
      </header>

      {/* Event Details */}
      <section className="event-details">
        <h2>Event Details</h2>
        <p>{event.description || "No description available."}</p>

        {/* Event Schedule */}
        {event.schedule && event.schedule.length > 0 ? (
          <>
            <h3>Schedule</h3>
            <ul>
              {event.schedule.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        ) : (
          <p>No schedule available.</p>
        )}

        {/* Participation Details */}
        {event.participationDetails && (
          <>
            <h3>Participation Details</h3>
            <p>{event.participationDetails}</p>
          </>
        )}

        {/* Attendees List */}
        {event.attendees && event.attendees.length > 0 ? (
          <>
            <h3>Attendees</h3>
            <div className="attendees-list">
              {event.attendees.map((attendee, index) => (
                <div key={index} className="attendee">
                  <img src={attendee.photo} alt={attendee.name} />
                  <p>{attendee.name}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>No attendees listed yet.</p>
        )}
      </section>

      {/* Footer & RSVP Button */}
      <footer className="event-footer">
        <button className="rsvp-button" onClick={() => setIsRSVPOpen(true)}>
          RSVP
        </button>
      </footer>

      {/* RSVP Form (Conditional Rendering) */}
      {isRSVPOpen && <RSVPForm event={event} closeForm={() => setIsRSVPOpen(false)} />}
    </div>
  );
};

export default EventDetailsPage;
