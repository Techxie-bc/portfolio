import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Work from './components/Work/Work';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/work" element={<Work />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
