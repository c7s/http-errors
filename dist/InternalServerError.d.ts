import { HttpError } from './HttpError';
export declare class InternalServerError extends HttpError {
    get code(): number;
}
