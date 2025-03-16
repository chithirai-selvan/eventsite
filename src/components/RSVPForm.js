import React, { useState } from 'react';
import './css/RSVPForm.css';
import axios from 'axios';

const RSVPForm = ({ event, closeForm }) => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    organization: "",
    number: "",
    type: "Student",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleRSVPSubmit = () => {
    // Show alert with entered details
    alert(`
      SUBMITTED SUCCESFULLY !!
      Name: ${userDetails.name}
      Email: ${userDetails.email}
      Organization/University: ${userDetails.organization}
      Contact Number: ${userDetails.number}
      Type: ${userDetails.type}
    `);

    // Proceed with the API call
    axios.post('http://localhost:5000/participants', {
      ...userDetails,
      eventId: event._id,
    })
    .then(() => {
        return axios.post('http://localhost:5000/api/send-email', {
            ...userDetails,
            eventTitle: event.title,
        });
    })
    .then(() => {
        alert('RSVP submitted and email sent successfully!');
        closeForm();
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    });
  };

  return (
    <div className="rsvp-modal">
      <div className="rsvp-form">
        <h3>RSVP Form for {event.title}</h3>
        
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </label>

        <label>
          Organization/University:
          <input
            type="text"
            name="organization"
            value={userDetails.organization}
            onChange={handleInputChange}
            placeholder="Enter your organization/university"
            required
          />
        </label>

        <label>
          Number:
          <input
            type="tel"
            name="number"
            value={userDetails.number}
            onChange={handleInputChange}
            placeholder="Enter your contact number"
            required
          />
        </label>

        <label>
          Type:
          <select
            name="type"
            value={userDetails.type}
            onChange={handleInputChange}
            required
          >
            <option value="Student">Student</option>
            <option value="Professional">Professional</option>
          </select>
        </label>

        <button onClick={handleRSVPSubmit}>Submit RSVP</button>
        <button onClick={closeForm}>Cancel</button>
      </div>
    </div>
  );
};

export default RSVPForm;
