import User from "@/app/models/User";
import connectToDb from "@/app/utils/db"
import { handleError } from "@/app/utils/handleError"
import { errorResponse } from "@/app/utils/response";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
    try {
        await connectToDb()

        const authHeader = req.headers.get("authorization");
        const token = authHeader?.split(" ")[1];

        if (!token) return errorResponse("Unauthorized user.")

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
            id: string
        }

        const user = await User.findById(decoded.id).select("-password")
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