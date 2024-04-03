const { check }  = require('express-validator');

exports.signUpValidator = [
    check('name', 'Name is required').not().isEmpty(),
    check('email','Email is required').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', 'passord must be greater than 5').isLength({min: 5, max: 14})
]