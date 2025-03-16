import React from "react";
import { useNavigate, Link } from "react-router-dom";
import events from "./Datas"; // Import event data
import "./css/ParticipantLandingPage.css";

function ParticipantLandingPage() {
  const navigate = useNavigate();

  const handleCardClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  return (
    <div className="participant-page">
      {/* Navbar */}
      <header className="participant-navbar">
        <div className="navbar-logo">ConnectNow</div>
        <nav className="navbar-links">
          <a href="#explore">Explore Events</a>
          <a href="#rsvp">RSVP</a>
          <a href="#profile">Profile</a>
          <Link to="/">Log Out</Link> {/* Used Link for better navigation */}
        </nav>
      </header>

      {/* Main Section */}
      <main className="participant-main">
        {/* Welcome Section */}
        <section className="welcome-section">
          <h2>Welcome!</h2>
          <p>Find exciting events near you and explore upcoming ones.</p>
        </section>

        {/* Events Section */}
        <section id="explore" className="events-section">
          <h2>All Upcoming Events</h2>

          {events.length === 0 ? (
            <p>No upcoming events available.</p>
          ) : (
            <div className="event-list">
              {events.map((event) => (
                <button
                  key={event.id}
                  className="event-item"
                  onClick={() => handleCardClick(event.id)}
                >
                  {/* Event Image with Fallback */}
                  <img
                    src={event.image}
                    alt={event.title}
                    className="event-image"
                    onError={(e) => (e.target.src = "/assets/default-event.jpg")}
                  />
                  <div className="event-info">
                    <h3>{event.title}</h3>
                    <p>
                      <strong>Date:</strong> {event.date}
                    </p>
                    <p>
                      <strong>Location:</strong> {event.location}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default ParticipantLandingPage;
