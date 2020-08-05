import React from 'react';
import './App.css';
import CampsList from './components/CampsList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CampsList /> 
    </div>
  );
}

export default App;
