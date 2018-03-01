export interface ErrorData {
    code: string;
    message?: string;
}
export declare abstract class HttpError extends Error {
    readonly abstract code: number;
    readonly data: ErrorData;
    protected readonly errorCode: string;
}
