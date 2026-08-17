import { notFound } from "next/navigation";
import BlogEditor from "@/components/Blog/BlogEditor";
import { prisma } from "@/lib/prisma";

interface EditBlogPageProps {
  params: Promise<{
    id: string;
  }>;
}

const EditBlogPage = async ({
  params,
}: EditBlogPageProps) => {
  const { id } = await params;

  const blog = await prisma.blog.findUnique({
    where: {
      id,
    },
  });

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <p className="text-sm font-medium text-indigo-400">
            Admin
          </p>

          <h1 className="mt-2 text-4xl font-bold text-white">
            Edit Blog
          </h1>
        </div>

        <BlogEditor blog={blog} />
      </div>
    </main>
  );
};

export default EditBlogPage;