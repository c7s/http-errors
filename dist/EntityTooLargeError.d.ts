import { HttpError } from './HttpError';
export declare class EntityTooLargeError extends HttpError {
    readonly code: number;
}
