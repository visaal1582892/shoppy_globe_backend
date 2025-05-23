import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Defining the secret key for JWT
const JWT_SECRET = 'wrtcgunh3475yns2345mz92';

export const insertDummyUsers = async () => {
    const dummyUsers=[
        {
            name: "John Doe",
            email: "john@example.com",
            password: "password123"
        },
        {
            name: "Jane Smith",
            email: "jane@example.com",
            password: "password123"
        },
        {
            name: "Alice Johnson",
            email: "alice@example.com",
            password: "password123"
        },
        {
            name: "Bob Brown",
            email: "bob@example.com",
            password: "password123"
        }
    ];
    await User.insertMany(dummyUsers);
    console.log("Dummy users inserted");
}

// User registration logic
export const registerUser = async (req,res) => {
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        return res.status(400).json({message: "Please fill all the fields"});
    }
    // Check if user already exists
    const userExists = await User.findOne({email});
    if(userExists){
        return res.status(400).json({message: "User already exists"});
    }
    const user = await User.create({name,email,password});
    return res.status(201).json({message: "User registered successfully"});
}

// User login logic
export const loginUser = async (req,res) => {
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({message: "Please fill all the fields"});
    }
    // Check if user exists
    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({message: "User does not exist"});
    }
    // Check if password is correct
    if(user.password !== password){
        return res.status(400).json({message: "Invalid credentials"});
    }
    // Generate JWT token
    const token = jwt.sign({id: user._id}, JWT_SECRET, {
        expiresIn: '1h'
    });
    return res.status(200).json({message: "User logged in successfully", token});
}