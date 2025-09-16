// 1. Centralized base URL for your backend server.
// This ensures the port (5001) is correct and consistent everywhere.
const API_BASE = "http://localhost:5001/api";

// --- Functions for Your Backend API ---

// Fetches main dashboard data
export const getDashboardData = async (userId) => {
    try {
        const response = await fetch(`${API_BASE}/dashboard/${userId}`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch dashboard data from server:", error);
        return { metrics: [] }; // Return a default structure on error
    }
};

// Logs a chat interaction to the database
export const logChatInteraction = async (logData) => {
    try {
        const response = await fetch(`${API_BASE}/log-chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(logData),
        });
        return await response.json();
    } catch (error) {
        console.error("Failed to log chat interaction:", error);
    }
};

// Gets the list of past chat sessions
export const getChatSessions = async () => {
    try {
        const response = await fetch(`${API_BASE}/chat-sessions`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch chat sessions:", error);
        return [];
    }
};

// Gets the messages for a specific session
export const getChatHistoryBySessionId = async (sessionId) => {
    try {
        const response = await fetch(`${API_BASE}/chat-history/${sessionId}`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch chat history:", error);
        return [];
    }
};


// Gets nutrition data from the USDA API
export const getFoodNutrition = async (foodQuery) => {
    const apiKey = import.meta.env.VITE_USDA_API_KEY;
    const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${encodeURIComponent(foodQuery)}`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch from USDA API');
        const data = await response.json();

        if (data.foods && data.foods.length > 0) {
            const firstFood = data.foods[0];
            const nutrients = {
                description: firstFood.description,
                calories: firstFood.foodNutrients.find(n => n.nutrientName.toLowerCase().includes('energy'))?.value || 0,
                protein: firstFood.foodNutrients.find(n => n.nutrientName.toLowerCase() === 'protein')?.value || 0,
                carbs: firstFood.foodNutrients.find(n => n.nutrientName.toLowerCase().includes('carbohydrate'))?.value || 0,
                fat: firstFood.foodNutrients.find(n => n.nutrientName.toLowerCase().includes('total lipid'))?.value || 0,
            };
            return nutrients;
        } else {
            return { error: `Could not find nutrition data for "${foodQuery}".` };
        }
    } catch (error) {
        console.error("Failed to fetch nutrition data:", error);
        return { error: "Could not connect to the nutrition service." };
    }
};

// Gets health news from the NewsAPI
export const getHealthNews = async () => {
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${apiKey}`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch news.');
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error("Error fetching health news:", error);
        return [];
    }
};

// ... (keep the API_BASE constant and other functions)

// --- Functions for Routines API ---

export const getRoutines = async () => {
    try {
        const response = await fetch(`${API_BASE}/routines`);
        return await response.json();
    } catch (err) { console.error(err); return []; }
};

export const getRoutineHistory = async () => {
    try {
        const response = await fetch(`${API_BASE}/routines/history`);
        return await response.json();
    } catch (err) { console.error(err); return []; }
};

export const addRoutine = async (routineData) => {
    const response = await fetch(`${API_BASE}/routines`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(routineData)
    });
    return await response.json();
};

export const toggleActivity = async (routineId, activityId) => {
    const response = await fetch(`${API_BASE}/routines/${routineId}/toggle-activity/${activityId}`, {
        method: 'PATCH'
    });
    return await response.json();
};

export const archiveRoutine = async (routineId) => {
    const response = await fetch(`${API_BASE}/routines/${routineId}/archive`, {
        method: 'PATCH'
    });
    return await response.json();
};

export const restoreRoutine = async (routineId) => {
    const response = await fetch(`${API_BASE}/routines/${routineId}/restore`, {
        method: 'PATCH'
    });
    return await response.json();
};
