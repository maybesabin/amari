import Image from "next/image";
import { BlogType } from "../types/Blog";
import { formatDate } from "../utils/formatDate";

const Blog = ({ blog }: { blog: BlogType }) => {
    return (
        <div className="w-full">
            <Image
                width={600}
                height={600}
                className="rounded-t-xl h-48 w-full object-cover"
                src={blog.featuredImage}
                alt=""
            />

            <main className="border border-t-0 rounded-lg rounded-t-none border-neutral-200 p-4 flex flex-col items-start gap-2">
                <h3 className="font-medium text-lg">
                    {blog.title}
                </h3>
                <p className="text-neutral-600 text-xs">
                    {blog.content}
                </p>

                <h6 className="text-purple-600 font-medium text-[0.7rem] rounded-full px-2 bg-purple-200">
                    {blog.category}
                </h6>

                <div className="flex items-center gap-2 mt-2 text-neutral-600 text-xs">
                    <Image
                        width={600}
                        height={600}
                        className="size-7 rounded-full object-cover"
                        src={blog.author.profilePicture}
                        alt=""
                    />
                    <h5>@
                        {blog.author.username}
                    </h5>
                    |
                    <h5>{formatDate(blog.createdAt)}</h5>
                </div>
            </main>
        </div>
    )
}

export default Blog;    