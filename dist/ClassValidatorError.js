"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ValidationError_1 = require("./ValidationError");
class ClassValidatorError extends ValidationError_1.ValidationError {
    constructor(errors = [], envelopeName) {
        super(undefined !== envelopeName
            ? {
                [envelopeName]: ClassValidatorError.createValidationErrors(errors),
            }
            : ClassValidatorError.createValidationErrors(errors));
    }
    static createValidationErrors(cvErrors) {
        let result;
        if (this.isArrayErrors(cvErrors)) {
            result = [];
            for (const error of cvErrors) {
                const attribute = Number(ClassValidatorError.extractErrorAttribute(error));
                const messages = this.createValidationErrors(error.children);
                result[attribute] = messages;
            }
        }
        else {
            result = {};
            for (const error of cvErrors) {
                const attribute = ClassValidatorError.extractErrorAttribute(error);
                const messages = ClassValidatorError.extractErrorMessages(error);
                result[attribute] = messages;
            }
        }
        return result;
    }
    static isArrayErrors(errors) {
        return errors.every(error => !isNaN(error.property));
    }
    static extractErrorAttribute(error) {
        return error.property;
    }
    static extractErrorMessages(error) {
        const constraints = error.constraints;
        let result;
        if (constraints) {
            const keys = Object.keys(constraints);
            result = keys.map(key => constraints[key]);
        }
        else {
            result = this.createValidationErrors(error.children);
        }
        return result;
    }
}
exports.ClassValidatorError = ClassValidatorError;
//# sourceMappingURL=ClassValidatorError.js.map