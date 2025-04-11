"use client";

import React from "react";

export default function SubmitBLog({ loading }) {
  return (
    <div>
      <button
        type="submit"
        className={`flex items-center justify-center gap-2 px-4 py-2 rounded text-white transition-colors bg-teal-500 hover:bg-blue-700"
        } disabled:opacity-50`}
      >
        {loading ? "Posting....." : "Post Blog"}
      </button>
    </div>
  );
}
