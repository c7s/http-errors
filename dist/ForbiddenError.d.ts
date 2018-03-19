import { HttpError } from './HttpError';
export declare class ForbiddenError extends HttpError {
    readonly code: number;
}
