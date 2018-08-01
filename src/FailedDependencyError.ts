import { HttpError } from './HttpError';

export class FailedDependencyError extends HttpError {
  public get code() {
    return 424;
  }
}
