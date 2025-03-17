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


export const createUser = async (req, res) => {
    console.log('▶️ [1] Entering createUser()'); // STEP 1
    
    const { name, email, password, age } = req.body;
    console.log('▶️ [2] Extracted data from request:', { name, email, password, age }); // STEP 2

    try {
        // STEP 3: Create new user instance
        console.log('▶️ [3] Creating new User instance...');
        const user = new User({ name, email, password, age });

        // STEP 4: Save to MongoDB → This triggers pre('save') middleware
        console.log('▶️ [4] Calling user.save()...');
        await user.save();

        // STEP 8: If save successful
        console.log('✅ [8] User saved successfully:', user);
        res.status(201).json(user);
    } catch (error) {
        // STEP 9: If there's an error
        console.error('❌ [9] Error while saving user:', error.message);
        res.status(400).json({ message: error.message });
    }
};


/**
 *  Final Flow Order
Here's the step-by-step pointer flow between files:

Step	Location	Code Snippet	Description
1	userController.js	createUser()	Request received
2	userController.js	const { name, email, ...}	Extract data from request
3	userController.js	new User({...})	Create a new user instance
4	userController.js	await user.save()	Save to MongoDB → middleware triggered
5	userModel.js	pre('save')	Middleware starts
6	userModel.js	bcrypt.genSalt()	Generate salt for password hashing
6.1	userModel.js	bcrypt.hash()	Hash the password
7	userModel.js	next()	Pass control back to .save()
8	userController.js	res.status(201).json()	Respond to client
9	userController.js	catch (error)	Error handling (if needed)

 */