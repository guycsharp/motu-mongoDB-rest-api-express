import mongoose from 'mongoose'; // Importing Mongoose using ES modules

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI); // Connecting to MongoDB
        console.log(`MongoDB connected: ${conn.connection.host}`); // Logging successful connection
    } catch (error) {
        console.error(`Error: ${error.message}`); // Logging errors if connection fails
        process.exit(1); // Exiting the process with a failure code
    }
};

export default connectDB; // Exporting the function as a default export
