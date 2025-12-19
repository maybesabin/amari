
import Blog from "@/app/models/Blog"
import User from "@/app/models/User"
import connectToDb from "@/app/utils/db"
import { handleError } from "@/app/utils/handleError"
import { errorResponse, successResponse } from "@/app/utils/response"
import getToken from "@/app/utils/token"

export const POST = async (req: Request) => {
    try {
        await connectToDb()

        const { title, content, category, featuredImage } = await req.json()

        if (!title || !content || !category) return errorResponse("Required fields cannot be empty.")

        const id = getToken(req);

        const user = await User.findById(id);

        if (!user) return errorResponse("User not found.")

        const blogData: any = {
            title,
            content,
            author: user._id,
            category
        }

        if (featuredImage) {
            blogData.featuredImage = featuredImage
        }

        const newBlog = new Blog(blogData)
        await newBlog.save()
        return successResponse("Blog created successfully.")
    } catch (error) {
        return handleError(error)
    }
}