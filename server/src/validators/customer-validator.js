'use strict'

const Validator = require('./validator');

// Attributes
let validator;

// Constructor
function CustomerValidation() {
    validator = new Validator();
    validator.clear();
};

// Methods
CustomerValidation.prototype.postValidation = (data) => {
    validator.clear();
    // Required fields validation
    validator.isRequired(data.name, 'Field Name is required');
    validator.isRequired(data.email, 'Field Email is required');
    validator.isRequired(data.password, 'Field Password is required');

    // If any field is not filled
    if (!validator.isValid()) {
        return false;
    }

    // Name field
    validator.hasMinLen(data.name, 3, 'Field Name must have at least 5 letters');
    validator.hasMaxLen(data.name, 50, 'Field Name can not have more than 50 letters');

    // Email field
    validator.isEmail(data.email, 'Field Email must be in user@domain.com format');

    // Password validator
    // validator.validPassword(data.password, 'Senha deve possuir de 8 a 32 caracteres, um número e uma letra e um caracter especiaal(!,@,#,etc.)');

    if (validator.isValid()) {
        return true;
    }

    return false;
}

CustomerValidation.prototype.putValidation = (data) => {
    validator.clear();

    // Name field
    if (data.name) {
        validator.hasMinLen(data.name, 3, 'Field Name must have at least 5 letters');
        validator.hasMaxLen(data.name, 50, 'Field Name can not have more than 50 letters');
    }

    // Email field
    if (data.email) {
        validator.isEmail(data.email, 'Field Email must be in user@domain.com format');
    }

    // Password field
    // if (data.password) {
    //     validator.validPassword(data.password, 'Senha deve possuir de 8 a 32 caracteres, um número e uma letra e um caracter especiaal(!,@,#,etc.)');
    // }

    if (validator.isValid()) {
        return true;
    }

    return false;
}

// GetErrors
CustomerValidation.prototype.errors = () => {
    return validator.errors();
}

module.exports = CustomerValidation;
