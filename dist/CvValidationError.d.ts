import { ValidationError as CvError } from 'class-validator';
import { ValidationError } from './ValidationError';
export declare class CvValidationError extends ValidationError {
    constructor(errors?: CvError[]);
    protected static createValidationErrors(cvErrors: CvError[]): any;
    protected static isArrayErrors(errors: CvError[]): boolean;
    protected static extractErrorAttribute(error: CvError): string;
    protected static extractErrorMessages(error: CvError): any;
}
