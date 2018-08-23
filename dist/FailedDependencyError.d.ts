import { HttpError } from './HttpError';
export declare class FailedDependencyError extends HttpError {
    readonly code: number;
}
