import React from 'react';
import './gift.css'; // Import the Gift.css for styling

const giftLinks = [
  {
    heading: "Daraz eGift Vouchers",
    link: "https://www.daraz.pk/"
  },
  {
    heading: "The Gift Studio",
    link: "https://thegiftstudio.pk/"
  },
  {
    heading: "Khaadi eGift Cards",
    link: "https://www.khaadi.com/"
  },
  {
    heading: "Ideas by Gul Ahmed",
    link: "https://www.ideasbygulahmed.com/"
  },
  {
    heading: "FoodPanda eGift Cards",
    link: "https://www.foodpanda.pk/"
  }
];

const Gift = () => {
  return (
    <div className="gift-container">
      <h1 className="gift-title"><b>Explore Gift Ideas for Your Loved Ones</b></h1>
      <div className="gift-list">
        {giftLinks.map((gift, index) => (
          <div key={index} className="gift-item">
            <h2 className="gift-heading">{gift.heading}</h2>
            <a
              href={gift.link}
              target="_blank"
              rel="noopener noreferrer"
              className="gift-link"
            >
              Visit {gift.heading}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gift;