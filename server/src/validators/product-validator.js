'use strict'

const Validator = require('./validator');

// Attributes
let validator;

// Constructor
function ProductValidation() {
    validator = new Validator();
    validator.clear();
};

// Methods
ProductValidation.prototype.postValidation = (data) => {
    validator.clear();
    //  Required fields validation
    validator.isRequired(data.name, 'Field Name is required');
    validator.isRequired(data.slug, 'Field Slug is required');
    validator.isRequired(data.description, 'Field Description is required');
    validator.isRequired(data.price, 'Field Price is required');
    validator.isRequired(data.quantity, 'Field Quantity is required');

    //  If any field is not filled
    if (!validator.isValid()) {
        return false;
    }

    // Name validator
    validator.hasMinLen(data.name, 4, 'Field Name must have at least 4 letters');
    validator.hasMaxLen(data.name, 50, 'Field Name can not have more than 50 letters');

    // Slug validator
    validator.contains(data.slug, " ", 'Field Slug can not have any spaces');

    // Description validator
    validator.hasMinLen(data.description, 5, 'Field Description must have at least 5 letters');
    validator.hasMaxLen(data.description, 500, 'Field Name can not have more than 500 letters');

    if (validator.isValid()) {
        return true;
    }

    return false;
}

ProductValidation.prototype.putValidation = (data) => {
    validator.clear();
    // Name validator
    if (data.name) {
        validator.hasMinLen(data.name, 5, 'Field Name must have at least 5 letters');
        validator.hasMaxLen(data.name, 50, 'Field Name can not have more than 50 letters');
    }
    // Price validator
    if (data.price) {
        validator.isRequired(data.price, 'Price should be > 0');
    }

    // Description validator
    if (data.description) {
        validator.hasMinLen(data.description, 10, 'Field Description must have at least 10 letters');
        validator.hasMaxLen(data.description, 400, 'Field Name can not have more than 400 letters');
    }
    // Quantity validator
    if (data.quantity) {
        validator.isRequired(data.quantity, 'Quantity should be > 0');
    }

    // Slug validator
    if (data.slug) {
        validator.contains(data.slug, " ", 'O slug nao deve conter espacos');
    }

    if (validator.isValid()) {
        return true;
    }

    return false;
}

// GetErrors
ProductValidation.prototype.errors = () => {
    return validator.errors();
}

module.exports = ProductValidation;
