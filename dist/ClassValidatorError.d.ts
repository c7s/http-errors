import { ValidationError as ClassValidatorValidationError } from 'class-validator';
import { ValidationError, ValidationErrorItems } from './ValidationError';
export declare class ClassValidatorError extends ValidationError {
    constructor(errors?: ClassValidatorValidationError[], envelopeName?: string);
    protected static createValidationErrors(cvErrors: ClassValidatorValidationError[]): ValidationErrorItems;
    protected static isArrayErrors(errors: ClassValidatorValidationError[]): boolean;
    protected static extractErrorAttribute(error: ClassValidatorValidationError): string;
    protected static extractErrorMessages(error: ClassValidatorValidationError): any;
}
