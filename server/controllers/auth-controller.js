const User = require("../models/user-model");
const bcrypt = require('bcryptjs');

// Home logic
const home = async (req, res) => {
    try {
        res.status(200).json({ message: "Welcome to HOME abishek using controllers 2" });
    } catch (error) {
        console.error('Home route error:', error);
        res.status(500).json({ msg: "An unexpected error occurred. Please try again later." });
    }
};

// Register logic
const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        const saltRounds = 10;
        const hash_password = await bcrypt.hash(password, saltRounds);

        const userCreated = await User.create({ username, email, phone, password: hash_password });

        res.status(201).json({
            msg: "Registration successful",
            token: userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });

    } catch (error) {
        console.error('Register route error:', error);
        res.status(500).json({ msg: "An unexpected error occurred. Please try again later." });
    }
};

// Login logic
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExists = await User.findOne({ email });
        if (!userExists) {
            console.log('User not found for email:', email);
            return res.status(400).json({ msg: "Invalid Credentials" });
        }
        
        console.log('User found:', userExists);

        const isPasswordValid = await bcrypt.compare(password, userExists.password);
        if (!isPasswordValid) {
            console.log('Invalid password for user:', email);
        }

        console.log('Password valid for user:', email);

        res.status(200).json({
            msg: "Login successful",
            token: userExists.generateToken(),
            userId: userExists._id.toString(),
        });

    } catch (error) {
        console.error('Login route error:', error);
        res.status(500).json({ msg: "An unexpected error occurred. Please try again later." });
    }
};

module.exports = { home, register, login };
