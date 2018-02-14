"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpError extends Error {
    get data() {
        return {
            code: this.errorCode,
            message: this.message,
        };
    }
    get errorCode() {
        let code = this.constructor.name;
        if (code.endsWith('Error')) {
            code = code.substr(0, code.length - 5);
        }
        return code;
    }
}
exports.HttpError = HttpError;
//# sourceMappingURL=HttpError.js.map