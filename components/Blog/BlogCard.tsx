import Link from "next/link";

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  coverImage: string | null;
  category: string | null;
  readingTime: number | null;
  publishedAt: Date | string | null;
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <article className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40">
        <div className="h-52 overflow-hidden bg-gray-800">
          {blog.coverImage ? (
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
              <span className="text-lg font-semibold text-white/50">
                Engineering Journal
              </span>
            </div>
          )}
        </div>

        <div className="p-5">
          {blog.category && (
            <span className="text-sm font-medium text-indigo-400">
              {blog.category}
            </span>
          )}

          <h2 className="mt-2 line-clamp-2 text-xl font-bold text-white">
            {blog.title}
          </h2>

          {blog.excerpt && (
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/60">
              {blog.excerpt}
            </p>
          )}

          <div className="mt-5 flex items-center justify-between text-xs text-white/50">
            <span>
              {blog.readingTime
                ? `${blog.readingTime} min read`
                : "Read article"}
            </span>

            <span className="text-indigo-400">
              Read →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;