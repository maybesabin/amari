import User from "@/app/models/User";
import connectToDb from "@/app/utils/db";
import { handleError } from "@/app/utils/handleError"
import { errorResponse, successResponse } from "@/app/utils/response";
import { getUniqueUsername } from "@/app/utils/username";
import bcrypt from "bcrypt"

export const POST = async (req: Request) => {
    try {
        await connectToDb();

        const { firstName, lastName, username, profilePicture, email, password } = await req.json();

        if (!firstName || !lastName || !email || !password)
            return errorResponse("Required fields cannot be empty.")

        let finalUsername = username?.trim().toLowerCase();

        if (!finalUsername) {
            finalUsername = await getUniqueUsername();
        } else {
            const exists = await User.findOne({ username })
            if (exists) {
                return errorResponse("Username already exists.")
            }
        }

        const checkEmail = await User.findOne({ email })
        if (checkEmail) return errorResponse("User with this email already exists.")

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            email,
            password: hashedPassword,
            profilePicture,
            firstName,
            lastName,
            username: finalUsername
        })

        await newUser.save()
        return successResponse("Account created successfully.")
    } catch (error) {
        return handleError(error)
    }
}