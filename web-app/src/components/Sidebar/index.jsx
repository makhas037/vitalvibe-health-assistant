import React from 'react';
import './Sidebar.css';
// Import the new icons from react-icons
import { 
    IoGrid, 
    IoBarChart, 
    IoChatbubbleEllipses, 
    IoRepeat, 
    IoNewspaper, 
    IoSettings 
} from 'react-icons/io5';


const Sidebar = ({ activeSection, onNavClick }) => {
  // Updated navItems array with new icons
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <IoGrid size={22} /> },
    { id: 'metrics', label: 'Health Metrics', icon: <IoBarChart size={22} /> },
    { id: 'ai-chat', label: 'AI Symptom Analysis', icon: <IoChatbubbleEllipses size={22} /> },
    { id: 'routines', label: 'Routines', icon: <IoRepeat size={22} /> },
    { id: 'reports', label: 'Reports', icon: <IoNewspaper size={22} /> },
    { id: 'settings', label: 'Settings', icon: <IoSettings size={22} /> },
  ];

  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
          <h2>VitalVibe</h2>
        </div>
      </div>
      <div className="sidebar-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => onNavClick(item.id, item.label)}
          >
            {/* The span is for the new active-state styling */}
            <span className="nav-item-content">
              {item.icon}
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;