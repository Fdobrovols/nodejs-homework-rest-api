const { User } = require('../../models/user');
const { httpError } = require('../../helpers');


const updateSubscription = async (req, res) => {
    const { _id } = req.user;
    const { subscription } = req.body;

    if (!['starter', 'pro', 'business'].includes(subscription)) {
        throw httpError(400, 'Invalid subscription value');
    }

    const updatedUser = await User.findByIdAndUpdate(_id, { subscription }, { new: true });

    res.json(updatedUser);
};

module.exports = updateSubscription;