// Importing required modules
import express from 'express'; // Import Express to set up the router
import { lifeCheck } from '../controllers/lifeCheckController.js'; // Import the lifeCheck function as a named export
import { getUsers, createUser } from '../controllers/userController.js'; // Import user-related controller functions

// Create a new instance of the Express Router
const router = express.Router();

// Define a GET route for lifeCheck
// Mounting the lifeCheck functionality on '/'
router.get('/lifeCheck', lifeCheck);

// User-specific routes (separate routes for getUsers and createUser)
router.get('/getUsers', getUsers); // Handles GET requests to fetch all users
router.post('/createUser', createUser); // Handles POST requests to create a new user

// Export the router
// This allows the router to be used in other files like app.js
export default router;
