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

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Fetch Events from Backend
  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/events');
      setEvents(response.data);
    } catch (err) {
      console.error(err);
      setMessage('❌ Failed to load events.');
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  // Handle New Event Creation
  const handleCreateEvent = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      await axios.post('http://localhost:5000/events', newEvent);
      setMessage('✅ Event created successfully!');
      setNewEvent({ title: '', date: '', location: '', description: '' });
      fetchEvents(); // Refresh event list after adding
    } catch (err) {
      console.error(err);
      setMessage('❌ Failed to create event.');
    }

    setLoading(false);
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
          
          {message && <p className="event-message">{message}</p>}

          <form onSubmit={handleCreateEvent} className="event-form">
            <input type="text" name="title" placeholder="Event Title" value={newEvent.title} onChange={handleChange} required />
            <input type="date" name="date" value={newEvent.date} onChange={handleChange} required />
            <input type="text" name="location" placeholder="Event Location" value={newEvent.location} onChange={handleChange} required />
            <textarea name="description" placeholder="Event Description" value={newEvent.description} onChange={handleChange} required></textarea>
            <button type="submit" disabled={loading}>{loading ? 'Creating...' : 'Create Event'}</button>
          </form>
        </section>

        <section id="events" className="events-section">
          <h2>Manage Events</h2>
          
          <div className="events-list">
            {events.length === 0 ? (
              <p>No events found.</p>
            ) : (
              events.map((event) => (
                <div key={event._id} className="event-card">
                  <h3>{event.title}</h3>
                  <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                  <p><strong>Location:</strong> {event.location}</p>
                  <p>{event.description}</p>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminLandingPage;
