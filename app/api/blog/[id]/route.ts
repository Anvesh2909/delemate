import connectDB from "@/lib/mongodb";
import { Blog } from "@/models/blog";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        await connectDB();
        const blog = await Blog.findById(params.id);

        if (!blog) {
            return NextResponse.json({ error: "Blog not found" }, { status: 404 });
        }

        return NextResponse.json(blog, { status: 200 });
    } catch (error: any) {
        console.error("Error fetching blog:", error);
        return NextResponse.json(
            { error: "Failed to fetch blog", detail: error.message },
            { status: 500 }
        );
    }
}

export async function PUT(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        await connectDB();
        const body = await req.json();
        const updatedBlog = await Blog.findByIdAndUpdate(params.id, body, { new: true });

        if (!updatedBlog) {
            return NextResponse.json({ error: "Blog not found" }, { status: 404 });
        }

        return NextResponse.json(updatedBlog, { status: 200 });
    } catch (error: any) {
        return NextResponse.json(
            { error: "Failed to update blog", detail: error.message },
            { status: 500 }
        );
    }
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        await connectDB();
        const deletedBlog = await Blog.findByIdAndDelete(params.id);

        if (!deletedBlog) {
            return NextResponse.json({ error: "Blog not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Blog deleted successfully" }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json(
            { error: "Failed to delete blog", detail: error.message },
            { status: 500 }
        );
    }
}