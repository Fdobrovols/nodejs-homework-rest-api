
const register = require('./register');
const login = require('./login');
const getCurrent = require('./getCurrent');
const logout = require('./logout');
const updateSubscription = require('./updateSubscription');
const { ctrlWraper } = require('../../helpers');

module.exports = {
    register: ctrlWraper(register),
    login: ctrlWraper(login),
    getCurrent: ctrlWraper(getCurrent),
    logout: ctrlWraper(logout),
    updateSubscription: ctrlWraper(updateSubscription),
};