import test from "../assets/test.jpg"
import Image from "next/image";
import { BlogType } from "../types/Blog";

const Blog = ({ blog }: { blog: BlogType }) => {
    return (
        <div className="w-full">
            <Image
                className="rounded-t-xl h-48 w-full object-cover"
                src={blog.featuredImage}
                alt=""
            />

            <main className="border border-t-0 rounded-lg rounded-t-none border-neutral-200 p-4 flex flex-col items-start gap-2">
                <h3 className="font-medium text-lg">
                    The Power Of Saying No: How Boundaries Changed My Life
                </h3>
                <p className="text-neutral-600 text-xs">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, rerum repellat nisi dicta vel cupiditate facere beatae sunt vitae labore, quas, odio temporibus mollitia.
                </p>

                <div className="flex items-center gap-2 mt-2">
                    <h6 className="text-purple-600 font-medium text-[0.7rem] rounded-full px-2 bg-purple-200">
                        Life
                    </h6>
                    <h6 className="text-purple-600 font-medium text-[0.7rem] rounded-full px-2 bg-purple-200">
                        Education
                    </h6>
                </div>

                <div className="flex items-center gap-2 mt-2 text-neutral-600 text-xs">
                    <Image
                        className="size-7 rounded-full object-cover"
                        src={test}
                        alt=""
                    />
                    <h5>Kate</h5>
                    |
                    <h5>25 January 2025</h5>
                </div>
            </main>
        </div>
    )
}

export default Blog;    