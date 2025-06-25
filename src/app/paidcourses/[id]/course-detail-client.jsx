"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowLeft,
  Clock,
  Users,
  Star,
  CheckCircle,
  Play,
  Download,
  Share2,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export default function CourseDetailClient({ course }) {
  const [activeTab, setActiveTab] = useState("curriculum");
  const [isWishlisted, setIsWishlisted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div
        className="bg-white shadow-sm border-b"
        variants={itemVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <motion.div whileHover={{ x: -5 }} transition={{ duration: 0.2 }}>
            <Link
              href="/paidcourses"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Courses
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Hero */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Course Image */}
              <div className="relative h-64 md:h-80">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br opacity-90"
                  style={{ background: course.gradient }}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-white/90 text-8xl font-bold"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      {course.icon}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 hover:bg-white/30 transition-colors group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                  </motion.button>
                </div>

                {/* Category Badge */}
                <motion.div
                  className="absolute top-6 left-6"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Badge
                    variant="secondary"
                    className="bg-white/20 backdrop-blur-sm text-white border-white/30"
                  >
                    {course.category}
                  </Badge>
                </motion.div>

                {/* Level Badge */}
                <motion.div
                  className="absolute top-6 right-6"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Badge
                    variant="secondary"
                    className="bg-black/20 backdrop-blur-sm text-white border-white/30"
                  >
                    {course.level}
                  </Badge>
                </motion.div>
              </div>

              {/* Course Info */}
              <motion.div className="p-6 md:p-8" variants={itemVariants}>
                <motion.h1
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  {course.title}
                </motion.h1>

                <motion.p
                  className="text-lg text-gray-600 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  {course.longDescription}
                </motion.p>

                {/* Course Stats */}
                <motion.div
                  className="flex flex-wrap items-center gap-6 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <motion.div
                    className="flex items-center text-amber-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Star className="w-5 h-5 mr-1 fill-current" />
                    <span className="font-semibold mr-1">{course.rating}</span>
                    <span className="text-gray-500">
                      ({course.totalRatings} ratings)
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-center text-gray-600"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{course.duration}</span>
                  </motion.div>

                  <motion.div
                    className="flex items-center text-gray-600"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Users className="w-5 h-5 mr-2" />
                    <span>{course.students} students</span>
                  </motion.div>
                </motion.div>

                {/* Instructor */}
                <motion.div
                  className="flex items-center mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-semibold mr-4"
                    style={{ backgroundColor: course.instructorColor }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {course.instructor.charAt(0)}
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {course.instructor}
                    </h3>
                    <p className="text-sm text-gray-600">Course Instructor</p>
                  </div>
                </motion.div>

                {/* Features */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  {course.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.1 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 border-green-200"
                      >
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {feature}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Course Content Tabs */}
            <motion.div variants={itemVariants}>
              <Card>
                <Tabs
                  value={activeTab}
                  onValueChange={setActiveTab}
                  className="w-full"
                >
                  <CardHeader>
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                      <TabsTrigger value="instructor">Instructor</TabsTrigger>
                      <TabsTrigger value="requirements">
                        Requirements
                      </TabsTrigger>
                      <TabsTrigger value="reviews">Reviews</TabsTrigger>
                    </TabsList>
                  </CardHeader>

                  <CardContent>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <TabsContent value="curriculum" className="space-y-4">
                          <h3 className="text-xl font-semibold mb-4">
                            Course Curriculum
                          </h3>
                          {course.curriculum.map((module, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <Card>
                                <CardHeader className="pb-3">
                                  <CardTitle className="text-lg">
                                    {module.module}
                                  </CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <div className="space-y-2">
                                    {module.lessons.map(
                                      (lesson, lessonIndex) => (
                                        <motion.div
                                          key={lessonIndex}
                                          className="flex items-center text-gray-600"
                                          initial={{ opacity: 0, x: -10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{
                                            delay:
                                              index * 0.1 + lessonIndex * 0.05,
                                          }}
                                          whileHover={{ x: 5 }}
                                        >
                                          <Play className="w-4 h-4 mr-3 text-purple-600" />
                                          <span>{lesson}</span>
                                        </motion.div>
                                      )
                                    )}
                                  </div>
                                </CardContent>
                              </Card>
                            </motion.div>
                          ))}
                        </TabsContent>

                        <TabsContent value="instructor" className="space-y-4">
                          <motion.div
                            className="flex items-start space-x-4"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <motion.div
                              className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-semibold"
                              style={{
                                backgroundColor: course.instructorColor,
                              }}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                              {course.instructor.charAt(0)}
                            </motion.div>
                            <div>
                              <motion.h3
                                className="text-2xl font-semibold mb-2"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                              >
                                {course.instructor}
                              </motion.h3>
                              <motion.p
                                className="text-gray-600 leading-relaxed"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                              >
                                {course.instructorBio}
                              </motion.p>
                            </div>
                          </motion.div>
                        </TabsContent>

                        <TabsContent value="requirements" className="space-y-4">
                          <div>
                            <motion.h3
                              className="text-xl font-semibold mb-4"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                            >
                              Requirements
                            </motion.h3>
                            <ul className="space-y-2">
                              {course.requirements.map((requirement, index) => (
                                <motion.li
                                  key={index}
                                  className="flex items-start"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  whileHover={{ x: 5 }}
                                >
                                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600">
                                    {requirement}
                                  </span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          <Separator />

                          <div>
                            <motion.h3
                              className="text-xl font-semibold mb-4"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                            >
                              What You&apos;ll Learn
                            </motion.h3>
                            <ul className="space-y-2">
                              {course.whatYouWillLearn.map((item, index) => (
                                <motion.li
                                  key={index}
                                  className="flex items-start"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.3 + index * 0.1 }}
                                  whileHover={{ x: 5 }}
                                >
                                  <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600">{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </TabsContent>

                        <TabsContent value="reviews" className="space-y-4">
                          <motion.div
                            className="text-center py-8"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <motion.div
                              animate={{ rotate: [0, 10, -10, 0] }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                              }}
                            >
                              <Star className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                            </motion.div>
                            <h3 className="text-xl font-semibold mb-2">
                              Reviews Coming Soon
                            </h3>
                            <p className="text-gray-600">
                              Student reviews will be displayed here once
                              available.
                            </p>
                          </motion.div>
                        </TabsContent>
                      </motion.div>
                    </AnimatePresence>
                  </CardContent>
                </Tabs>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              className="sticky top-8"
              variants={itemVariants}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              {/* Pricing Card */}
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="mb-6">
                  <CardContent className="p-6">
                    {/* Price */}
                    <motion.div
                      className="text-center mb-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <motion.span
                          className="text-4xl font-bold text-gray-900"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        >
                          {course.price}
                        </motion.span>
                        <span className="text-xl text-gray-500 line-through">
                          {course.originalPrice}
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <span className="text-green-600 font-medium">
                          Save {course.discount}
                        </span>
                        <span className="text-gray-500">
                          • EMI from {course.emi}
                        </span>
                      </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      className="space-y-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link href={`/paidcourses/${course.id}/enroll`}>
                          <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 text-lg">
                            Enroll Now
                          </Button>
                        </Link>
                      </motion.div>

                      <div className="grid grid-cols-2 gap-2">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            variant="outline"
                            className="flex items-center justify-center"
                            onClick={() => setIsWishlisted(!isWishlisted)}
                          >
                            <motion.div
                              animate={{
                                scale: isWishlisted ? [1, 1.3, 1] : 1,
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <Heart
                                className={`w-4 h-4 mr-2 ${
                                  isWishlisted
                                    ? "fill-red-500 text-red-500"
                                    : ""
                                }`}
                              />
                            </motion.div>
                            Wishlist
                          </Button>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            variant="outline"
                            className="flex items-center justify-center"
                          >
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>

                    <Separator className="my-6" />

                    {/* Course Includes */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <h4 className="font-semibold mb-3">
                        This course includes:
                      </h4>
                      <ul className="space-y-2 text-sm">
                        {[
                          {
                            icon: Clock,
                            text: `${course.duration} on-demand video`,
                          },
                          { icon: Download, text: "Downloadable resources" },
                          {
                            icon: CheckCircle,
                            text: "Certificate of completion",
                          },
                          { icon: Users, text: "Access to community" },
                        ].map((item, index) => (
                          <motion.li
                            key={index}
                            className="flex items-center"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                            whileHover={{ x: 5 }}
                          >
                            <item.icon className="w-4 h-4 mr-3 text-gray-500" />
                            {item.text}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Tags */}
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Course Tags</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9 }}
                    >
                      {course.tags.map((tag, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.9 + index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
