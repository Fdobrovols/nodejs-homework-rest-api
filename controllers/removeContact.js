const { Contact } = require('../models/contact');
const { httpError } = require('../helpers');

const removeContact = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndRemove(contactId);
    if (!result) {
        throw httpError(404, 'Not found');
    }
    res.json({
        message: 'Delete success',
    });
};

module.exports = removeContact;