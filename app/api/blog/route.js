import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import BlogModel from "@/lib/models/BlogModel";
const fs = require("fs");

const LoadDB = async () => {
  await connectDB();
};

LoadDB();

// GET Blog || Display Blog
export async function GET(request) {
  const blogId = request.nextUrl.searchParams.get("id");
  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog);
  } else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs });
  }
}

// POST || CREATE Blog
export async function POST(request) {
  const formData = await request.formData();
  const timestamp = Date.now();
  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);
  const imgUrl = `/${timestamp}_${image.name}`;

  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imgUrl}`, //error was here instead of image I wrote img which was incorrect
    authorImg: `${formData.get("authorImg")}`,
  };

  await BlogModel.create(blogData);
  console.log("Blog Saved");
  return NextResponse.json({ success: true, msg: "Blog Added" });
}

// DELETE BLOG
export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get("id");
  const blog = await BlogModel.findById(id);
  fs.unlink(`./public/${blog.image}`, () => {});
  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({ msg: "Blog Deleted" });
}
