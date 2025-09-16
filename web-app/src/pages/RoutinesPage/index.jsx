import React, { useState, useEffect } from 'react';
import './RoutinesPage.css';
import AddRoutineModal from '../../components/Routines/AddRoutineModal'; // Import the dedicated modal component
import { IoTrash, IoReturnUpForward } from 'react-icons/io5';
import { getRoutines, getRoutineHistory, addRoutine, toggleActivity, archiveRoutine, restoreRoutine } from '../../services/api.js';

// --- Reusable Components ---
const RoutineCard = ({ routine, onToggleActivity, onArchive }) => {
    const activities = routine.activities || [];
    const completedCount = activities.filter(a => a.completed).length;
    const totalCount = activities.length;
    const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

    return (
        <div className="routine-card">
            <div className="routine-header">
                <h3>{routine.title}</h3>
                <div className="header-actions">
                    <span className="routine-time">{routine.time}</span>
                    <button className="delete-btn" onClick={() => onArchive(routine._id)}><IoTrash /></button>
                </div>
            </div>
            <div className="routine-activities">
                {activities.map(activity => (
                    <div key={activity._id} className={`activity-item ${activity.completed ? 'completed' : ''}`} onClick={() => onToggleActivity(routine._id, activity._id)}>
                        <div className="activity-check">{activity.completed ? '✓' : ''}</div>
                        <span className="activity-name">{activity.name}</span>
                        <span className="activity-duration">{activity.duration}</span>
                    </div>
                ))}
            </div>
            <div className="routine-progress">
                <div className="progress-bar"><div className="progress-fill" style={{ width: `${progress}%` }}></div></div>
                <span>{completedCount} of {totalCount} completed</span>
            </div>
        </div>
    );
};

const HistoryPanel = ({ history, onRestore }) => (
    <div className="history-panel">
        <h3>Routine History</h3>
        <p>Archived routines. Restore them to use them again.</p>
        <div className="history-list">
            {history.length > 0 ? history.map(routine => (
                <div key={routine._id} className="history-item">
                    <span>{routine.title}</span>
                    <button className="btn btn--secondary" onClick={() => onRestore(routine._id)}>
                        <IoReturnUpForward /> Restore
                    </button>
                </div>
            )) : <p className="no-history-text">No archived routines.</p>}
        </div>
    </div>
);

// --- Main Page Component ---
const RoutinesPage = () => {
    const [routines, setRoutines] = useState([]);
    const [history, setHistory] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Central function to refresh all data from the database
    const fetchData = async () => {
        const [activeRoutines, historyRoutines] = await Promise.all([
            getRoutines(),
            getRoutineHistory()
        ]);
        setRoutines(activeRoutines);
        setHistory(historyRoutines);
    };

    // Fetch initial data on component mount
    useEffect(() => {
        fetchData();
    }, []);

    const handleToggleActivity = async (routineId, activityId) => {
        setRoutines(currentRoutines =>
            currentRoutines.map(routine => {
                if (routine._id === routineId) {
                    return {
                        ...routine,
                        activities: (routine.activities || []).map(activity =>
                            activity._id === activityId ? { ...activity, completed: !activity.completed } : activity
                        )
                    };
                }
                return routine;
            })
        );
        await toggleActivity(routineId, activityId);
    };

    const handleAddRoutine = async (newRoutineData) => {
        await addRoutine(newRoutineData);
        fetchData(); // Refresh all data after adding
    };

    const handleArchive = async (routineId) => {
        await archiveRoutine(routineId);
        fetchData(); // Refresh all data after archiving
    };

    const handleRestore = async (routineId) => {
        await restoreRoutine(routineId);
        fetchData(); // Refresh all data after restoring
    };

    return (
        <>
            <AddRoutineModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAddRoutine={handleAddRoutine} />
            <section id="routines" className="content-section active">
                <div className="section-header">
                    <div>
                        <h1>Smart Health Routines</h1>
                        <p>Manage your daily health routines and track progress</p>
                    </div>
                    <button className="btn btn--primary" onClick={() => setIsModalOpen(true)}>Add New Routine</button>
                </div>
                <div className="page-layout">
                    <div className="routines-grid">
                        {routines.map(routine => (
                            <RoutineCard key={routine._id} routine={routine} onToggleActivity={handleToggleActivity} onArchive={handleArchive} />
                        ))}
                    </div>
                    <HistoryPanel history={history} onRestore={handleRestore} />
                </div>
            </section>
        </>
    );
};

export default RoutinesPage;