const jwt = require('jsonwebtoken');

const authorize = (req, res, next) => {

    try {
        console.log('authorizing...');

        let token = req.header("Authorization");

        if (!token) {
            return res.status(400).json({ error: 'No token provided' });
        };

        console.log(token); 

        token = token.replace("Bearer ", "");

        const payload = jwt.verify(token, process.env.JWT_SECRET);

        if (payload.error) {
            return res.status(400).json({ error: payload.error });
        };


        req.id = payload.id;
        req.username = payload.username;


        next();

    } catch(error) {
        console.log(error.message)
        res.status(400).json({ error: error.message });
    };
};

module.exports = {
    authorize
};