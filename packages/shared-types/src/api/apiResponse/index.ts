import StatusCode from "../statusCode";

/**
 * Represents a standardized structure for API responses in TypeScript. It can either represent a successful response or an error response.
 * In the case of a successful response without data (`TData` is undefined), it includes a `success` field set to true and an optional `statusCode`.
 * If `TData` is provided, indicating expected data in the response, it contains `success`, `data`, and an optional `statusCode`.
 * For error situations, the response matches the APIError type structure, providing detailed error information.
 */
type APIResponse<TData extends unknown = undefined> =
  | (TData extends undefined
      ? { success: true; statusCode?: StatusCode }
      : { success: true; data: TData; statusCode?: StatusCode })
  | APIError;

/**
 * Describes the structure of an error response from the API. This includes a
 * flag to indicate failure (success: false), a human-readable message to explain the error,
 * an optional status code to indicate the type of error based on standard HTTP status codes,
 * and an optional object detailing specific errors (useful for form validation scenarios).
 */
type APIError = {
  success: false;
  message: string;
  statusCode?: StatusCode;
  errors?: {
    [key: string]: string;
  };
};

/**
 * Represents a Promise that resolves to an APIResponse. This is a generic type
 * that supports returning different data types through the API response structure.
 * It is used for asynchronous API calls, providing a clear interface for handling
 * both successful and error responses.
 */
type APIResponsePromise<TData extends unknown = undefined> = Promise<
  APIResponse<TData>
>;

export type { APIError, APIResponse, APIResponsePromise };
