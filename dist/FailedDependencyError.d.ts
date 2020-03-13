import { HttpError } from './HttpError';
export declare class FailedDependencyError extends HttpError {
    get code(): number;
}
