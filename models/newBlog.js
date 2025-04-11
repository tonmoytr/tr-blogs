import mongoose from "mongoose";

const blogsSchema = new mongoose.Schema({
  blogName: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: String, required: true },
  category: { type: String, required: true },
  content: { type: String, required: true },
});

const newBlog =
  mongoose.models.newBlog || mongoose.model("newBlog", blogsSchema);

export default newBlog;