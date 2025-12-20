import Blog from "@/app/models/Blog"
import connectToDb from "@/app/utils/db"
import { handleError } from "@/app/utils/handleError"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
    try {
        await connectToDb()
        if (!mongoose.models.User) {
            await import("@/app/models/User")
        }

        const blogs = await Blog.find().populate("author", "-password");

        return NextResponse.json({
            message: "Blogs fetched successfully.",
            blogs
        })
    } catch (error) {
        return handleError(error)
    }
}