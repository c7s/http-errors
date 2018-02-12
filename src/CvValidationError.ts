import { ValidationError as CvError } from 'class-validator';
import { ValidationError } from './ValidationError';

export class CvValidationError extends ValidationError {

  constructor(errors: CvError[] = []) {
    super(CvValidationError.createValidationErrors(errors));
  }

  protected static createValidationErrors(cvErrors: CvError[]): any {
    let result: any;
    if (this.isArrayErrors(cvErrors)) {
      result = cvErrors.map(error => this.createValidationErrors(error.children));
    } else {
      result = {};
      for (const error of cvErrors) {
        const attribute = CvValidationError.extractErrorAttribute(error);
        const messages = CvValidationError.extractErrorMessages(error);
        result[attribute] = messages;
      }
    }
    return result;
  }

  protected static isArrayErrors(errors: CvError[]): boolean {
    let result = true;
    let error;
    const n = errors.length;
    for (let i = 0; result && i < n; i += 1) {
      error = errors[i];
      result = !isNaN(<any>error.property);
    }
    return result;
  }

  protected static extractErrorAttribute(error: CvError): string {
    return error.property;
  }

  protected static extractErrorMessages(error: CvError): any {
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
