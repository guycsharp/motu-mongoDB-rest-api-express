// Import the mysql2 library
import mysql from 'mysql2/promise'; // Use promise-based API for asynchronous operations

// Create an async function to handle the database connection
const connectDB = async () => {
    try {
        // Create a connection to the database
        const connection = await mysql.createConnection({
            host: process.env.MYSQL_DB_HOST, // Database host (e.g., localhost)
            user: process.env.MYSQL_DB_USER, // Your MySQL username
            password: process.env.MYSQL_DB_PASS, // Your MySQL password
            database: process.env.MYSQL_DB_NAME // Your MySQL database name
        });

        console.log('MySQL connected successfully!');
        return connection; // Return the connection for further use
    } catch (error) {
        console.error(`Error connecting to MySQL: ${error.message}`);
        process.exit(1); // Exit the process if there's an error
    }
};

// Export the connection function
export default connectDB;
