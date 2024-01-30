const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateToken = (newUser) => {
    const payload = { id: newUser._id, username: newUser.username };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 500 });
};

async function signup(req, res) {
    console.log('SIGNUP /auth/signup');
    try {

        const foundUser = await User.findOne({ username: req.body.username });

        if (foundUser) {
            return res.status(400).json({ error: 'User already exists' });
        }


        const encryptedPassword = await bcrypt.hash(req.body.password, 10);

        console.log(encryptedPassword);


        console.log({ ...req.body, password: encryptedPassword });

        const newUser = await User.create({ ...req.body, password: encryptedPassword });

        console.log(newUser);

            
        const token = generateToken(newUser);

        console.log(token);

        res.status(200).json({ token });

    } catch(error) {
        console.log(error.message)
        res.status(400).json({ error: error.message });
    };

};

async function login(req, res) {
    console.log('LOGIN /auth/login');
    try {

        const foundUser = await User.findOne({ username: req.body.username });

        if (!foundUser) {
            return res.status(400).json({ error: 'No such user exists' });
        };


        const validPassword = await bcrypt.compare(req.body.password, foundUser.password);

        if (!validPassword) {
            return res.status(400).json({ error: 'Invalid credentials' });
        };


        const token = generateToken(foundUser);
        
        res.status(200).json({ token });

    } catch(error) {
        console.log(error.message)
        res.status(400).json({ error: error.message });
    };
};

module.exports = {
    signup,
    login
};