"use client";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600 to-blue-600"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                LMS Website
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Transform your learning journey with our comprehensive platform
              offering curated courses from industry experts. Learn at your own
              pace, achieve your goals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-purple-300">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Paid Courses", href: "/paidcourses" },
                { name: "About Us", href: "/about" },
                { name: "Success Stories", href: "/about" },
                { name: "Help Center", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:bg-purple-400 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-purple-300">Account</h3>
            <ul className="space-y-4">
              {[
                { name: "Sign Up", href: "/signup" },
                { name: "Log In", href: "/login" },
                { name: "My Dashboard", href: "/dashboard" },
                { name: "Profile Settings", href: "/profile" },
                { name: "Billing", href: "/billing" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-400 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-purple-300">
              Get in Touch
            </h3>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-10 h-10 bg-purple-600 bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Mail size={18} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a
                    href="mailto:support@lmswebsite.com"
                    className="hover:text-purple-400 transition-colors"
                  >
                    support@lmswebsite.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-10 h-10 bg-blue-600 bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Phone size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-10 h-10 bg-green-600 bg-opacity-20 rounded-lg flex items-center justify-center">
                  <MapPin size={18} className="text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p>New Delhi, India</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4 text-purple-300">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  {
                    Icon: Facebook,
                    color: "hover:bg-blue-600",
                    label: "Facebook",
                  },
                  {
                    Icon: Instagram,
                    color: "hover:bg-pink-600",
                    label: "Instagram",
                  },
                  {
                    Icon: Twitter,
                    color: "hover:bg-blue-400",
                    label: "Twitter",
                  },
                ].map(({ Icon, color, label }) => (
                  <a
                    key={label}
                    href="#"
                    className={`w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 ${color}`}
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-400 text-sm">
              <p>
                © {new Date().getFullYear()} LMS Website. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link
                  href="/privacy"
                  className="hover:text-purple-400 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-purple-400 transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookies"
                  className="hover:text-purple-400 transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 group"
              aria-label="Back to top"
            >
              <ArrowUp
                size={20}
                className="group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
