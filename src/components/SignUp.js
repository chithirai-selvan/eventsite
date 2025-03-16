  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import './css/SignUp.css';

  function SignUp() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: '',
    });

    const navigate = useNavigate();

    // Handle input changes
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    // Handle form submission with validation
    const handleSubmit = (e) => {
      e.preventDefault();

      const { name, email, password, confirmPassword, role } = formData;

      if (!name || !email || !password || !confirmPassword || !role) {
        alert('All fields are required!');
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
      }

      if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
      }

      if (role === 'admin') {
        navigate('/AdminLandingPage'); // Navigate to the Admin component
      } else if (role === 'participant') {
        navigate('/ParticipantLandingPage'); // Navigate to the Participant component
      } else {
        alert('Please select a role.');
      }
    };

    return (
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-enter your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Select Role</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  onChange={handleChange}
                  required
                />
                Admin
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="participant"
                  onChange={handleChange}
                  required
                />
                Participant
              </label>
            </div>
          </div>
          <button type="submit" className="btn-submit">Sign Up</button>
          <p className="login-redirect">
            Already have an account? <a href="/login">Log In</a>
          </p>
        </form>
      </div>
    );
  }

  export default SignUp;
