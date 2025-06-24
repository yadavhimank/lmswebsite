"use client";
import { useState } from "react";

const CourseCard = ({ course }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200">
      {/* Course Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br opacity-90"
          style={{ background: course.gradient }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white/90 text-6xl font-bold">
              {course.icon}
            </div>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30">
            {course.category}
          </span>
        </div>

        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors"
        >
          <svg
            className={`w-4 h-4 ${
              isLiked ? "text-red-400 fill-current" : "text-white"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        {/* Level Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-black/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
            {course.level}
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        {/* Course Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors">
          {course.title}
        </h3>

        {/* Instructor */}
        <div className="flex items-center mb-4">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold"
            style={{ backgroundColor: course.instructorColor }}
          >
            {course.instructor.charAt(0)}
          </div>
          <span className="ml-2 text-gray-600 text-sm font-medium">
            {course.instructor}
          </span>
        </div>

        {/* Course Stats */}
        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center text-amber-500">
            <svg className="w-4 h-4 mr-1 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-semibold">{course.rating}</span>
          </div>

          <div className="flex items-center text-gray-500">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{course.duration}</span>
          </div>

          <div className="flex items-center text-gray-500">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
              />
            </svg>
            <span>{course.students}</span>
          </div>
        </div>

        {/* Course Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {course.features.map((feature, index) => (
            <span
              key={index}
              className="flex items-center text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded-full"
            >
              <svg
                className="w-3 h-3 mr-1 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {feature}
            </span>
          ))}
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900">
                {course.price}
              </span>
              <span className="text-sm text-gray-500 line-through">
                {course.originalPrice}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-green-600 font-medium">
                Save {course.discount}
              </span>
              <span className="text-gray-500">• EMI from {course.emi}</span>
            </div>
          </div>

          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Course Listing Component
const CourseList = () => {
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development Bootcamp",
      instructor: "Sarah Johnson",
      instructorColor: "#8B5CF6",
      category: "Development",
      level: "Beginner to Expert",
      rating: "4.8",
      duration: "45 hours",
      students: "15,420",
      description:
        "Master modern web development with React, Node.js, and MongoDB. Build real-world projects and deploy to production.",
      features: ["Certificate", "Lifetime Access", "24/7 Support"],
      price: "₹99",
      originalPrice: "₹149",
      discount: "₹50",
      emi: "₹17/month",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      icon: "💻",
    },
    {
      id: 2,
      title: "Advanced UI/UX Design System",
      instructor: "Michael Chen",
      instructorColor: "#F59E0B",
      category: "Design",
      level: "Intermediate to Advanced",
      rating: "4.9",
      duration: "32 hours",
      students: "8,765",
      description:
        "Create stunning user interfaces and experiences. Learn Figma, design systems, and user research methodologies.",
      features: ["Portfolio Projects", "Mentorship", "Job Placement"],
      price: "₹129",
      originalPrice: "₹199",
      discount: "₹70",
      emi: "₹22/month",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      icon: "🎨",
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      instructor: "Emma Rodriguez",
      instructorColor: "#10B981",
      category: "Marketing",
      level: "All Levels",
      rating: "4.7",
      duration: "28 hours",
      students: "12,340",
      description:
        "Complete digital marketing strategy including SEO, social media, content marketing, and paid advertising campaigns.",
      features: ["Live Sessions", "Tools Access", "Case Studies"],
      price: "₹79",
      originalPrice: "₹119",
      discount: "₹40",
      emi: "₹14/month",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      icon: "📊",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transform Your Career
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover world-class courses taught by industry experts. Start
            learning today and unlock your potential.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-2xl text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Browse All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
