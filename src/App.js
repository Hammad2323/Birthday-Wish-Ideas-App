import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FrontPage from './components/FrontPage';
import Birthday from './components/Birthday';
import Gift from './components/Gift'; // Import the new Gift component
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/birthday" element={<Birthday />} />
          <Route path="/egift" element={<eGift />} />
          <Route path="/gift" element={<Gift />} /> {/* New Gift Route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;