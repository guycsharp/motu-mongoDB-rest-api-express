// Importing required modules
import express from 'express'; // Express is a popular web framework for building APIs
import cors from 'cors'; // CORS middleware to handle Cross-Origin Resource Sharing
import bodyParser from 'body-parser'; // Body-parser middleware to parse incoming JSON request bodies
import routes from './routes/routes.js'; // Importing routes defined in the routes folder
import connectDB from './config/MongoDB.js';

connectDB();
// Create an instance of the Express app
const app = express();

// Middleware setup
app.use(cors()); // Enable all CORS requests
app.use(bodyParser.json()); // Parse incoming JSON payloads

// Set up routing
// Mounting the router on the path '/lifeCheck'
app.use('/lifeCheck', routes);

// Start the server
// The app listens on the port specified in the environment variables or defaults to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
