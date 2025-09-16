import React, { useState } from 'react';
import './HealthMetricsPage.css';

// Import the new tab components
import HeartRateTab from '../../components/HealthMetrics/HeartRateTab';
import StepsTab from '../../components/HealthMetrics/StepsTab';
import HydrationTab from '../../components/HealthMetrics/HydrationTab';
import SleepTab from '../../components/HealthMetrics/SleepTab';

const HealthMetricsPage = () => {
  const [activeTab, setActiveTab] = useState('heart-rate');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'heart-rate':
        return <HeartRateTab />;
      case 'steps':
        return <StepsTab />;
      case 'hydration':
        return <HydrationTab />;
      case 'sleep':
        return <SleepTab />;
      default:
        return <HeartRateTab />;
    }
  };

  return (
    <section id="metrics" className="content-section active">
      <div className="section-header">
        <div>
          <h1>Health Metrics</h1>
          <p>Track and analyze your vital health indicators</p>
        </div>
      </div>
      <div className="metrics-tabs">
        <button className={`tab-btn ${activeTab === 'heart-rate' ? 'active' : ''}`} onClick={() => setActiveTab('heart-rate')}>Heart Rate</button>
        <button className={`tab-btn ${activeTab === 'steps' ? 'active' : ''}`} onClick={() => setActiveTab('steps')}>Steps</button>
        <button className={`tab-btn ${activeTab === 'hydration' ? 'active' : ''}`} onClick={() => setActiveTab('hydration')}>Hydration</button>
        <button className={`tab-btn ${activeTab === 'sleep' ? 'active' : ''}`} onClick={() => setActiveTab('sleep')}>Sleep</button>
      </div>

      <div className="metrics-content">
        <div className="tab-content active">
            {renderTabContent()}
        </div>
      </div>
    </section>
  );
};

export default HealthMetricsPage;