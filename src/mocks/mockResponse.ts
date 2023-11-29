// Importing the Response type from the 'express' module
import { Response } from 'express'

// Defining a custom type MockResponse that extends the Response type
export type MockResponse<TResult> = Response & {
    state: {
        status?: number;
        json?: TResult | unknown;
    }
}

/**
 * Creates a mock response object.
 * @template TResult The type of the response JSON.
 * @returns The mock response object.
 */
export function makeMockResponse<TResult> () {
    // Creating an empty response object with the custom MockResponse type
    const response = {
        state: {
        }
    } as MockResponse<TResult>

    // Adding a status method to the response object
    response.status = (status: number) => {
        // Setting the status value in the response state
        response.state.status = status
        return response
    }

    // Adding a json method to the response object
    response.json = (json: TResult) => {
        // Setting the JSON value in the response state
        response.state.json = json
        return response
    }

    // Returning the mock response object
    return response
}