"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface DeleteBlogButtonProps {
  id: string;
}

const DeleteBlogButton = ({
  id,
}: DeleteBlogButtonProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmed) return;

    try {
      setLoading(true);

      const response = await fetch(`/api/blog/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to delete blog");
        return;
      }

      router.refresh();
    } catch (error) {
      console.error("DELETE BLOG ERROR:", error);
      alert("Something went wrong while deleting the blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="text-sm font-medium text-red-400 transition hover:text-red-300 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {loading ? "Deleting..." : "Delete"}
    </button>
  );
};

export default DeleteBlogButton;