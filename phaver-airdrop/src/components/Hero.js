// import React from 'react';
// import './Hero.css';
// import yourImage from '../image/download2-removebg-preview.png';
// import socialImage from '../image/social-big.svg';

// function Hero() {
//   return (
//     <section className="hero">
//       <div className="hero-content">
//         {/* Left-aligned text */}
//         <div className="hero-text">
//           <h1>Phavercoin</h1>
//           <div className="social-big">
//             <img src={socialImage} alt="social" className="social-bg" />
//           </div>
//           <h1>is here!</h1>
//           <p>Claim your free tokens by participating in the Phaver community airdrop.</p>
//         </div>

//         {/* Centered hero image */}
//         <div className="hero-image-container">
//           <img src={yourImage} alt="Phaver Airdrop" className="hero-image" />
//         </div>

//         {/* Right-aligned button */}
//         <div className="hero-button-container">
//           <button className="hero-button">Join the Airdrop</button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;


import React from 'react';
import './Hero.css';
import yourImage from '../image/download2-removebg-preview.png';
// import socialImage from '../image/social-big.svg';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Left-aligned text with social image */}
        <div className="hero-text">
          <h1>Phavercoin <span className="highlighted-text">$SOCIAL</span> is here!</h1>
          <p>Get ready to claim your S1 Phairdrop and trade $SOCIAL across exchanges, follow our official channels for details!</p>
          {/* <img src={socialImage} alt="social" className="social-icon" /> */}
        </div>

        {/* Centered hero image */}
        <div className="hero-image-container">
          <img src={yourImage} alt="Phaver Airdrop" className="hero-image" />
        </div>

        {/* Right-aligned button with username and arrow */}
        <div className="hero-button-container">
          <p className="eligibility-text">
            * To be eligible every user needs to have a Lens profile, Farcaster profile
            and at least one Cred item connected on Phaver.
          </p>
          <button className="hero-button">
            Your Phaver username
            <span className="arrow-circle">→</span>
          </button>
          <p className="eligibility-text">
            * To be eligible every user needs to have a Lens profile, Farcaster profile
            and at least one Cred item connected on Phaver.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
