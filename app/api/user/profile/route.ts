import User from "@/app/models/User";
import connectToDb from "@/app/utils/db"
import { handleError } from "@/app/utils/handleError"
import { errorResponse } from "@/app/utils/response";
import getToken from "@/app/utils/token";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
    try {
        await connectToDb()

        const id = getToken(req)

        const user = await User.findById(id).select("-password")
        if (!user) return errorResponse("User not found.")

        return NextResponse.json(
            {
                message: "User data fetched successfully.",
                user
            },
            { status: 200 }
        )
    } catch (error) {
        return handleError(error)
    }
}