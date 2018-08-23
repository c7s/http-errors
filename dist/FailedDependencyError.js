"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = require("./HttpError");
class FailedDependencyError extends HttpError_1.HttpError {
    get code() {
        return 424;
    }
}
exports.FailedDependencyError = FailedDependencyError;
//# sourceMappingURL=FailedDependencyError.js.map