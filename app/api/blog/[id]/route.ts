import Blog from "@/app/models/Blog";
import User from "@/app/models/User";
import connectToDb from "@/app/utils/db";
import { handleError } from "@/app/utils/handleError";
import { errorResponse, successResponse } from "@/app/utils/response";
import getToken from "@/app/utils/token";

export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
    try {
        await connectToDb()
        const { id } = await params;

        const userId = getToken(req);

        const user = await User.findById(userId);
        if (!user) return errorResponse("User not found.")

        const blog = await Blog.findById(id)
        if (!blog) return errorResponse("Blog not found.")

        if (blog.author.toString() !== user._id.toString()) {
            return errorResponse("You are unauthorized to delete this blog")
        }

        await blog.deleteOne();
        return successResponse("Blog deleted successfully.")
    } catch (error) {
        return handleError(error)
    }
}