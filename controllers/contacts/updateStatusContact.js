const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const { User } = require('../../models/user');

const { httpError, ctrlWraper } = require('../../helpers');

const { SECRET_KEY } = process.env;

const register = async (req, res) => {
   
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
        throw httpError(409, 'Email already in use');
    }

   
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ ...req.body, password: hashPassword });

    res.status(201).json({
        email: newUser.email,
        subscription: newUser.subscription,
    });
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw httpError(401, 'Email or password invalid');
    }
    const passwordCompare = bcrypt.compare(password, user.password);
    if (!passwordCompare) {
        throw httpError(401, 'Email or password invalid');
    }
    const payload = {
        id: user._id,
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '23h' });
    res.json({ token });
};

module.exports = {
    register: ctrlWraper(register),
    login: ctrlWraper(login),
};