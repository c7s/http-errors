import { HttpError } from './HttpError';

export class InternalServerError extends HttpError {
  public get code(): number {
    return 500;
  }
}
