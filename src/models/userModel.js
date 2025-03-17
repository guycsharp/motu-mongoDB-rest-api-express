import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        password: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        age: { type: Number },
    },
    { timestamps: true }
);

// STEP 5: Middleware runs before saving the document
userSchema.pre('save', async function (next) {
    console.log('▶️ [5] Entering pre("save") middleware');

    if (this.isModified('password')) {
        console.log('▶️ [6] Password is modified, hashing...');
        try {
            const salt = await bcrypt.genSalt(10);
            console.log('▶️ [6.1] Generated salt:', salt);

            this.password = await bcrypt.hash(this.password, salt);
            console.log('✅ [6.2] Hashed password:', this.password);
        } catch (error) {
            console.error('❌ [6.3] Error during hashing:', error.message);
            return next(error); // Pass error to next middleware
        }
    }

    console.log('▶️ [7] Exiting pre("save"), calling next()...');
    next(); // Pass control back to `.save()`
});

// Create User model
const User = mongoose.model('user', userSchema);

export default User;



// Middleware to hash the password before saving the document
/**
 * This is a Mongoose middleware that runs before saving the document to the database.
pre('save') = "Before you save, do this first..."
 * this refers to the document being saved (the user object).
if (this.isModified('password')) →
This checks if the password field has been modified.
This prevents rehashing the password unnecessarily if it's not changed.
const salt = await bcrypt.genSalt(10) →
Generates a unique "salt" value that makes the hash stronger.
10 → Salt rounds (higher = more secure but slower).
this.password = await bcrypt.hash(this.password, salt) →
Hashes the password using the generated salt.
next() →
Tells Mongoose to continue the operation and proceed to saving the document.
If an error occurs → next(error) sends the error to the error handler.
 */
