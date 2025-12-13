import { errorResponse } from "./response"

export const handleError = (error: unknown, fallbackMessage = "Unexpected server error") => {
    if (error instanceof Error) {
        console.log(error.message)
        return errorResponse(error.message)
    } else {
        console.log("Unknown error", error)
        return errorResponse(fallbackMessage)
    }
}