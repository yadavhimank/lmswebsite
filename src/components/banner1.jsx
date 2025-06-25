"use client";
import { useState } from "react";

export default function Banner1() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const playVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden pt-10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Running gradient waves */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-10 animate-pulse"></div>
          <div className="absolute top-16 left-0 w-full h-24 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-5 animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-8 animate-pulse delay-2000"></div>
        </div>

        {/* Animated moving stripes */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent animate-slide-right"></div>
          <div className="absolute top-40 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent animate-slide-left delay-500"></div>
          <div className="absolute top-60 w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent animate-slide-right delay-1000"></div>
          <div className="absolute bottom-40 w-full h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent animate-slide-left delay-1500"></div>
        </div>

        {/* Concentric circles with rotation - adjusted for mobile */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow">
          <div className="w-60 sm:w-96 h-60 sm:h-96 border border-blue-400 border-opacity-30 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-80 h-48 sm:h-80 border border-blue-400 border-opacity-20 rounded-full animate-spin-reverse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 sm:w-64 h-36 sm:h-64 border border-blue-400 border-opacity-15 rounded-full animate-spin-slow"></div>
        </div>

        {/* Animated floating stars */}
        <div className="absolute top-20 left-1/4 w-1 h-1 bg-white rounded-full animate-twinkle"></div>
        <div className="absolute top-32 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-twinkle delay-500"></div>
        <div className="absolute top-48 left-1/6 w-1 h-1 bg-purple-300 rounded-full animate-twinkle delay-1000"></div>
        <div className="absolute top-64 right-1/4 w-1 h-1 bg-indigo-300 rounded-full animate-twinkle delay-1500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full animate-twinkle delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/6 w-1 h-1 bg-blue-300 rounded-full animate-twinkle delay-2500"></div>
        <div className="absolute top-1/2 left-1/5 w-1 h-1 bg-purple-300 rounded-full animate-twinkle delay-3000"></div>
        <div className="absolute top-1/3 right-1/5 w-1 h-1 bg-indigo-300 rounded-full animate-twinkle delay-3500"></div>
        <div className="absolute bottom-1/2 left-2/3 w-1 h-1 bg-white rounded-full animate-twinkle delay-4000"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-twinkle delay-4500"></div>

        {/* Larger animated stars */}
        <div className="absolute top-1/4 left-1/6">
          <div className="relative">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 bg-white opacity-50 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-4 bg-white opacity-50 animate-pulse"></div>
          </div>
        </div>
        <div className="absolute top-2/3 right-1/4">
          <div className="relative">
            <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 bg-blue-300 opacity-50 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-4 bg-blue-300 opacity-50 animate-pulse delay-1000"></div>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-1/3">
          <div className="relative">
            <div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 bg-purple-300 opacity-50 animate-pulse delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-4 bg-purple-300 opacity-50 animate-pulse delay-2000"></div>
          </div>
        </div>

        {/* Moving particles */}
        <div className="absolute top-1/3 left-0 w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-float-horizontal"></div>
        <div className="absolute top-1/2 left-0 w-1 h-1 bg-purple-400 rounded-full opacity-60 animate-float-horizontal delay-1000"></div>
        <div className="absolute top-2/3 left-0 w-1 h-1 bg-indigo-400 rounded-full opacity-60 animate-float-horizontal delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-28">
        {/* Main content */}
        <div className="text-center mb-8 sm:mb-16 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight px-2">
            This is a LMS website from{" "}
            <span className="text-gray-300">Tailwind</span>
            <br />
            <span className="text-gray-300">and Next.js</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed text-gray-300 px-4">
            Need a learning management system (LMS)? Outseta and Webflow have
            teamed up to offer a super flexible and easily customizable approach
            to monetizing your video content. Clone this site to get started!
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-16 px-4">
            <button className="bg-transparent border border-gray-400 text-white px-5 sm:px-6 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors flex items-center justify-center text-sm sm:text-base">
              Test drive the LMS
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base">
              Get started with Outseta
            </button>
          </div>
        </div>

        {/* LMS Interface Preview */}
        <div className="max-w-6xl mx-auto px-2 sm:px-0">
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-600 border-opacity-30">
            {/* LMS Header */}
            <div className="bg-gray-900 bg-opacity-60 p-3 sm:p-4 border-b border-gray-600 border-opacity-30">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full"></div>
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-300">
                    <span>LMS Dashboard</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <span className="text-xs sm:text-sm text-gray-400 hidden sm:inline">
                    Course Management
                  </span>
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="w-3 sm:w-4 h-3 sm:h-4 bg-gray-600 rounded"></div>
                    <div className="w-3 sm:w-4 h-3 sm:h-4 bg-gray-600 rounded"></div>
                    <div className="w-3 sm:w-4 h-3 sm:h-4 bg-gray-600 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* LMS Content */}
            <div className="flex flex-col lg:flex-row">
              {/* Course Sidebar */}
              <div className="w-full lg:w-64 bg-gray-900 bg-opacity-40 p-3 sm:p-4 border-b lg:border-b-0 lg:border-r border-gray-600 border-opacity-30">
                <div className="space-y-3 sm:space-y-4">
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">
                    Get started
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 sm:space-x-3 p-2 rounded text-xs sm:text-sm bg-blue-600 bg-opacity-30">
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300">Watch walkthrough</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3 p-2 rounded text-xs sm:text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300">Setup LMS</span>
                    </div>
                  </div>

                  <div className="text-xs sm:text-sm text-gray-400 font-medium mt-4 sm:mt-6">
                    Course Features
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 sm:space-x-3 p-2 rounded text-xs sm:text-sm">
                      <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300">Free & Paid Content</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3 p-2 rounded text-xs sm:text-sm">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300">Documentation</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main LMS Content */}
              <div className="flex-1 p-4 sm:p-6">
                <div className="mb-4 sm:mb-6">
                  <div className="bg-blue-900 bg-opacity-50 rounded-lg p-4 sm:p-8 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-500 opacity-20"></div>
                    <div className="relative z-10">
                      <div className="text-4xl sm:text-6xl font-bold mb-2 opacity-50">
                        65
                      </div>
                      <div className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 opacity-50">
                        482
                      </div>
                      <div className="text-xs sm:text-sm opacity-70">
                        Hey there, James
                      </div>
                      <div className="text-xs sm:text-sm opacity-70 mt-1 sm:mt-2">
                        Continue your setup
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-blue-800 bg-opacity-30 p-3 sm:p-4 rounded-lg">
                    <div className="text-xs sm:text-sm text-gray-400 mb-2">
                      Free Content
                    </div>
                    <div className="h-2 sm:h-3 bg-blue-500 rounded mb-2 w-3/4"></div>
                    <div className="text-xs text-gray-500">
                      Teaser lessons available
                    </div>
                  </div>
                  <div className="bg-purple-800 bg-opacity-30 p-3 sm:p-4 rounded-lg">
                    <div className="text-xs sm:text-sm text-gray-400 mb-2">
                      Paid Content
                    </div>
                    <div className="h-2 sm:h-3 bg-purple-500 rounded mb-2 w-2/3"></div>
                    <div className="text-xs text-gray-500">
                      Premium courses locked
                    </div>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-700 bg-opacity-30 rounded">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-3 sm:w-4 h-3 sm:h-4 bg-green-500 rounded flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm">
                        Offer free and paid content
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">→</span>
                  </div>
                  <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-700 bg-opacity-30 rounded">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-3 sm:w-4 h-3 sm:h-4 bg-blue-500 rounded flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm">
                        Fully documented setup
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">→</span>
                  </div>
                  <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-700 bg-opacity-30 rounded">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-3 sm:w-4 h-3 sm:h-4 bg-purple-500 rounded flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm">
                        Clone and go with Webflow
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">↗</span>
                  </div>
                </div>
              </div>

              {/* Course Actions */}
              <div className="w-full lg:w-64 bg-gray-900 bg-opacity-40 p-3 sm:p-4 border-t lg:border-t-0 lg:border-l border-gray-600 border-opacity-30">
                <div className="text-xs sm:text-sm text-gray-400 font-medium mb-3 sm:mb-4">
                  Quick Actions
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <button
                    onClick={playVideo}
                    className="w-full flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-blue-600 bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors"
                  >
                    <div className="w-5 sm:w-6 h-5 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-0 h-0 border-l-2 border-l-white border-t-1 border-t-transparent border-b-1 border-b-transparent ml-0.5"></div>
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-xs text-gray-300 font-medium">
                        Watch walkthrough
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Learn LMS setup
                      </div>
                    </div>
                  </button>
                  <div className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-700 bg-opacity-20 rounded-lg">
                    <div className="w-5 sm:w-6 h-5 sm:h-6 bg-green-500 rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-300">View lessons</div>
                      <div className="text-xs text-gray-500 mt-1">
                        Browse content
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-700 bg-opacity-20 rounded-lg">
                    <div className="w-5 sm:w-6 h-5 sm:h-6 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-300">
                        View documentation
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Setup guide
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes slide-right {
          0% {
            transform: translateX(-100vw);
          }
          100% {
            transform: translateX(100vw);
          }
        }

        @keyframes slide-left {
          0% {
            transform: translateX(100vw);
          }
          100% {
            transform: translateX(-100vw);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        @keyframes float-horizontal {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 100px));
            opacity: 0;
          }
        }

        .animate-slide-right {
          animation: slide-right 8s linear infinite;
        }

        .animate-slide-left {
          animation: slide-left 10s linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        .animate-float-horizontal {
          animation: float-horizontal 12s linear infinite;
        }
      `}</style>
    </div>
  );
}
