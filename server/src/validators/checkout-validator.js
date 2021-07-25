'use strict'

const Validator = require('./validator');

// Attributes
let validator;

// Constructor
function CheckoutValidation() {
    validator = new Validator();
    validator.clear();
};

// Methods
CheckoutValidation.prototype.postValidation = (data) => {
    validator.clear();
    // Required fields validation
    validator.isRequired(data.firstName, 'Field First Name is required');
    validator.isRequired(data.lastName, 'Field Last Name is required');
    validator.isRequired(data.email, 'Field Email is required');
    validator.isRequired(data.address, 'Field Address is required');
    validator.isRequired(data.state, 'Field State is required');
    validator.isRequired(data.city, 'Field City is required');
    validator.isRequired(data.cep, 'Field CEP is required');
    // make card validator

    // If any field is not filled
    if (!validator.isValid()) {
        return false;
    }

    // Name field
    validator.hasMinLen(data.firstName, 3, 'Field First Name must have at least 5 letters');
    validator.hasMaxLen(data.firstName, 50, 'Field First Name can not have more than 50 letters');
    validator.hasMinLen(data.lastName, 3, 'Field Last Name must have at least 5 letters');
    validator.hasMaxLen(data.lastName, 50, 'Field Last Name can not have more than 50 letters');

    // Email field
    validator.isEmail(data.email, 'Field Email must be in user@domain.com format');

    // Address field
    validator.hasMinLen(data.address, 10, 'Field Address must have at least 10 letters');
    validator.hasMaxLen(data.address, 100, 'Field Address can not have more than 100 letters');

    // State field
    validator.hasMinLen(data.state, 2, 'Field State must have at least 2 letters');
    validator.hasMaxLen(data.state, 2, 'Field State can not have more than 2 letters');

    // City field
    validator.hasMinLen(data.city, 3, 'Field City must have at least 3 letters');
    validator.hasMaxLen(data.city, 50, 'Field City can not have more than 50 letters');

    // CEP field

    if (validator.isValid()) {
        return true;
    }

    return false;
}

// GetErrors
CheckoutValidation.prototype.errors = () => {
    return validator.errors();
}

module.exports = CheckoutValidation;
