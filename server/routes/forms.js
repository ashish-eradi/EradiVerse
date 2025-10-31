
const router = require('express').Router();
const {
    submitContactForm,
} = require('../controllers/form.controller');

router.post('/contact', submitContactForm);

module.exports = router;
