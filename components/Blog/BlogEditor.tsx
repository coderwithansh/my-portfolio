"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface BlogEditorProps {
  blog?: {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string;
    coverImage: string | null;
    category: string | null;
    tags: string[];
    status: "DRAFT" | "PUBLISHED";
    readingTime: number | null;
  };
}

const BlogEditor = ({ blog }: BlogEditorProps) => {
  const router = useRouter();

  const [title, setTitle] = useState(blog?.title || "");
  const [slug, setSlug] = useState(blog?.slug || "");
  const [excerpt, setExcerpt] = useState(
    blog?.excerpt || ""
  );
  const [content, setContent] = useState(
    blog?.content || ""
  );
  const [coverImage, setCoverImage] = useState(
    blog?.coverImage || ""
  );
  const [category, setCategory] = useState(
    blog?.category || ""
  );
  const [tags, setTags] = useState(
    blog?.tags.join(", ") || ""
  );
  const [readingTime, setReadingTime] = useState(
    blog?.readingTime?.toString() || ""
  );

  const [loading, setLoading] = useState(false);

  const generateSlug = (value: string) => {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);

    if (!blog) {
      setSlug(generateSlug(value));
    }
  };

  const handleSubmit = async (
    status: "DRAFT" | "PUBLISHED"
  ) => {
    try {
      setLoading(true);

      const payload = {
        title,
        slug,
        excerpt,
        content,
        coverImage,
        category,
        tags: tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        readingTime: readingTime
          ? Number(readingTime)
          : null,
        status,
      };

      const url = blog
        ? `/api/blog/${blog.id}`
        : "/api/blog";

      const response = await fetch(url, {
        method: blog ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Something went wrong");
        return;
      }

      router.push("/admin/blog");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="text-sm text-white/70">
          Title
        </label>

        <input
          value={title}
          onChange={(e) =>
            handleTitleChange(e.target.value)
          }
          placeholder="Enter blog title"
          className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-indigo-400"
        />
      </div>

      <div>
        <label className="text-sm text-white/70">
          Slug
        </label>

        <input
          value={slug}
          onChange={(e) =>
            setSlug(e.target.value)
          }
          className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-indigo-400"
        />
      </div>

      <div>
        <label className="text-sm text-white/70">
          Excerpt
        </label>

        <textarea
          value={excerpt}
          onChange={(e) =>
            setExcerpt(e.target.value)
          }
          rows={3}
          placeholder="Short description..."
          className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-indigo-400"
        />
      </div>

      <div>
        <label className="text-sm text-white/70">
          Content
        </label>

        <textarea
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
          rows={15}
          placeholder="Write your blog..."
          className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 font-mono text-white outline-none focus:border-indigo-400"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="text-sm text-white/70">
            Category
          </label>

          <input
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            placeholder="React"
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-indigo-400"
          />
        </div>

        <div>
          <label className="text-sm text-white/70">
            Reading Time
          </label>

          <input
            type="number"
            value={readingTime}
            onChange={(e) =>
              setReadingTime(e.target.value)
            }
            placeholder="5"
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-indigo-400"
          />
        </div>
      </div>

      <div>
        <label className="text-sm text-white/70">
          Tags
        </label>

        <input
          value={tags}
          onChange={(e) =>
            setTags(e.target.value)
          }
          placeholder="React, Next.js, JavaScript"
          className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-indigo-400"
        />
      </div>

      <div>
        <label className="text-sm text-white/70">
          Cover Image URL
        </label>

        <input
          value={coverImage}
          onChange={(e) =>
            setCoverImage(e.target.value)
          }
          placeholder="/images/blog/react.png"
          className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-indigo-400"
        />
      </div>

      <div className="flex flex-wrap gap-4 pt-4">
        <button
          disabled={loading}
          onClick={() =>
            handleSubmit("DRAFT")
          }
          className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10 disabled:opacity-50"
        >
          Save Draft
        </button>

        <button
          disabled={loading}
          onClick={() =>
            handleSubmit("PUBLISHED")
          }
          className="rounded-lg bg-indigo-500 px-6 py-3 font-semibold text-white hover:bg-indigo-600 disabled:opacity-50"
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default BlogEditor;