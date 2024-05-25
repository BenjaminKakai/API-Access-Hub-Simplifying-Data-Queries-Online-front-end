import React from 'react';
import './WelcomeMessage.css';

const WelcomeMessage = ({ username }) => {
  return (
    <div className="welcome-message">
      <h2>Welcome {username}!</h2>
    </div>
  );
}

export default WelcomeMessage;
