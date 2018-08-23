import { HttpError } from './HttpError';

export class ConflictError extends HttpError {
  public get code(): number {
    return 409;
  }
}
