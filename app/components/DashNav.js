"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function DashNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-teal-400 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-800">
          MyBlog
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div
          className={`flex-col md:flex-row md:flex gap-6 ${
            isOpen ? "flex" : "hidden"
          } md:items-center`}
        >
          <Link href="/" className="text-gray-700 hover:text-black">
            Home
          </Link>

          <Link
            href="/login"
            className="text-gray-100 font-bold hover:text-black"
          >
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
}
