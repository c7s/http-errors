import { HttpError } from './HttpError';

export class BadRequestError extends HttpError {
  public get code(): number {
    return 400;
  }
}
