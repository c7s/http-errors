"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = require("./HttpError");
class ValidationError extends HttpError_1.HttpError {
    constructor(validationErrors) {
        super();
        this.validationErrors = validationErrors;
    }
    get code() {
        return 422;
    }
    get errorCode() {
        return 'Validation';
    }
    get data() {
        return Object.assign({}, super.data, { validationErrors: this.validationErrors });
    }
    toString() {
        return 'Validation error: ' + JSON.stringify(this.validationErrors);
    }
}
exports.ValidationError = ValidationError;
//# sourceMappingURL=ValidationError.js.map