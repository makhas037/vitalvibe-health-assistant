import React from 'react';
import Graph from '../UI/Graph';

const SleepTab = () => {
    const weeklySleepData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            data: [6.5, 7.2, 7.0, 6.8, 7.5, 8.0, 7.2],
            borderColor: '#9f7aea',
            backgroundColor: 'rgba(159, 122, 234, 0.1)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#9f7aea',
            pointBorderColor: '#fff',
        }]
    };
    
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            y: { beginAtZero: false, grid: { color: 'rgba(255, 255, 255, 0.1)' }, ticks: { color: '#a0a0a0' } },
            x: { grid: { display: false }, ticks: { color: '#a0a0a0' } }
        }
    };

    return (
        <div className="metrics-grid">
            <div className="metric-detail-card">
                <h3>Last Night's Sleep</h3>
                <div className="large-metric">7.2 <span>hours</span></div>
                <div className="sleep-breakdown">
                    <div className="sleep-phase">
                        <span className="phase-label">Deep</span>
                        <span className="phase-value">2.1 hrs</span>
                    </div>
                    <div className="sleep-phase">
                        <span className="phase-label">Light</span>
                        <span className="phase-value">3.3 hrs</span>
                    </div>
                    <div className="sleep-phase">
                        <span className="phase-label">REM</span>
                        <span className="phase-value">1.8 hrs</span>
                    </div>
                </div>
            </div>
            <div className="chart-detail-card">
                <h3>Weekly Sleep Pattern</h3>
                <div className="chart-wrapper">
                    <Graph type="line" data={weeklySleepData} options={chartOptions} id="sleepChart" />
                </div>
            </div>
        </div>
    );
};

export default SleepTab;