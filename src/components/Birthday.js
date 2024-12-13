import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Birthday.css';

// Add the PDF links and image previews
const birthdayCards = {
  friends: [
    {
      pdf: "/pdf/BirthdayCard3.pdf",
      preview: "/images/card2.jpg",
      alt: "Preview of Birthday Card 1 for Friends"
    },
    {
      pdf: "/pdf/BirthdayCard4.pdf",
      preview: "/images/card4.jpg",
      alt: "Preview of Birthday Card 2 for Friends"
    }
  ],
  lovers: [
    {
      pdf: "/pdf/BirthdayCard1.pdf",
      preview: "/images/card1.jpg",
      alt: "Preview of Birthday Card 1 for Lovers"
    },
    {
      pdf: "/pdf/BirthdayCard2.pdf",
      preview: "/images/card3.jpg",
      alt: "Preview of Birthday Card 2 for Lovers"
    }
  ]
};

const Birthday = () => {
  const navigate = useNavigate();

  const handleGiftPageNavigation = () => {
    navigate('/gift');
  };

  return (
    <div className="birthday-container">
      <h1 className="birthday-title">Happy Birthday Wishes!</h1>

      {/* Section for Friends */}
      <div className="birthday-section">
        <h2>For Friends</h2>
        <p>Celebrate your friend's special day with love and joy!</p>
        <div className="card-container">
          {birthdayCards.friends.map((card, index) => (
            <div key={index} className="card">
              <img 
                src={card.preview} 
                alt={card.alt} 
                className="card-preview" 
              />
              <a href={card.pdf} download className="download-button">
                Download Card {index + 1}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Section for Lovers */}
      <div className="birthday-section">
        <h2>For Lovers</h2>
        <p>Make your lover's birthday unforgettable with heartfelt gifts!</p>
        <div className="card-container">
          {birthdayCards.lovers.map((card, index) => (
            <div key={index} className="card">
              <img 
                src={card.preview} 
                alt={card.alt} 
                className="card-preview" 
              />
              <a href={card.pdf} download className="download-button">
                Download Card {index + 1}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Button to navigate to Gift page */}
      <div className="navigate-gift-container">
        <button className="navigate-gift-button" onClick={handleGiftPageNavigation}>
          Go to Gift Page
        </button>
      </div>
    </div>
  );
};

export default Birthday;