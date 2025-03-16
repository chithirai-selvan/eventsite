import React from 'react';
import './css/LandingPage.css';

function LandingPage() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1 className="logo">Eventrix</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#/SignUp" className="cta">Sign Up</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <img src="/assets/bg.jpg" alt="Event Management" className="hero-image" />
        <div className="container">
          <h2 className="hero-title">Manage Events Effortlessly</h2>
          <p className="hero-text">
            Streamline your event management with our easy-to-use platform. Perfect for colleges, corporate events, and more!
          </p>
          <a href="#/SignUp" className="btn-primary">Get Started</a>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <h2>About Us</h2>
          <p>
            Event Manager is your one-stop solution for organizing events, managing participants, and ensuring a smooth experience for admins and attendees alike.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <h2>Features</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>Admin Dashboard</h3>
              <p>Easily manage events, track participants, and view insights.</p>
            </div>
            <div className="feature">
              <h3>Participant Portal</h3>
              <p>Effortless registration and participation tracking for users.</p>
            </div>
            <div className="feature">
              <h3>Responsive Design</h3>
              <p>Access the platform seamlessly on any device, anywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2024 Event Manager. All rights reserved.</p>
          <ul className="social-links">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
