import BlogContainer from "./components/blog-container"

const page = () => {
  return (
    <main>
      <h2 className="font-[nunito] text-3xl font-medium">Blog</h2>
      <p className="mt-2 md:text-sm text-xs">
        Read the latest stories, thoughts, and insights — hot off the presses.
      </p>
      <BlogContainer />
    </main>
  )
}

export default page