const router = require('express').Router();
const Routine = require('../models/routine.model');

// GET all active routines
router.get('/', async (req, res) => {
    try {
        const routines = await Routine.find({ isActive: true }).sort({ createdAt: 'asc' });
        res.json(routines);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET all archived routines (history)
router.get('/history', async (req, res) => {
    try {
        const routines = await Routine.find({ isActive: false }).sort({ updatedAt: 'desc' });
        res.json(routines);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new routine
router.post('/', async (req, res) => {
    const newRoutine = new Routine({
        title: req.body.title,
        time: req.body.time,
        activities: req.body.activities
    });
    try {
        const savedRoutine = await newRoutine.save();
        res.status(201).json(savedRoutine);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PATCH to update an activity's completion status
router.patch('/:id/toggle-activity/:activityId', async (req, res) => {
    try {
        const routine = await Routine.findById(req.params.id);
        if (!routine) return res.status(404).json({ message: 'Routine not found' });

        const activity = routine.activities.id(req.params.activityId);
        if (!activity) return res.status(404).json({ message: 'Activity not found' });
        
        activity.completed = !activity.completed;
        await routine.save();
        res.json(routine);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// PATCH to archive a routine (soft delete)
router.patch('/:id/archive', async (req, res) => {
    try {
        const updatedRoutine = await Routine.findByIdAndUpdate(req.params.id, { isActive: false }, { new: true });
        res.json(updatedRoutine);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// PATCH to restore a routine from history
router.patch('/:id/restore', async (req, res) => {
    try {
        const updatedRoutine = await Routine.findByIdAndUpdate(req.params.id, { isActive: true }, { new: true });
        res.json(updatedRoutine);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;