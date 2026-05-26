import { verifyToken } from "@/lib/jwt";
import { ConnectDb } from "@/lib/monogoose";
import Blog from "@/models/blog";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await ConnectDb();
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json({
        success: false,
        message: "unauthorized",
      });
    }

    const decoded = verifyToken(token);

    const { title, description } = await req.json();

    if (!title || !description) {
      return NextResponse.json({
        success: false,
        message: "Tittle and Description required",
      });
    }

    const newBlog = {
      title,
      description,
      author: decoded.userId,
    };

    const blog = await Blog.create(newBlog);
    return NextResponse.json({
      success: true,
      message: "blog created successfull",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "something went wrong",
    });
  }
}
