import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './pages/gallery';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
      //  <Router>

      //  </Router>
    <div>
      <Navigation />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
