"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ValidationError_1 = require("./ValidationError");
class ClassValidatorError extends ValidationError_1.ValidationError {
    constructor(errors = [], envelopeName) {
        super(undefined !== envelopeName
            ? { [envelopeName]: ClassValidatorError.createValidationErrors(errors) }
            : ClassValidatorError.createValidationErrors(errors));
    }
    static createValidationErrors(cvErrors) {
        let result;
        if (this.isArrayErrors(cvErrors)) {
            result = cvErrors.map(error => this.createValidationErrors(error.children));
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
        let result = true;
        let error;
        const n = errors.length;
        for (let i = 0; result && i < n; i += 1) {
            error = errors[i];
            result = !isNaN(error.property);
        }
        return result;
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