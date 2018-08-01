"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = require("./HttpError");
class ConflictError extends HttpError_1.HttpError {
    get code() {
        return 409;
    }
}
exports.ConflictError = ConflictError;
//# sourceMappingURL=ConflictError.js.map