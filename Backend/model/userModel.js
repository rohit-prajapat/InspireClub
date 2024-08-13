const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the User schema
const userSchema = new Schema({
    name: {
        type: String,
        
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures email is unique
        trim: true,
        lowercase: true, // Optional: Convert email to lowercase
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true, // Optional: Automatically add createdAt and updatedAt fields
});

// Create the User model
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
