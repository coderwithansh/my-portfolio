import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentAdmin } from "@/lib/auth";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

// GET — Public
export async function GET(
  request: NextRequest,
  { params }: Params
) {
  try {
    const { id } = await params;

    const blog = await prisma.blog.findUnique({
      where: {
        id,
      },
    });

    if (!blog) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      blog,
    });
  } catch (error) {
    console.error("GET BLOG ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blog",
      },
      {
        status: 500,
      }
    );
  }
}

// PUT — Admin Only
export async function PUT(
  request: NextRequest,
  { params }: Params
) {
  // 🔒 Admin authentication
  const admin = await getCurrentAdmin();

  if (!admin) {
    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  try {
    const { id } = await params;

    const body = await request.json();

    const {
      title,
      slug,
      excerpt,
      content,
      coverImage,
      category,
      tags,
      status,
      readingTime,
    } = body;

    // Check if blog exists
    const existingBlog = await prisma.blog.findUnique({
      where: {
        id,
      },
    });

    if (!existingBlog) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog not found",
        },
        {
          status: 404,
        }
      );
    }

    // Check duplicate slug
    if (slug && slug !== existingBlog.slug) {
      const slugExists = await prisma.blog.findUnique({
        where: {
          slug,
        },
      });

      if (slugExists) {
        return NextResponse.json(
          {
            success: false,
            message: "Slug already exists",
          },
          {
            status: 409,
          }
        );
      }
    }

    const blog = await prisma.blog.update({
      where: {
        id,
      },
      data: {
        title,
        slug,
        excerpt: excerpt || null,
        content,
        coverImage: coverImage || null,
        category: category || null,
        tags: tags || [],
        status:
          status === "PUBLISHED"
            ? "PUBLISHED"
            : "DRAFT",
        readingTime: readingTime || null,

        publishedAt:
          status === "PUBLISHED"
            ? existingBlog.status === "PUBLISHED"
              ? existingBlog.publishedAt
              : new Date()
            : null,
      },
    });

    return NextResponse.json({
      success: true,
      blog,
    });
  } catch (error) {
    console.error("UPDATE BLOG ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update blog",
      },
      {
        status: 500,
      }
    );
  }
}

// DELETE — Admin Only
export async function DELETE(
  request: NextRequest,
  { params }: Params
) {
  // 🔒 Admin authentication
  const admin = await getCurrentAdmin();

  if (!admin) {
    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  try {
    const { id } = await params;

    // Check if blog exists
    const existingBlog = await prisma.blog.findUnique({
      where: {
        id,
      },
    });

    if (!existingBlog) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog not found",
        },
        {
          status: 404,
        }
      );
    }

    await prisma.blog.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error("DELETE BLOG ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete blog",
      },
      {
        status: 500,
      }
    );
  }
}