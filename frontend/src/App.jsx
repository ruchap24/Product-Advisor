import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Questionnaire from './pages/Questionnaire';
import Results from './pages/Results';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Questionnaire />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
