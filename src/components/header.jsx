"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800"
      }`}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center py-4">
          {/* Left: Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-400 to-indigo-500 p-3 rounded-full shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <div className="w-4 h-4 bg-white rounded-full transform rotate-45 shadow-inner" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full animate-ping opacity-20"></div>
            </div>
            <div className="font-bold text-xl bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent transition-all duration-300 hover:scale-105">
              LMS
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { name: "Home", href: "/", active: true },
              { name: "Paid Courses", href: "/paidcourses" },
              { name: "About Us", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 transform ${
                  scrolled
                    ? item.active
                      ? "text-purple-600 bg-purple-50"
                      : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                    : item.active
                    ? "text-white bg-white/20 backdrop-blur-sm"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                } animate-fadeInUp`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                {item.active && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 opacity-20 animate-pulse"></div>
                )}
              </Link>
            ))}

            {/* Cart Icon */}
            <Link
              href="/cart"
              className={`ml-4 p-3 rounded-full transition-all duration-300 hover:scale-110 transform hover:shadow-lg ${
                scrolled
                  ? "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              <ShoppingCart size={20} />
            </Link>

            <Link
              href="/auth"
              className={`ml-4 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 transform hover:shadow-lg ${
                scrolled
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700"
                  : "bg-white text-purple-900 hover:bg-purple-50"
              } animate-bounceIn`}
            >
              Login
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                scrolled
                  ? "text-gray-700 hover:bg-purple-50"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  }`}
                />
                <X
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`flex flex-col space-y-2 pb-4 ${
              scrolled ? "bg-white/80" : "bg-white/10"
            } backdrop-blur-sm rounded-2xl mt-2 p-4`}
          >
            {[
              { name: "Home", href: "/" },
              { name: "Paid Courses", href: "/paidcourses" },
              { name: "About Us", href: "/about" },
              { name: "Contact", href: "/contact" },
              { name: "Cart", href: "/cart" },
            ].map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 transform ${
                  scrolled
                    ? "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    : "text-white/90 hover:bg-white/20 hover:text-white"
                } animate-slideInLeft`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/auth"
              className={`mt-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 transform text-center ${
                scrolled
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700"
                  : "bg-white text-purple-900 hover:bg-purple-50"
              } animate-slideInLeft`}
              style={{ animationDelay: "500ms" }}
              onClick={() => setIsOpen(false)}
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-bounceIn {
          animation: bounceIn 0.8s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.5s ease-out forwards;
        }
      `}</style>
    </header>
  );
}
