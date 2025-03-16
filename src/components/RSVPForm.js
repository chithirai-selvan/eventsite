import React, { useState } from "react";
import "./css/RSVPForm.css";
import axios from "axios";

const RSVPForm = ({ event, closeForm }) => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    organization: "",
    number: "",
    type: "Student",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleRSVPSubmit = async (e) => {
    e.preventDefault();

    // Simple form validation
    if (
      !userDetails.name ||
      !userDetails.email ||
      !userDetails.organization ||
      !userDetails.number
    ) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    if (!window.confirm("Are you sure you want to submit your RSVP?")) {
      return;
    }

    setLoading(true);

    try {
      // Submit RSVP details to backend
      await axios.post("http://localhost:5000/participants", {
        ...userDetails,
        eventId: event._id,
      });

      // Send confirmation email
      await axios.post("http://localhost:5000/api/send-email", {
        ...userDetails,
        eventTitle: event.title,
      });

      alert("RSVP submitted and email sent successfully!");
      closeForm();
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rsvp-modal">
      <div className="rsvp-form">
        <h3>RSVP for {event.title}</h3>
        <form onSubmit={handleRSVPSubmit}>
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
            Contact Number:
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
            <select name="type" value={userDetails.type} onChange={handleInputChange} required>
              <option value="Student">Student</option>
              <option value="Professional">Professional</option>
            </select>
          </label>

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit RSVP"}
          </button>
          <button type="button" onClick={closeForm}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default RSVPForm;
