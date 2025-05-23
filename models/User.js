import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is a required field"],
        minLength: [3, 'Name must be at least 3 characters long']
    },
    email: {
        type: String,
        required: [true, "Email is a required field"],
        unique: true,
        match: [/.+\@.+\..+/, 'Invalid email format'],
        trim: true,
        minLength: [5, 'Email must be at least 5 characters long']
    },
    password: {
        type: String,
        required: [true, "Password is a required field"],
        minLength: [6, 'Password must be at least 6 characters long']
    },

    // Some other fields can be added here as per requirements
    // address: {
    //     type: String,
    //     required: [true, "Address is a required field"],
    //     minLength: [5, 'Address must be at least 5 characters long'],
    //     trim: true
    // },
    // phoneNumber: {
    //     type: String,
    //     required: [true, "Phone number is a required field"],
    //     match: [/^\d{10}$/, 'Phone number must be 10 digits long'],
    // }
});

const User = mongoose.model('User', UserSchema);
export default User;
