import Blog from "./blog"

const BlogContainer = () => {
    return (
        <div className="mt-10 grid xl:grid-cols-3 lg:grid-cols-2 gap-6">
            {Array.from({ length: 6 }).map((item, idx) => (
                <Blog
                    key={idx}
                />
            ))}
        </div>
    )
}

export default BlogContainer