const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import your route files
const dataRoutes = require('./routes/data.routes.js');
const symptomRoutes = require('./routes/symptom.routes.js');
const routineRoutes = require('./routes/routine.routes.js');

const app = express();
const PORT = process.env.PORT || 5001;

// --- Middleware ---
// This MUST come before the routes are defined
app.use(cors());
app.use(express.json());


// --- API Routes ---
// Mount your routers on unique paths
app.use('/api', dataRoutes);
app.use('/api/symptoms', symptomRoutes);
app.use('/api/routines', routineRoutes); 

// --- DB Connection ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Successfully connected to MongoDB Atlas!"))
  .catch(err => console.error("Error connecting to MongoDB:", err));

// --- Server Startup ---
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});