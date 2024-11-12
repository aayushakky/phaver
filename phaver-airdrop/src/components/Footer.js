import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Phaver Airdrop. All rights reserved.</p>
        <div className="footer-links">
          {/* <button onClick={() => window.location.href='#'}>Whitepaper</button> */}
          <button onClick={() => window.location.href='#'}>Help Center</button>
          <button onClick={() => window.location.href='#'}>Connect Wallets</button>
          <button onClick={() => window.location.href='#'}>Brand Kit</button>
          <button onClick={() => window.location.href='#'}>x (Twitter)</button>
          <button onClick={() => window.location.href='#'}>Instagram</button>
          <button onClick={() => window.location.href='#'}>Discord</button>
          <button onClick={() => window.location.href='#'}>Telegram</button>
          <button onClick={() => window.location.href='#'}>Terms of Service</button>
          <button onClick={() => window.location.href='#'}>Privacy Policy</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
