import { HttpError } from './HttpError';

export class EntityTooLargeError extends HttpError {
  public get code(): number {
    return 413;
  }
}
