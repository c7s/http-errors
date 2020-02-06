import { HttpError, ErrorData } from './HttpError';
export declare type FieldValidationError = {
    [property: string]: string[] | ValidationErrorItems;
};
export declare type ValidationErrorItems = FieldValidationError | FieldValidationError[];
export interface ValidationErrorData extends ErrorData {
    validationErrors: ValidationErrorItems;
}
export declare class ValidationError extends HttpError {
    protected readonly validationErrors: ValidationErrorItems;
    constructor(validationErrors: ValidationErrorItems);
    get code(): number;
    protected get errorCode(): string;
    get data(): ValidationErrorData;
    toString(): string;
}
