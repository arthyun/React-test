import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header.js';
import Content from './components/Content.js';
import Footer from './components/Footer.js';
// import React, { useState } from 'react';
// import { Button } from 'semantic-ui-react'

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Content />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
