const { Contact } = require('../models/contact');
const { httpError } = require('../helpers');

const updateStatusContact = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
    if (!result) {
        throw httpError(404, 'Not found');
    }
    res.json(result);
};

module.exports = updateStatusContact;