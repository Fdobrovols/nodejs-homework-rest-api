const listContacts = require('./listContacts');
const getContactById = require('./getContactById');
const addContact = require('./addContact');
const removeContact = require('./removeContact');
const updateContact = require('./updateContact');
const updateStatusContact = require('./updateStatusContact');
const { ctrlWraper } = require('../helpers');

module.exports = {
    listContacts: ctrlWraper(listContacts),
    getContactById: ctrlWraper(getContactById),
    addContact: ctrlWraper(addContact),
    removeContact: ctrlWraper(removeContact),
    updateContact: ctrlWraper(updateContact),
    updateStatusContact: ctrlWraper(updateStatusContact),
};