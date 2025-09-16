import React from 'react';
import './ReportsPage.css';

const ReportsPage = () => {
  return (
    <section id="reports" className="content-section active">
      <div className="section-header">
        <div>
          <h1>Health Reports</h1>
          <p>Your personalized health insights and progress analysis</p>
        </div>
        <button className="btn btn--outline">Export PDF</button>
      </div>
      <div className="report-card">
        <div className="report-header">
          <h2>Weekly Health Report</h2>
          <div className="report-score">
            <div className="score-circle">
              <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" fill="none" stroke="var(--color-secondary)" strokeWidth="8"></circle>
                <circle cx="60" cy="60" r="54" fill="none" stroke="var(--color-primary)" strokeWidth="8" strokeDasharray="339.292" strokeDashoffset="51" strokeLinecap="round" style={{transform: 'rotate(-90deg)', transformOrigin: 'center'}}></circle>
              </svg>
              <div className="score-text">
                <span className="score-number">85</span>
                <span className="score-label">Health Score</span>
              </div>
            </div>
          </div>
        </div>
        <div className="report-content">
          <div className="report-section">
            <h3>Key Improvements</h3>
            <ul className="improvement-list">
              <li>✅ Increased daily step count by 12%</li>
              <li>✅ Maintained consistent sleep schedule</li>
              <li>✅ Improved hydration levels</li>
            </ul>
          </div>
          <div className="report-section">
            <h3>Recommendations</h3>
            <ul className="recommendation-list">
              <li>🎯 Focus on increasing deep sleep duration</li>
              <li>🏋️ Consider adding strength training twice weekly</li>
              <li>😌 Monitor stress levels during busy periods</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportsPage;