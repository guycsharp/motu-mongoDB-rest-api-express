import User from '../models/userModel.js';

// Get all users
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create new user
export const createUser = async (req, res) => {
    console.log('Request Body:', req.body); // Add this line for debugging

    const { name, email, password, age } = req.body;

    try {
        const user = new User({ name, email, password, age });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

