import { handleError } from "@/app/utils/handleError"

export const POST = async (req: Request) => {
    try {
        const { firstName, lastName, username, profilePicture } = await req.json();

        if (!firstName || !lastName || !username) {

        }

    } catch (error) {
        return handleError(error)
    }
}