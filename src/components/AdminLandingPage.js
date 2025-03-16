import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/AdminLandingPage.css';

const AdminLandingPage = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    location: '',
    description: ''
  });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/events');
        setEvents(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEvents();
  }, []);

  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/events', newEvent);
      setEvents([...events, response.data]);
      setNewEvent({ title: '', date: '', location: '', description: '' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="admin-container">
      <aside className="sidebar">
        <h2 className="logo">EventManager</h2>
        <nav className="sidebar-nav">
          <a href="#dashboard">Dashboard</a>
          <a href="#events">Manage Events</a>
          <a href="#profile">Profile</a>
          <a href="/">Logout</a>
        </nav>
      </aside>

      <main className="admin-main">
        <h1>Admin Dashboard</h1>

        <section className="create-event">
          <h2>Create New Event</h2>
          <form onSubmit={handleCreateEvent} className="event-form">
            <input type="text" name="title" placeholder="Event Title" value={newEvent.title} onChange={handleChange} required />
            <input type="date" name="date" value={newEvent.date} onChange={handleChange} required />
            <input type="text" name="location" placeholder="Event Location" value={newEvent.location} onChange={handleChange} required />
            <textarea name="description" placeholder="Event Description" value={newEvent.description} onChange={handleChange} required></textarea>
            <button type="submit">Create Event</button>
          </form>
        </section>

        <section id="events" className="events-section">
          <h2>Manage Events</h2>
          <div className="events-list">
            {events.map((event) => (
              <div key={event._id} className="event-card">
                <h3>{event.title}</h3>
                <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p>{event.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminLandingPage;
