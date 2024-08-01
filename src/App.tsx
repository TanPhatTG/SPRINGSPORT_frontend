import React from 'react';
import './App.css';
import  HomePage  from './MainPage/HomePage';
import Navbar from './layout/navbar';
import Footer from './layout/Footer';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <div className="p-4"></div>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;