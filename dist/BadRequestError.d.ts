import { HttpError } from './HttpError';
export declare class BadRequestError extends HttpError {
    readonly code: number;
}
