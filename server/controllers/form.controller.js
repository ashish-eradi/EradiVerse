
const Contact = require('../models/contact.model');


const submitContactForm = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        const newContact = new Contact({
            name,
            email,
            subject,
            message
        });

        await newContact.save();

        res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};



module.exports = {
    submitContactForm,
};
