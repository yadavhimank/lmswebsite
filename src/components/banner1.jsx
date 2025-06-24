"use client";
import { useState } from "react";

export default function Banner1() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const playVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex justify-center pt-8 pb-16">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-purple-600 text-xl font-bold">W</span>
            </div>
          </div>
        </header>

        {/* Main content */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Sell Online Courses with Outseta
            <br />
            and Webflow
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
            Need a learning management system (LMS)? Outseta and Webflow have
            teamed up to offer a super flexible and easily customizable approach
            to monetizing your video content. Clone this site to get started!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Test drive the LMS
            </button>
            <button className="bg-purple-800 border-2 border-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors">
              Get started with Outseta
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Get started section */}
          <div className="bg-purple-800 bg-opacity-50 rounded-2xl p-8 backdrop-blur-sm border border-purple-500 border-opacity-30">
            <h3 className="text-2xl font-bold mb-4">Get started</h3>
            <p className="text-purple-100 mb-6 leading-relaxed">
              Watch a quick walkthrough of the site and functionality to get an
              idea of what you can do with this cloneable.
            </p>

            {/* Video placeholder */}
            <div className="relative mb-6">
              <div className="bg-purple-900 bg-opacity-50 rounded-lg p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-20"></div>
                <div className="relative z-10">
                  <div className="text-6xl font-bold mb-2 opacity-50">65</div>
                  <div className="text-4xl font-bold mb-4 opacity-50">482</div>
                  <div className="text-sm opacity-70">Hey there, James</div>
                  <div className="text-sm opacity-70 mt-2">
                    Continue your setup
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={playVideo}
              className="flex items-center space-x-3 text-white hover:text-purple-200 transition-colors"
            >
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-4 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
              </div>
              <span className="font-semibold">Watch walkthrough</span>
            </button>
          </div>

          {/* Right side features */}
          <div className="space-y-8">
            {/* Offer free and paid content */}
            <div className="bg-purple-800 bg-opacity-50 rounded-2xl p-8 backdrop-blur-sm border border-purple-500 border-opacity-30">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">
                    Offer free and paid content
                  </h3>
                  <p className="text-purple-100 mb-4 leading-relaxed">
                    Offer teaser content to get people interested, and gate the
                    content that you want them to pay for.
                  </p>
                  <button className="text-white hover:text-purple-200 transition-colors flex items-center space-x-2">
                    <span className="font-semibold">View lessons</span>
                    <span>→</span>
                  </button>
                </div>
                <div className="hidden sm:block w-20 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg opacity-80"></div>
              </div>
            </div>

            {/* Bottom row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Fully documented */}
              <div className="bg-purple-800 bg-opacity-50 rounded-2xl p-6 backdrop-blur-sm border border-purple-500 border-opacity-30">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-4 h-3 bg-white rounded-sm"></div>
                </div>
                <h3 className="text-lg font-bold mb-3">Fully documented</h3>
                <p className="text-purple-100 text-sm mb-4 leading-relaxed">
                  Our documentation will walk you step-by-step through the
                  process of setting up your site.
                </p>
                <button className="text-white hover:text-purple-200 transition-colors flex items-center space-x-2 text-sm">
                  <span className="font-semibold">View documentation</span>
                  <span>→</span>
                </button>
              </div>

              {/* Clone and go */}
              <div className="bg-purple-800 bg-opacity-50 rounded-2xl p-6 backdrop-blur-sm border border-purple-500 border-opacity-30">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
                </div>
                <h3 className="text-lg font-bold mb-3">Clone and go</h3>
                <p className="text-purple-100 text-sm mb-4 leading-relaxed">
                  Grab the Webflow cloneable and get up and running in no time.
                </p>
                <button className="text-white hover:text-purple-200 transition-colors flex items-center space-x-2 text-sm">
                  <span className="font-semibold">Clone in Webflow</span>
                  <span>↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
