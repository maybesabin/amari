import Blog from "@/app/models/Blog"
import connectToDb from "@/app/utils/db"
import { handleError } from "@/app/utils/handleError"
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
    try {
        await connectToDb()

        const blogs = await Blog.find().populate("author", "-password");

        return NextResponse.json({
            message: "Blogs fetched successfully.",
            blogs
        })
    } catch (error) {
        return handleError(error)
    }
}