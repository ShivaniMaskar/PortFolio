import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Pages/Navigation'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Services from './Components/Pages/Services'
import Skills from './Components/Pages/Skills'
import Contact from './Components/Pages/Contact'
import Main from './Components/Pages/Main';
function App() {

  return (
    <Router>
    <Navigation/>
    <Routes>
    <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />

    </Routes>
   
      </Router>
  )
}

export default App
