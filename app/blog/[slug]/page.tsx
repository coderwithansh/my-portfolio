import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const BlogDetailsPage = async ({
  params,
}: BlogPageProps) => {

  const { slug } = await params;

  const blog = await prisma.blog.findUnique({
    where: {
      slug,
    },
  });

  if (!blog || blog.status !== "PUBLISHED") {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 py-20">

      <article className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-10">

          {blog.category && (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
              {blog.category}
            </p>
          )}

          <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl">
            {blog.title}
          </h1>

          {blog.excerpt && (
            <p className="mt-6 text-lg leading-8 text-white/60">
              {blog.excerpt}
            </p>
          )}

          <div className="mt-6 flex gap-5 text-sm text-white/40">

            {blog.readingTime && (
              <span>
                {blog.readingTime} min read
              </span>
            )}

            {blog.publishedAt && (
              <span>
                {new Date(blog.publishedAt).toLocaleDateString(
                  "en-IN",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }
                )}
              </span>
            )}

          </div>
        </div>

        {/* Cover */}
        {blog.coverImage && (
          <div className="mb-10 overflow-hidden rounded-2xl">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="whitespace-pre-wrap text-lg leading-9 text-white/80">
          {blog.content}
        </div>

        {/* Tags */}
        {blog.tags.length > 0 && (
          <div className="mt-12 flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/60"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

      </article>

    </main>
  );
};

export default BlogDetailsPage;