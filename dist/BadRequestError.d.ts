import { HttpError } from './HttpError';
export declare class BadRequestError extends HttpError {
    get code(): number;
}
