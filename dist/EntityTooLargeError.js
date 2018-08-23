"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = require("./HttpError");
class EntityTooLargeError extends HttpError_1.HttpError {
    get code() {
        return 413;
    }
}
exports.EntityTooLargeError = EntityTooLargeError;
//# sourceMappingURL=EntityTooLargeError.js.map