import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    featuredImage: {
        type: String,
    },
    category: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema)

export default Blog;