import React from 'react';
import Graph from '../UI/Graph';

const StepsTab = () => {
    const weeklyStepsData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            data: [7200, 8100, 9600, 8800, 10200, 11000, 10000],
            backgroundColor: 'rgba(79, 209, 197, 0.6)',
            borderColor: 'rgba(79, 209, 197, 1)',
            borderWidth: 1,
            borderRadius: 4,
        }]
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            y: { beginAtZero: true, grid: { color: 'rgba(255, 255, 255, 0.1)' }, ticks: { color: '#a0a0a0' } },
            x: { grid: { display: false }, ticks: { color: '#a0a0a0' } }
        }
    };

    return (
        <div className="metrics-grid">
            <div className="metric-detail-card">
                <h3>Today's Steps</h3>
                <div className="large-metric">8,543 <span>steps</span></div>
                <div className="goal-progress">
                    <div className="progress-bar-large">
                        <div className="progress-fill" style={{ width: '85.4%' }}></div>
                    </div>
                    <span>1,457 steps to your 10,000 step goal</span>
                </div>
            </div>
            <div className="chart-detail-card">
                <h3>Weekly Steps Activity</h3>
                <div className="chart-wrapper">
                    <Graph type="bar" data={weeklyStepsData} options={chartOptions} id="stepsDetailChart" />
                </div>
            </div>
        </div>
    );
};

export default StepsTab;