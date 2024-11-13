import React from 'react';
import './Whitepaper.css'; // Import the CSS file
import Feature from "../image/feature2.webp"
import Cointelegraph from "../image/Cointelegraph.svg"
import Forbes from "../image/forbes.svg"
import Nasdaq from "../image/nasdaq.svg"
import Bitcoin from "../image/BitcoinCom.svg"
import CryptoWisser from "../image/CryptoWisser.svg"
import Bitcoinist from "../image/Bitcoinist.svg"
import CoinPedia from "../image/Coinpedia.svg"
import Hackernoon from "../image/Hackernoon.svg"
import Blockonomi from "../image/Blockonomi.svg"
const Whitepaper = () => {
  return (
    <div>
      {/* Whitepaper Section */}
      <div className="container">
        <div className="textSection">
          <h1 className="heading">Take a peek at our Whitepaper</h1>
          <p className="description">
            Learn more about the future plans, in-app economy, and Phaver's vision for more ethical social media.
          </p>
          <button className="button">View Whitepaper</button>
        </div>
        <img
          src={Feature} // Replace with the actual path to the unicorn image
          alt="Unicorn"
          className="image"
        />
      </div>

      {/* Logo Section */}
      <div className="logo-section">
        <h2>What others are saying:</h2>
        <div className="logos">
          <img src={Cointelegraph} alt="Cointelegraph" className="logo" />
          <img src={Forbes} alt="Forbes" className="logo" />
          <img src={Nasdaq} alt="Nasdaq" className="logo" />
          <img src={Bitcoin} alt="Bitcoin.com" className="logo" />
          <img src={CryptoWisser} alt="CryptoWisser" className="logo" />
          <img src={Bitcoinist} alt="Bitcoinist" className="logo" />
          <img src={CoinPedia} alt="CoinPedia" className="logo" />
          <img src={Hackernoon} alt="Hackernoon" className="logo" />
          <img src={Blockonomi} alt="Blockonomi" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;
