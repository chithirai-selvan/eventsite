import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
import AdminLandingPage from './components/AdminLandingPage';
import ParticipantLandingPage from './components/ParticipantLandingPage';
import AddEvent from './components/AddEvent';
import EventDetailsPage from './components/EventDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/AdminLandingPage' element={<AdminLandingPage />} />
        <Route path='/ParticipantLandingPage' element={<ParticipantLandingPage />} />
        <Route path='/AddEvent' element={<AddEvent />} />
        <Route path='/event/:eventId' element={<EventDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;