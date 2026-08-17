import BlogEditor from "@/components/Blog/BlogEditor";

const CreateBlogPage = () => {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <p className="text-sm font-medium text-indigo-400">
            Admin
          </p>

          <h1 className="mt-2 text-4xl font-bold text-white">
            Create New Blog
          </h1>
        </div>

        <BlogEditor />
      </div>
    </main>
  );
};

export default CreateBlogPage;