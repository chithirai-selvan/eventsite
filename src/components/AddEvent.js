import React, { useState } from 'react';
import axios from 'axios';
import './css/AddEvent.css';

const AddEvent = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple form validation
    if (!formData.title || !formData.description || !formData.date || !formData.location) {
      setMessage('All fields are required!');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      await axios.post('http://localhost:5000/events', formData);
      setMessage('✅ Event added successfully!');
      setFormData({ title: '', description: '', date: '', location: '' });
    } catch (err) {
      console.error(err);
      setMessage('❌ Failed to add event. Try again.');
    }

    setLoading(false);
  };

  return (
    <div className="add-event-container">
      <h2>Add New Event</h2>

      {message && <p className="event-message">{message}</p>}

      <form className="event-form" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

        <label>Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label>Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Event'}
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
