import newBlog from "@/models/newBlog";

export default async function BlogDetails({ params }) {
  const blog = await newBlog.findById(params._id).lean();

  if (!blog) {
    return <div className="p-10">Blog not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-10 border-2 mt-20 rounded-2xl bg-teal-200">
      <h1 className="text-3xl font-bold mb-4">{blog.blogName}</h1>
      <p className="text-gray-800 mb-2 font-semibold">Date: {blog.date}</p>
      <p className="text-gray-800 mb-2 font-semibold">Author: {blog.author}</p>
      <p className="text-gray-800 mb-2 font-semibold">Category: {blog.category}</p>
      <p className="text-gray-800 mt-4 font-semibold">{blog.content}</p>
    </div>
  );
}
