import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home'
import Contactus from './Pages/Contactus'
import IndustryExperience from './Pages/IndustoryExperiance/index';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/IndustryExperience" element={<IndustryExperience />} />
      </Routes>
    </Router>
  )
}

export default App
