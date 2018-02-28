import { HttpError } from './HttpError';

export class ForbiddenError extends HttpError {
  public get code(): number {
    return 403;
  }
}
