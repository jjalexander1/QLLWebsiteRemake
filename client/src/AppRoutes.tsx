import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Join from './pages/Join';
import About from './pages/About';
import Links from './pages/Links';
import LeagueTables from './pages/LeagueTable';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/join" element={<Join />} />
      <Route path="/about" element={<About />} />
      <Route path="/links" element={<Links />} />
      <Route path="/leagues" element={<LeagueTables />} />

      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AppRoutes;
