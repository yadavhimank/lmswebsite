"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const CourseCard = ({ course, index }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2 hover:scale-105 ${
        isVisible ? "animate-slideInUp opacity-100" : "opacity-0 translate-y-8"
      }`}
      style={{
        animationDelay: `${index * 0.2}s`,
        animationFillMode: "forwards",
      }}
    >
      {/* Course Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br opacity-90 transition-transform duration-500 hover:scale-110"
          style={{ background: course.gradient }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white/90 text-6xl font-bold animate-float hover:scale-110 hover:rotate-12 transition-all duration-300">
              {course.icon}
            </div>
          </div>
        </div>

        {/* Category Badge */}
        <div
          className={`absolute top-4 left-4 transition-all duration-500 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
          }`}
          style={{ transitionDelay: `${index * 0.2 + 0.3}s` }}
        >
          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30">
            {course.category}
          </span>
        </div>

        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110 active:scale-95 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
          }`}
          style={{ transitionDelay: `${index * 0.2 + 0.4}s` }}
        >
          <svg
            className={`w-4 h-4 transition-all duration-300 ${
              isLiked
                ? "text-red-400 fill-current animate-heartBeat"
                : "text-white"
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
        <div
          className={`absolute bottom-4 left-4 transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: `${index * 0.2 + 0.5}s` }}
        >
          <span className="px-3 py-1 bg-black/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
            {course.level}
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div
        className={`p-6 transition-all duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: `${index * 0.2 + 0.6}s` }}
      >
        {/* Course Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-gray-700 transition-all duration-300 hover:translate-x-1">
          {course.title}
        </h3>

        {/* Instructor */}
        <div className="flex items-center mb-4 hover:translate-x-1 transition-transform duration-300">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold hover:scale-110 hover:rotate-6 transition-all duration-300"
            style={{ backgroundColor: course.instructorColor }}
          >
            {course.instructor.charAt(0)}
          </div>
          <span className="ml-2 text-gray-600 text-sm font-medium">
            {course.instructor}
          </span>
        </div>

        {/* Course Stats */}
        <div
          className={`flex items-center justify-between mb-4 text-sm transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
          style={{ transitionDelay: `${index * 0.2 + 0.7}s` }}
        >
          <div className="flex items-center text-amber-500 hover:scale-105 transition-transform duration-200">
            <svg className="w-4 h-4 mr-1 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-semibold">{course.rating}</span>
          </div>

          <div className="flex items-center text-gray-500 hover:scale-105 transition-transform duration-200">
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

          <div className="flex items-center text-gray-500 hover:scale-105 transition-transform duration-200">
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
        <p
          className={`text-gray-600 text-sm mb-4 line-clamp-2 transition-all duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: `${index * 0.2 + 0.8}s` }}
        >
          {course.description}
        </p>

        {/* Features */}
        <div
          className={`flex flex-wrap gap-2 mb-6 transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
          style={{ transitionDelay: `${index * 0.2 + 0.9}s` }}
        >
          {course.features.map((feature, featureIndex) => (
            <span
              key={featureIndex}
              className="flex items-center text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded-full hover:scale-105 hover:-translate-y-1 transition-all duration-300 animate-fadeInScale"
              style={{
                animationDelay: `${index * 0.2 + 1 + featureIndex * 0.1}s`,
                animationFillMode: "both",
              }}
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
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: `${index * 0.2 + 1.2}s` }}
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900 hover:scale-105 transition-transform duration-200">
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

          <button
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl active:scale-95 relative overflow-hidden group"
            onClick={(e) => {
              // Ripple effect
              const rect = e.target.getBoundingClientRect();
              const ripple = document.createElement("div");
              const size = Math.max(rect.width, rect.height);
              const x = e.clientX - rect.left - size / 2;
              const y = e.clientY - rect.top - size / 2;

              ripple.style.width = ripple.style.height = size + "px";
              ripple.style.left = x + "px";
              ripple.style.top = y + "px";
              ripple.classList.add(
                "absolute",
                "bg-white/30",
                "rounded-full",
                "animate-ping"
              );

              e.target.appendChild(ripple);
              setTimeout(() => ripple.remove(), 600);
            }}
          >
            <span className="relative z-10">Enroll Now</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes heartBeat {
          0% {
            transform: scale(1);
          }
          14% {
            transform: scale(1.3);
          }
          28% {
            transform: scale(1);
          }
          42% {
            transform: scale(1.3);
          }
          70% {
            transform: scale(1);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-heartBeat {
          animation: heartBeat 1.3s ease-in-out;
        }

        .animate-fadeInScale {
          animation: fadeInScale 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-gradientShift {
          background-size: 400% 400%;
          animation: gradientShift 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

// Main Course Listing Component
const CourseList = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setHeaderVisible(true);
    const ctaTimer = setTimeout(() => setCtaVisible(true), 1500);
    return () => clearTimeout(ctaTimer);
  }, []);

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
        <div
          className={`text-center mb-12 transition-all duration-800 ${
            headerVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-8 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradientShift">
            Transform Your Career
          </h1>
          <p
            className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-800 delay-300 ${
              headerVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Discover world-class courses taught by industry experts. Start
            learning today and unlock your potential.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center mt-16 transition-all duration-800 ${
            ctaVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <button
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl active:scale-95 relative overflow-hidden"
            onClick={(e) => {
              // Enhanced ripple effect
              const rect = e.target.getBoundingClientRect();
              const ripple = document.createElement("div");
              const size = Math.max(rect.width, rect.height) * 2;
              const x = e.clientX - rect.left - size / 2;
              const y = e.clientY - rect.top - size / 2;

              ripple.style.width = ripple.style.height = size + "px";
              ripple.style.left = x + "px";
              ripple.style.top = y + "px";
              ripple.classList.add("absolute", "bg-white/20", "rounded-full");
              ripple.style.transform = "scale(0)";
              ripple.style.transition = "transform 0.6s ease-out";

              e.target.appendChild(ripple);
              setTimeout(() => {
                ripple.style.transform = "scale(1)";
              }, 0);
              setTimeout(() => ripple.remove(), 600);
              router.push("/paidcourses");
            }}
          >
            Browse All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
