export interface ErrorData {
    code: string;
    message?: string;
}
export declare abstract class HttpError extends Error {
    abstract readonly code: number;
    readonly data: ErrorData;
    protected readonly errorCode: string;
}
