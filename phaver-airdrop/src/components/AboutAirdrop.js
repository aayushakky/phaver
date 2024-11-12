import React from 'react';
import './AboutAirdrop.css'; // Use this file to style your component
import logoImage from '../image/bybit.svg';
import logoImage2 from '../image/gate-io.svg';
import logoImage3 from '../image/kucoin.svg';
import logoImage4 from '../image/bitget.svg';
import logoImage5 from '../image/mexc.svg';
import logoImage6 from '../image/cyberswap.svg';
function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h1>Where to buy $SOCIAL</h1>
        <div className="main-button-container">
  <button className="main-button">
    <img src={logoImage} alt="Bybit" />
  </button>
</div>
<div className="exchange-button-container">
  <button className="exchange-button">
    <img src={logoImage2} alt="Gate.io" />
  </button>
  <button className="exchange-button">
    <img src={logoImage3} alt="KuCoin" />
  </button>
  <button className="exchange-button">
    <img src={logoImage4} alt="Bitget" />
  </button>
  <button className="exchange-button">
    <img src={logoImage5} alt="MEXC" />
  </button>
  <button className="exchange-button">
    <img src={logoImage6} alt="CyberSwap" />
  </button>
</div>

        <div className="read-more">
          <a href="#more">Read more</a>
        </div>
      </div>
    </section>
  );
}

export default About;

