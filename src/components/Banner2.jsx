"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Banner2() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const steps = [
    {
      id: 1,
      title: "Check out the free content",
      description:
        'This is publicly accessible "teaser" content that gives users a taste of what to expect from your paid courses.',
      link: "Free content",
      href: "/freecontent",
    },
    {
      id: 2,
      title: "Browse the paid courses",
      description:
        "Notice that you can't start any of these courses without signing up (the content is protected).",
      link: "Paid courses",
      href: "/paidcourses",
    },
    {
      id: 3,
      title: "Sign up for free",
      description:
        "Sign up for the free full access membership. This is a great way to experience the sign up flow as a new member would.",
      link: "Sign up",
      href: "/login",
    },
    {
      id: 4,
      title: "Log in to the site",
      description:
        "You'll now be able to access any of the protected course materials.",
      link: "Log in",
      href: "/login",
    },
    {
      id: 5,
      title: "View protected lesson content",
      description:
        'Go to any lesson, then click "Mark as complete." Member progress gets tracked both on the dashboard and in Outseta CRM.',
      link: "Lessons",
      href: "/paidcourses",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div ref={containerRef} className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left side - Sticky */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  This site is known as LMS by Tailwind and Next.js
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  This is A LMS website and is used as library managemnt system
                </p>
              </motion.div>
            </div>

            {/* Right side - Scrolling timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 hidden sm:block">
                <motion.div
                  className="w-full bg-gradient-to-b from-purple-500 to-purple-600 origin-top"
                  style={{
                    scaleY: useTransform(scrollYProgress, [0, 1], [0, 1]),
                  }}
                />
              </div>

              {/* Timeline steps */}
              <div className="space-y-12 lg:space-y-16">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative flex items-start space-x-6"
                  >
                    {/* Step number */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                      viewport={{ once: true }}
                      className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg relative z-10"
                    >
                      {step.id}
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + 0.3,
                        }}
                        viewport={{ once: true }}
                        className="text-xl sm:text-2xl font-bold text-gray-900 mb-3"
                      >
                        {step.title}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + 0.4,
                        }}
                        viewport={{ once: true }}
                        className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4"
                      >
                        {step.description}
                      </motion.p>

                      <motion.a
                        href={step.href}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + 0.5,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center space-x-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                      >
                        <span>{step.link}</span>
                        <motion.span
                          whileHover={{ x: 3 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          →
                        </motion.span>
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
