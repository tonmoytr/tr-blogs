import newBlog from "@/models/newBlog";
import Link from "next/link";
import React from "react";

export default async function page() {
  const allBlogs = await newBlog.find({}).lean();
  console.log("all blogs", allBlogs);
  return (
    <div className="mt-20 max-w-7xl mx-auto grid grid-cols-3 gap-3">
      {allBlogs.map((blog) => (
        <div key={blog._id} className="mb-4 border p-5 bg-teal-300 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-600">
            {blog.blogName}
          </h2>
          <p>Category: {blog.category}</p>
          <p className="text-gray-600">{blog.content}</p>
          <br />
          <Link className="border p-3 rounded bg-gray-50" href={`/blogs/${blog._id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}
