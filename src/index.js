import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Your navigation bar
import Footer from './components/Footer'; // Your footer component
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage'; // A 404 page
const App = () => {
  return (
    <>
      <Navbar /> {/* This stays on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
        <Route path="home" element={<NoPage />} /> {/* 404 page */}
      </Routes>
      <Footer /> {/* This stays on all pages */}
    </>
  );
}

export default App;

