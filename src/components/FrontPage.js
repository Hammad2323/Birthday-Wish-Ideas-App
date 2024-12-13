import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FrontPage.css';

const FrontPage = () => {
  const navigate = useNavigate(); // Navigation function

  const handleStart = () => {
    navigate('/birthday'); // Navigate to the birthday page
  };

  return (
    <div className="front-page-container">
      <h1 className="title">Welcome to the Birthday Wish App!</h1>
      <p className="quote">"Happiness is celebrating someone's special day!"</p>
      <button className="start-button" onClick={handleStart}>
        Let's Start
      </button>
    </div>
  );
};

export default FrontPage;