import React from 'react';
import './App.css';
import  HomePage  from './MainPage/HomePage';
import Navbar from './layout/navbar';
import Footer from './layout/Footer';
import {BrowserRouter ,Route, Routes} from 'react-router-dom'
import About from './layout/About';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="p-4"></div>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/' element={<About/>} />
        </Routes>  
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;