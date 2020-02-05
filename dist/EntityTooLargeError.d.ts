import { HttpError } from './HttpError';
export declare class EntityTooLargeError extends HttpError {
    get code(): number;
}
