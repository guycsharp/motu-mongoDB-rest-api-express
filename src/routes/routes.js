// Importing required modules
import express from 'express'; // Import Express to set up the router
import { lifeCheck } from '../controllers/lifeCheckController.js'; // Import the lifeCheck function as a named export

// Create a new instance of the Express Router
const router = express.Router();

// Define a GET route
// When a GET request is sent to '/', the lifeCheck function will handle the request
// this adds from app.js path in this example " Mounting the router on the path '/lifeCheck'"
router.get('/', lifeCheck);

// Export the router
// This allows the router to be used in other files like app.js
export default router;
