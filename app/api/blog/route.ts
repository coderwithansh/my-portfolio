import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentAdmin } from "@/lib/auth";

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      where: {
        status: "PUBLISHED",
      },
      orderBy: {
        publishedAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      blogs,
    });
  } catch (error) {
    console.error("GET BLOGS ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blogs",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: NextRequest) {
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

    if (!title || !slug || !content) {
      return NextResponse.json(
        {
          success: false,
          message: "Title, slug and content are required",
        },
        {
          status: 400,
        }
      );
    }

    const existingBlog = await prisma.blog.findUnique({
      where: {
        slug,
      },
    });

    if (existingBlog) {
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

    const blog = await prisma.blog.create({
      data: {
        title,
        slug,
        excerpt: excerpt || null,
        content,
        coverImage: coverImage || null,
        category: category || null,
        tags: tags || [],
        status: status === "PUBLISHED" ? "PUBLISHED" : "DRAFT",
        readingTime: readingTime || null,
        publishedAt:
          status === "PUBLISHED"
            ? new Date()
            : null,
      },
    });

    return NextResponse.json(
      {
        success: true,
        blog,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("CREATE BLOG ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create blog",
      },
      {
        status: 500,
      }
    );
  }
}