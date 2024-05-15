import React from 'react';
import { Link } from 'react-router-dom';
import './landingPageStyles.css'; // assuming you have a CSS file for styling

const Landing = () => {
  return (
    <div className="landing-page">
      <h1 className="welcome-text">Welcome</h1>
      <Link to="/books/home" className="add-books-btn">Add Books</Link>
    </div>
  );
};

export default Landing;
