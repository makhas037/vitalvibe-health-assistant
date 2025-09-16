import React from 'react';

const HydrationTab = () => {
    return (
        <div className="metrics-grid">
            <div className="metric-detail-card">
                <h3>Today's Hydration</h3>
                <div className="large-metric">1.2 <span>/ 2.5L</span></div>
                <div className="hydration-visual">
                    <div className="water-glass">
                        <div className="water-level" style={{ height: '48%' }}></div>
                    </div>
                    <p>Last intake: 2 hours ago</p>
                </div>
            </div>
            <div className="metric-detail-card">
                <h3>Hydration Log</h3>
                <div className="log-list">
                    <div className="log-item">
                        <span className="log-time">💧 8:00 AM</span>
                        <span className="log-amount">250ml</span>
                    </div>
                    <div className="log-item">
                        <span className="log-time">💧 10:30 AM</span>
                        <span className="log-amount">300ml</span>
                    </div>
                    <div className="log-item">
                        <span className="log-time">💧 12:15 PM</span>
                        <span className="log-amount">400ml</span>
                    </div>
                    <div className="log-item upcoming">
                        <span className="log-time">💧 2:30 PM</span>
                        <span className="log-amount">250ml (Upcoming)</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HydrationTab;