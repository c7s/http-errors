export interface ErrorData {
    code: string;
    message?: string;
}
export declare abstract class HttpError extends Error {
    abstract get code(): number;
    get data(): ErrorData;
    protected get errorCode(): string;
}
