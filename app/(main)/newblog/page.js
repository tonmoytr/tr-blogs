"use client";

import React, { useState } from "react";
import SubmitBLog from "@/app/components/SubmitBlog";
import { createBlog } from "@/actions/createBlog";

export default function BlogPostForm() {
  const [loading, setLoading] = useState(false);

  const formAction = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setLoading(true);
    const newPost = await createBlog(formData);

    if (newPost.status) {
      setLoading(false);
    }

    console.log(newPost);
  };

  return (
    <div>
        <div className="text-center">
            <h1 className="text-5xl font-bold mt-8 text-teal-600">Write Your Blog</h1>
        </div>
      <form onSubmit={formAction} className="max-w-xl mx-auto mt-10 space-y-4">
        <input
          type="text"
          name="blogName"
          placeholder="Blog Name"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="author"
          placeholder="Author Name"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="category"
          placeholder="Blog Category"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="date"
          name="date"
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="content"
          placeholder="Write your blog here...."
          required
          rows="10"
          className="w-full p-2 border rounded"
        ></textarea>
        <SubmitBLog loading={loading} />

        {/* {message && <p className="text-sm text-red-500">{}</p>} */}
      </form>
    </div>
  );
}
