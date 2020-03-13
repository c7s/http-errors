import { HttpError } from './HttpError';
export declare class ConflictError extends HttpError {
    get code(): number;
}
