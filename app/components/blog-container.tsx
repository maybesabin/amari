"use client"

import { useEffect, useState } from "react"
import Blog from "./blog"
import axios from "axios";

const BlogContainer = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const fetchBlogs = async () => {
            const res = await axios.get("/api/blogs")
            setBlogs(res.data.blogs)
            console.log(res.data)
        }
        fetchBlogs()
    }, [])

    return (
        <div className="mt-10 grid xl:grid-cols-3 lg:grid-cols-2 gap-6">
            {blogs.map((blog, idx) => (
                <Blog
                    blog={blog}
                    key={idx}
                />
            ))}
        </div>
    )
}

export default BlogContainer