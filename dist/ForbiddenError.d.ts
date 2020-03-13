import { HttpError } from './HttpError';
export declare class ForbiddenError extends HttpError {
    get code(): number;
}
