import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Work from './components/Work/Work';
import Resume from './components/Resume/Resume';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/work" element={<Work />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
};

export default App;
