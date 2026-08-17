import Link from "next/link";
import { prisma } from "@/lib/prisma";
import DeleteBlogButton from "@/components/Blog/DeleteBlogButton";
import LogoutButton from "@/components/Admin/LogoutButton";

const AdminBlogPage = async () => {
    const blogs = await prisma.blog.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });

    return (
        <main className="min-h-screen px-6 py-40">
            <div className="mx-auto max-w-6xl">

                {/* Header */}
                <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                    {/* Title */}
                    <div>
                        <p className="text-sm font-medium text-indigo-400">
                            Admin
                        </p>

                        <h1 className="mt-2 text-4xl font-bold text-white">
                            Blog Management
                        </h1>

                        <p className="mt-2 text-sm text-white/40">
                            Create, edit and manage your blog posts.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <Link
                            href="/admin/blog/create"
                            className="rounded-lg bg-indigo-500 px-5 py-3 font-semibold text-white transition hover:bg-indigo-600"
                        >
                            + New Blog
                        </Link>

                        <LogoutButton />
                    </div>
                </div>

                {/* Blog List */}
                <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">

                    {blogs.length === 0 ? (
                        <div className="p-10 text-center text-white/50">
                            No blogs found.
                        </div>
                    ) : (
                        blogs.map((blog) => (
                            <div
                                key={blog.id}
                                className="flex flex-col gap-4 border-b border-white/10 p-5 last:border-b-0 sm:flex-row sm:items-center sm:justify-between"
                            >

                                {/* Blog Info */}
                                <div className="min-w-0">
                                    <h2 className="truncate font-semibold text-white">
                                        {blog.title}
                                    </h2>

                                    <p className="mt-1 text-sm text-white/50">
                                        {blog.category || "Uncategorized"}
                                    </p>

                                    <p className="mt-1 text-xs text-white/30">
                                        {new Date(blog.createdAt).toLocaleDateString()}
                                    </p>
                                </div>

                                {/* Actions */}
                                <div className="flex shrink-0 items-center gap-4">

                                    {/* Status */}
                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                                            blog.status === "PUBLISHED"
                                                ? "bg-green-500/10 text-green-400"
                                                : "bg-yellow-500/10 text-yellow-400"
                                        }`}
                                    >
                                        {blog.status}
                                    </span>

                                    {/* Edit */}
                                    <Link
                                        href={`/admin/blog/edit/${blog.id}`}
                                        className="text-sm font-medium text-indigo-400 transition hover:text-indigo-300"
                                    >
                                        Edit
                                    </Link>

                                    {/* Delete */}
                                    <DeleteBlogButton id={blog.id} />

                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </main>
    );
};

export default AdminBlogPage;