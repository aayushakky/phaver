import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faTelegram, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <header className="header">
      <div className="logo">Phaver Airdrop</div>
      <nav className="social-nav">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord">
          <FontAwesomeIcon icon={faDiscord} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </nav>
    </header>
  );
}

export default Header;
