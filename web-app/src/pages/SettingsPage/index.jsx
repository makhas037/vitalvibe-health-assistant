import React from 'react';
import './SettingsPage.css';

// Accept theme and setTheme as props
const SettingsPage = ({ theme, setTheme }) => {
    return (
        <section id="settings" className="content-section active">
            <div className="section-header">
                <div>
                    <h1>Settings & Profile</h1>
                    <p>Manage your health preferences and account settings</p>
                </div>
            </div>
            <div className="settings-grid">
                {/* Profile Information Card (no changes needed) */}
                <div className="settings-card">
                    <h3>Profile Information</h3>
                    <div className="form-group">
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-control" defaultValue="Sri Pranav K" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Age</label>
                        <input type="number" className="form-control" defaultValue="21" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Height (cm)</label>
                        <input type="number" className="form-control" defaultValue="175" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Weight (kg)</label>
                        <input type="number" className="form-control" defaultValue="70" />
                    </div>
                </div>

                {/* Health Goals Card (no changes needed) */}
                <div className="settings-card">
                    <h3>Health Goals</h3>
                    <div className="goals-list">
                        <label className="goal-item"><input type="checkbox" defaultChecked /><span>Weight Loss</span></label>
                        <label className="goal-item"><input type="checkbox" defaultChecked /><span>Improve Fitness</span></label>
                        <label className="goal-item"><input type="checkbox" defaultChecked /><span>Better Sleep</span></label>
                        <label className="goal-item"><input type="checkbox" /><span>Stress Management</span></label>
                    </div>
                </div>

                {/* Notification Preferences Card (no changes needed) */}
                <div className="settings-card">
                    <h3>Notification Preferences</h3>
                    <div className="notification-settings">
                        <label className="setting-item"><span>Hydration Reminders</span><input type="checkbox" defaultChecked /></label>
                        <label className="setting-item"><span>Exercise Notifications</span><input type="checkbox" defaultChecked /></label>
                        <label className="setting-item"><span>Sleep Reminders</span><input type="checkbox" defaultChecked /></label>
                        <label className="setting-item"><span>Weekly Reports</span><input type="checkbox" defaultChecked /></label>
                    </div>
                </div>

                {/* Theme Preferences Card (updated) */}
                <div className="settings-card">
                    <h3>Theme Preferences</h3>
                    <div className="theme-options">
                        <button className={`theme-btn ${theme === 'system' ? 'active' : ''}`} onClick={() => setTheme('system')}><span>System</span></button>
                        <button className={`theme-btn ${theme === 'light' ? 'active' : ''}`} onClick={() => setTheme('light')}><span>Light</span></button>
                        <button className={`theme-btn ${theme === 'dark' ? 'active' : ''}`} onClick={() => setTheme('dark')}><span>Dark</span></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SettingsPage;