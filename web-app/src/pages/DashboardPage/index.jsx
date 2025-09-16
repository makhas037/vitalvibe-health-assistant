import React from 'react';
import Graph from '../../components/UI/Graph';
import './DashboardPage.css';

const DashboardPage = () => {

    const stepsChartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Steps',
            data: [7200, 8100, 9600, 8800, 10200, 11000, 10000],
            borderColor: '#4fd1c5',
            backgroundColor: 'rgba(79, 209, 197, 0.1)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#4fd1c5',
            pointBorderColor: '#fff',
            pointHoverRadius: 7,
            pointRadius: 5
        }]
    };
    
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: '#a0a0a0'
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: '#a0a0a0'
                }
            }
        }
    };

  return (
    <section id="dashboard" className="content-section active">
        <div className="section-header">
            <div>
                <h1>Health Dashboard</h1>
                <p>Welcome back, MALACK HASSAN! Here's your health overview for today.</p>
            </div>
        </div>

        <div className="dashboard-grid">
            {/* Metric Cards */}
            <div className="metric-card">
                <div className="metric-icon heart-rate"><HeartRateIcon /></div>
                <div className="metric-info">
                    <h3>Heart Rate</h3>
                    <div className="metric-value">72 <span className="metric-unit">bpm</span></div>
                    <div className="metric-status normal">Normal</div>
                </div>
            </div>

            <div className="metric-card">
                <div className="metric-icon steps"><StepsIcon /></div>
                <div className="metric-info">
                    <h3>Steps Today</h3>
                    <div className="metric-value">8,543 <span className="metric-unit">steps</span></div>
                    <div className="metric-progress">
                        <div className="progress-bar"><div className="progress-fill" style={{width: '85%'}}></div></div>
                        <span className="progress-text">85% of goal</span>
                    </div>
                </div>
            </div>

            <div className="metric-card">
                <div className="metric-icon hydration"><HydrationIcon /></div>
                <div className="metric-info">
                    <h3>Hydration</h3>
                    <div className="metric-value">1.2 <span className="metric-unit">/ 2.5L</span></div>
                    <div className="metric-status warning">Need more water</div>
                </div>
            </div>
            
            <div className="metric-card">
                <div className="metric-icon sleep"><SleepIcon /></div>
                <div className="metric-info">
                    <h3>Sleep Last Night</h3>
                    <div className="metric-value">7.2 <span className="metric-unit">hours</span></div>
                    <div className="metric-status normal">Good quality</div>
                </div>
            </div>
        </div>

        <div className="dashboard-charts">
            <div className="chart-card">
                <h3>Weekly Steps Trend</h3>
                <div className="chart-wrapper">
                    <Graph type="line" data={stepsChartData} options={chartOptions} id="stepsChart"/>
                </div>
            </div>
            
            <div className="notifications-card">
                <h3>Today's Notifications</h3>
                <div className="notifications-list">
                    <div className="notification-item hydration">
                        <div className="notification-icon">💧</div>
                        <div className="notification-content">
                            <p>Time for your water break!</p>
                            <small>2:30 PM</small>
                        </div>
                    </div>
                    <div className="notification-item exercise">
                        <div className="notification-icon">💪</div>
                        <div className="notification-content">
                            <p>Great job completing your morning workout!</p>
                            <small>8:00 AM</small>
                        </div>
                    </div>
                    <div className="notification-item sleep">
                        <div className="notification-icon">🌙</div>
                        <div className="notification-content">
                            <p>Consider starting your bedtime routine soon</p>
                            <small>9:00 PM</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

// SVG Icons for cards
const HeartRateIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>);
const StepsIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>);
const HydrationIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 16.5C7 19 9 21 12 21s5-2 5-4.5c0-1.5-2-5.5-5-11-3 5.5-5 9.5-5 11z"></path></svg>);
const SleepIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>);

export default DashboardPage;