import React from 'react';
import Graph from '../UI/Graph';

const HeartRateTab = () => {
    const heartRateData = {
        labels: ['6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', 'Now'],
        datasets: [{
            data: [68, 72, 70, 74, 70, 71, 72, 74, 73, 72],
            borderColor: '#e53e3e',
            backgroundColor: 'rgba(229, 62, 62, 0.1)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#e53e3e',
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
                <h3>Current Heart Rate</h3>
                <div className="large-metric">72 <span>bpm</span></div>
                <div className="metric-range">
                    <span>Resting: 65 bpm</span>
                    <span>Max: 185 bpm</span>
                </div>
            </div>
            <div className="chart-detail-card">
                <h3>Heart Rate Trend</h3>
                <div className="chart-wrapper">
                    <Graph type="line" data={heartRateData} options={chartOptions} id="heartRateChart"/>
                </div>
            </div>
        </div>
    );
};

export default HeartRateTab;