import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import DashboardPage from '../pages/DashboardPage';
import HealthMetricsPage from '../pages/HealthMetricsPage';
import SymptomCheckerPage from '../pages/SymptomCheckerPage';
import RoutinesPage from '../pages/RoutinesPage';
import ReportsPage from '../pages/ReportsPage';
import SettingsPage from '../pages/SettingsPage';
import './MainLayout.css';

const MainLayout = ({ theme, setTheme }) => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [navNotification, setNavNotification] = useState('');
  // Add new state for the notification key
  const [notificationKey, setNotificationKey] = useState(0);

  // This effect is no longer needed, as the CSS animation will handle the full lifecycle.
  // We can remove the previous useEffect for the timer.

  const handleNavClick = (sectionId, sectionLabel) => {
    if (sectionId !== activeSection) {
      setActiveSection(sectionId);
      setNavNotification(`Mapsd to ${sectionLabel}`);
      // Update the key to force re-animation
      setNotificationKey(prevKey => prevKey + 1);
    }
  };

  const renderSection = () => {
    const sections = {
      dashboard: <DashboardPage />,
      metrics: <HealthMetricsPage />,
      'ai-chat': <SymptomCheckerPage />,
      routines: <RoutinesPage />,
      reports: <ReportsPage />,
      settings: <SettingsPage theme={theme} setTheme={setTheme} />,
    };
    return sections[activeSection] || <DashboardPage />;
  };

  return (
    <>
      <Sidebar activeSection={activeSection} onNavClick={handleNavClick} />

      <main className="main-content">
        <div key={activeSection} className="content-section-wrapper">
          {renderSection()}
        </div>
      </main>

      {/* Add the key prop here */}
      {navNotification && (
        <div id="nav-notification" key={notificationKey}>
          {navNotification}
        </div>
      )}
    </>
  );
};

export default MainLayout;