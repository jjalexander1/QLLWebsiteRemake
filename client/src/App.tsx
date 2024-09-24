import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Join from './pages/Join';
import About from './pages/About';
import LeagueTable from './pages/LeagueTable';

import Sidebar from './components/Sidebar';
import AppRoutes from './AppRoutes';
import './styles/App.css'; // You will define the grid styling here

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">

        {/* Fixed Navbar */}
        <Navbar />

        {/* Main content under the fixed navbar */}
        <div className="container">
          {/* Left Sidebar with links */}
          <div className="sidebar">
            <Sidebar />
          </div>

          {/* Main content */}
          <div className="content">
            <AppRoutes /> {/* Use the AppRoutes component here */}

          </div>

          {/* League Table on the right */}
          <div className="league-table-column">
            <LeagueTable />
          </div>
        </div>

        {/* Fixed Footer */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
