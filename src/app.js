// Importing required modules
import express from 'express'; // Import Express to build the app
import cors from 'cors'; // Middleware to enable CORS
import bodyParser from 'body-parser'; // Middleware to parse JSON request bodies
import router from './routes/routes.js'; // Import the routes
import connectDB from './config/MongoDB.js'; // Import MongoDB connection logic
import dotenv from 'dotenv'; // Load environment variables

// Load environment variables
dotenv.config();

// Initialize database connection
connectDB();

// Create an instance of the Express app
const app = express();

// Middleware setup
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse incoming JSON requests

// Mount routes
app.use('/', router); // Mounting all routes from routes.js at the root path

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
