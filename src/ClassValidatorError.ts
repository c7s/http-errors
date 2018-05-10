import { ValidationError as ClassValidatorValidationError } from 'class-validator';
import { FieldValidationError, ValidationError, ValidationErrorItems } from './ValidationError';

export class ClassValidatorError extends ValidationError {

  constructor(errors: ClassValidatorValidationError[] = [], envelopeName?: string) {
    super(
      undefined !== envelopeName
        ? <FieldValidationError>{ [envelopeName]: ClassValidatorError.createValidationErrors(errors) }
        : ClassValidatorError.createValidationErrors(errors),
    );
  }

  protected static createValidationErrors(cvErrors: ClassValidatorValidationError[]):
    ValidationErrorItems {
    let result: ValidationErrorItems;
    if (this.isArrayErrors(cvErrors)) {
      result = [];
      for (const error of cvErrors) {
        const attribute = Number(ClassValidatorError.extractErrorAttribute(error));
        const messages = <FieldValidationError>this.createValidationErrors(error.children);
        result[attribute] = messages;
      }
    } else {
      result = {};
      for (const error of cvErrors) {
        const attribute = ClassValidatorError.extractErrorAttribute(error);
        const messages = ClassValidatorError.extractErrorMessages(error);
        result[attribute] = messages;
      }
    }
    return result;
  }

  protected static isArrayErrors(errors: ClassValidatorValidationError[]): boolean {
    return errors.every(error => !isNaN(error.property as any));
  }

  protected static extractErrorAttribute(error: ClassValidatorValidationError): string {
    return error.property;
  }

  protected static extractErrorMessages(error: ClassValidatorValidationError): any {
    const constraints = error.constraints;
    let result;
    if (constraints) {
      const keys = Object.keys(constraints);
      result = keys.map(key => constraints[key]);
    } else {
      result = this.createValidationErrors(error.children);
    }

    return result;
  }

}
