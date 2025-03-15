import mongoose from 'mongoose'; // Importing Mongoose using ES modules
import bcrypt from 'bcrypt'; // Importing bcrypt for password hashing

// Defining the user schema structure with Mongoose
const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true }, // User's name, a required field
        password: { type: String, required: true }, // User's password, a required field (will be hashed before saving)
        email: { type: String, required: true, unique: true }, // User's email, required and must be unique
        age: { type: Number }, // User's age, optional field
    },
    { timestamps: true } // Automatically adds createdAt and updatedAt fields to the schema
);

// Middleware to hash the password before saving the document
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) { // Check if the password field is modified
        try {
            const salt = await bcrypt.genSalt(10); // Generate a salt
            this.password = await bcrypt.hash(this.password, salt); // Hash the password using the salt
        } catch (error) {
            return next(error); // Pass any error to the next middleware
        }
    }
    next(); // Continue with the save operation
});

// Method to compare a plain text password with the stored hashed password
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password); // Returns true if passwords match
};

// Creating the User model from the schema, which allows interaction with the 'users' collection in MongoDB
const User = mongoose.model('user', userSchema);

export default User; // Exporting User using ES6 syntax for use in other files
