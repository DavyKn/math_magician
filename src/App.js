/* eslint-disable */
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Calculator from './components/calculator';
import Quote from './components/Quote';
import {Route, Routes} from "react-router-dom"
/* eslint-enable */

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/Quote" element={<Quote />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
