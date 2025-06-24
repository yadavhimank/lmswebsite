"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left: Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-purple-200 p-2 rounded-full">
              <div className="w-3 h-3 bg-purple-600 rounded-full transform rotate-45" />
            </div>
            <Link href="/" className="font-semibold text-lg">
              LMS Website.
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-black">
              Home
            </Link>
            <Link
              href="/paidcourses"
              className="text-gray-700 hover:text-black"
            >
              Paid Courses
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-black">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-black">
              Contact
            </Link>
            <Link
              href="/login"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition"
            >
              Sign up
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 pb-4">
            <Link href="/" className="text-gray-700 hover:text-black">
              Home
            </Link>
            <Link
              href="/paidcourses"
              className="text-gray-700 hover:text-black"
            >
              Paid Courses
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-black">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-black">
              Contact
            </Link>
            <Link
              href="/login"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition text-center"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
