export interface ErrorData {
  code: string;
  message?: string;
}

export abstract class HttpError extends Error {
  public abstract get code(): number;

  public get data(): ErrorData {
    return {
      code: this.errorCode,
      message: this.message,
    };
  }

  protected get errorCode(): string {
    let code = this.constructor.name;
    if (code.endsWith('Error')) {
      code = code.substr(0, code.length - 5);
    }
    return code;
  }

}
