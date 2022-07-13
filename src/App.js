import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Resume/Home';
import Contact from './Resume/Contact';
function App() {
  return (
    <div >
   <Router>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
