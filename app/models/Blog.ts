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

const Blog = mongoose.model("Blog", BlogSchema)

if (mongoose.models.Blog) {
    delete mongoose.models.Blog
}

export default Blog;