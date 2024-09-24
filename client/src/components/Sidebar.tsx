import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/join" className={({ isActive }) => isActive ? 'active' : ''}>Join</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
        <li><NavLink to="/news" className={({ isActive }) => isActive ? 'active' : ''}>News</NavLink></li>
        <li><NavLink to="/fixtures" className={({ isActive }) => isActive ? 'active' : ''}>Fixtures</NavLink></li>
        <li><NavLink to="/results" className={({ isActive }) => isActive ? 'active' : ''}>Results</NavLink></li>
        <li><NavLink to="/league" className={({ isActive }) => isActive ? 'active' : ''}>League Table</NavLink></li>
        <li><NavLink to="/links" className={({ isActive }) => isActive ? 'active' : ''}>Links</NavLink></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
