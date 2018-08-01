import { HttpError } from './HttpError';
export declare class ConflictError extends HttpError {
    readonly code: number;
}
