import { HttpError } from './HttpError';
export declare class NotFoundError extends HttpError {
    readonly code: number;
}
