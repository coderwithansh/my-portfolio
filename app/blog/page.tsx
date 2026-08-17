import BlogCard from "@/components/Blog/BlogCard";
import DeleteBlogButton from "@/components/Blog/DeleteBlogButton";
import { prisma } from "@/lib/prisma";

const BlogPage = async () => {
  const blogs = await prisma.blog.findMany({
    where: {
      status: "PUBLISHED",
    },
    orderBy: {
      publishedAt: "desc",
    },
  });

  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Engineering Journal
          </p>

          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            My Latest Blogs
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            I write about programming, development, projects,
            technologies and things I learn while building.
          </p>
        </div>

        {blogs.length === 0 ? (
          <div className="rounded-xl border border-white/10 bg-white/5 p-12 text-center">
            <h2 className="text-xl font-semibold text-white">
              No blogs published yet
            </h2>

            <p className="mt-2 text-white/50">
              New articles are coming soon.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default BlogPage;