const { Contact } = require('../models/contact');

const { httpError, ctrlWraper } = require('../helpers');



const listContacts = async (req, res) => {
    const result = await Contact.find({}, '-createdAt -updatedAt');
    res.json(result);
};

const getContactById = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findById(contactId);
    if (!result) {
        throw httpError(404, 'Not found');
    }
    res.json(result);
};

const addContact = async (req, res) => {
    const result = await Contact.create(req.body);
    res.status(201).json(result);
};

const removeContact = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndRemove(contactId);
    if (!result) {
        throw httpError(404, 'Not found');
    }
    res.json({
        message: 'Delete sucesses',
    });
};

const updateContact = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
    if (!result) {
        throw httpError(404, 'Not found');
    }
    res.json(result);
};
const updateStatusContact = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
    if (!result) {
        throw httpError(404, 'Not found');
    }
    res.json(result);
};
module.exports = {
    listContacts: ctrlWraper(listContacts),
    getContactById: ctrlWraper(getContactById),
    addContact: ctrlWraper(addContact),
    removeContact: ctrlWraper(removeContact),
    updateContact: ctrlWraper(updateContact),
    updateStatusContact: ctrlWraper(updateStatusContact),
};