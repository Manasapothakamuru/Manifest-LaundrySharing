import React from 'react';
import './App.css'; 
import Header from "./components/Header"
import Hero from "./components/Hero"

const App = () => {
  return (
    <div className="container">
      <Header/>
      <Hero/>
    </div>
  );
};

export default App;
