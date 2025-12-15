import User from "@/app/models/User";
import connectToDb from "@/app/utils/db"
import { handleError } from "@/app/utils/handleError";
import { errorResponse, successResponse } from "@/app/utils/response";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        await connectToDb()

        const { email, password } = await req.json();

        if (!email || !password) return errorResponse("Required fields cannot be empty.")

        const user = await User.findOne({ email })
        if (!user) return errorResponse("User with this email doesn't exist.")

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return errorResponse("Credentials do not match.")

        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET!,
            { expiresIn: "3d" }
        )

        return NextResponse.json({
            message: "Logged in successfully",
            token
        }, {
            status: 200
        })
    } catch (error) {
        return handleError(error)
    }
}