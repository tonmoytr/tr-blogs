"use server";

import dbConnect from "@/lib/mongoose";
import newBlog from "@/models/newBlog";
import { redirect } from "next/navigation";

export async function createBlog(formData) {
  await dbConnect();

  const blogName = formData.get("blogName")?.trim();
  const author = formData.get("author")?.trim();
  const category = formData.get("category")?.trim();
  const date = formData.get("date")?.trim();
  const content = formData.get("content")?.trim();

  if (!blogName || !author || !category || !date || !content) {
    return { message: "Please fill all inputs" };
  }

  console.log(blogName);

  // await connectDatabase();

  const allBlogs = new newBlog({
    blogName,
    author,
    category,
    date,
    content,
  });
  await allBlogs.save();
  return redirect("/");
}
