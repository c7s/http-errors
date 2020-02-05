import { HttpError } from './HttpError';
export declare class NotFoundError extends HttpError {
    get code(): number;
}
