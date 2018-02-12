import { HttpError } from './HttpError';

export class NotFoundError extends HttpError {
  public get code(): number {
    return 404;
  }
}
