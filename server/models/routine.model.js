const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    name: { type: String, required: true },
    duration: { type: String, required: true },
    completed: { type: Boolean, default: false }
});

const routineSchema = new Schema({
    title: { type: String, required: true },
    time: { type: String, required: true },
    activities: [activitySchema],
    isActive: { type: Boolean, default: true } // true = active, false = in history
}, { timestamps: true });

const Routine = mongoose.model('Routine', routineSchema);

module.exports = Routine;