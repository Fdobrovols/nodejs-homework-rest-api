const { User } = require('../models/user');
const { httpError, sendMail } = require('../helpers');
require('dotenv').config();

const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
         throw httpError(400, 'missing required field email');
    }
    if (user.verify) {
        throw httpError(400, 'Verification has already been passed');
    }

    const verifyEmail = {
        to: email,
        subject: 'Verify email',
        html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationToken}">Click verify email</a>`,
    };

    await sendMail(verifyEmail);

    res.json({
        message: 'Verification email sent',
    });
};

module.exports = resendVerifyEmail;