"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getCourseById } from "@/lib/courses-data";
import {
  CheckCircle,
  Clock,
  Users,
  Star,
  Download,
  Play,
  BookOpen,
  Award,
} from "lucide-react";

export default function EnrollmentSuccessPage({ params }) {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      const { id } = await params;
      const courseData = getCourseById(Number.parseInt(id));
      setCourse(courseData);
    };
    fetchCourse();
  }, [params]);

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CheckCircle className="w-12 h-12 text-green-600" />
          </motion.div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Enrollment Successful! 🎉
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Congratulations! You&apos;ve successfully enrolled in{" "}
            <span className="font-semibold text-purple-600">
              {course.title}
            </span>
            . Your learning journey starts now!
          </p>
        </motion.div>

        {/* Course Summary Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Course Image */}
            <div className="relative h-64 lg:h-auto">
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-90"
                style={{ background: course.gradient }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/90 text-8xl font-bold">
                    {course.icon}
                  </div>
                </div>
              </div>
            </div>

            {/* Course Details */}
            <div className="lg:col-span-2 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {course.title}
              </h2>
              <p className="text-gray-600 mb-4">
                Instructor: {course.instructor}
              </p>

              {/* Course Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <Star className="w-6 h-6 text-amber-500 mx-auto mb-1" />
                  <p className="text-sm font-semibold">{course.rating}</p>
                  <p className="text-xs text-gray-500">Rating</p>
                </div>
                <div className="text-center">
                  <Clock className="w-6 h-6 text-blue-500 mx-auto mb-1" />
                  <p className="text-sm font-semibold">{course.duration}</p>
                  <p className="text-xs text-gray-500">Duration</p>
                </div>
                <div className="text-center">
                  <Users className="w-6 h-6 text-green-500 mx-auto mb-1" />
                  <p className="text-sm font-semibold">{course.students}</p>
                  <p className="text-xs text-gray-500">Students</p>
                </div>
                <div className="text-center">
                  <Award className="w-6 h-6 text-purple-500 mx-auto mb-1" />
                  <p className="text-sm font-semibold">Certificate</p>
                  <p className="text-xs text-gray-500">Included</p>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {course.features.map((feature, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
                  >
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Access Course */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Start Learning
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Access your course content and begin your learning journey
            </p>
            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
              Go to Course
            </button>
          </div>

          {/* Download Resources */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Download Materials
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Get access to course materials, resources, and bonus content
            </p>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Download Now
            </button>
          </div>

          {/* Join Community */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Join Community
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Connect with fellow students and get support from instructors
            </p>
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
              Join Now
            </button>
          </div>
        </motion.div>

        {/* Important Information */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <BookOpen className="w-5 h-5 mr-2 text-purple-600" />
            Important Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">
                What happens next?
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  You&apos;ll receive a confirmation email within 5 minutes
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Course access will be activated immediately
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Welcome email with login details coming soon
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Need help?</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>📧 Email: support@courseplatform.com</li>
                <li>📞 Phone: +1 (555) 123-4567</li>
                <li>💬 Live Chat: Available 24/7</li>
                <li>📚 Help Center: Browse FAQs and guides</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href={`/paidcourses/${course.id}`}
            className="px-8 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors text-center"
          >
            View Course Details
          </Link>
          <Link
            href="/paidcourses"
            className="px-8 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors text-center"
          >
            Browse More Courses
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
