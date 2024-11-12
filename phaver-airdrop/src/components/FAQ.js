import React from "react";
import "./FAQ.css"; // Make sure your CSS file contains styles to match the image
import eligibilityImage from "../image/Secure your Phaver Phairdrop_files/d_social_multiplier_values.svg"; 
import dcredImage from "../image/Secure your Phaver Phairdrop_files/d_astro_ponycorn_banner_x4.png"; 
import Appstore from "../image/Secure your Phaver Phairdrop_files/android.svg"
import Googleplay from "../image/Secure your Phaver Phairdrop_files/ios.svg"
import Qr from "../image/Secure your Phaver Phairdrop_files/qr.webp"
const FAQ = () => {
  return (
    <div className="faq-container">
      <h2>Level 1 users are not eligible.</h2>
      <p>
        Season 2 total size is 200M $SOCIAL (2%) and it is divided among
        eligible users based on the number of Points redeemed times multiplier
        for $SOCIAL held across Phaver-connected wallets (30-day-average).
        Redemption is 1 month after TGE.{" "}
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </p>

      {/* Display the eligibility image */}
      <div className="eligibility-image-container">
        <img
          src={eligibilityImage}
          alt="Eligibility Levels"
          className="eligibility-image"
        />
      </div>

      <p className="info-text">
        Average $SOCIAL holding multiplier.{" "}
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          See full details
        </a>
      </p>

      <div className="cred-pass">
        <div className="cred-pass-content">
          <div className="cred-pass-text">
            <h3>To level up faster, get the new Phaver Cred Pass on Opensea!</h3>
            <button className="cred-pass-button">Get the Cred Pass</button>
          </div>
          <img
            src={dcredImage}
            alt="Phaver Cred Pass"
            className="cred-pass-background"
          />
        </div>
      </div>

      <button className="how-to-earn-button">
        How to earn Points and Level up on Phaver?
      </button>

      <div className="download-app">
        <h3>
          If you don’t have Phaver, the gateway to Web3 social yet, download the
          app and start earning!
        </h3>
        <div className="download-buttons">
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
            <img src={Appstore}alt="App Store" />
          </a>
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img src={Googleplay} alt="Google Play" />
          </a>
        </div>
        <div className="qr-code">
            <img src={Qr} alt="QR Code" />
        </div>
      </div>

      <footer className="disclaimer">
        <p>
          Token issuer retains the right to adjust the qualification criteria, amounts, and
          overall issuance of any tokens, and all information on this page is subject to
          change and does not provide any guarantees of tokens for any participant. Users may
          also be required to pass a KYC process for legal reasons, and any user who is
          legally ineligible for receiving tokens or is discovered to have engaged in
          fraudulent activity such as automated inauthentic accounts or content will not be
          included in the airdrop even if otherwise eligible.
        </p>
      </footer>
    </div>
  );
};

export default FAQ;
