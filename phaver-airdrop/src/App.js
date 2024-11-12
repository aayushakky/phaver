// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutAirdrop from './components/AboutAirdrop';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
// import Appstore from './components/Appstore';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutAirdrop />
      <HowItWorks />
      <FAQ />
      {/* <Appstore/> */}
      <Footer />
    </div>
  );
}

export default App;