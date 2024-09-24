import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import '../styles/Footer.css';  // Add this for custom CSS styling

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>
            Copyright © 2001-2024 The Quiz League of London (QLL) -{' '}
            <a href="http://www.quizleagueoflondon.co.uk" target="_blank" rel="noopener noreferrer">
              www.quizleagueoflondon.co.uk
            </a>
          </p>
          <p>
            Founded in 1990, The Quiz League of London (QLL) is an independent, non-profit-making association,
            owned and run by its member teams.
          </p>
          <p>
            <a href="#contact">Contact</a> - <a href="#links">Links</a> - <a href="#gdpr">GDPR policy</a> -{' '}
            <a href="#cookie-policy">Cookie policy</a> - <a href="#sitemap">Sitemap</a> -{' '}
            <a href="#admin">Admin</a>
          </p>
        </div>
        <div className="footer-icons">
          <a href="https://www.facebook.com/QuizLeagueofLondon" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook size={24} />
          </a>
          <a href="https://x.com/#!/@QuizLgLondon" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
