"use client";
import { useState } from "react";

export default function Banner3() {
  const [openItem, setOpenItem] = useState(null);

  const faqs = [
    {
      id: "item-1",
      question:
        "How can I sell subscriptions or memberships on my Webflow site?",
      answer:
        "You're one smart cookie—what a great idea! You can easily add a subscription or membership checkout experience to your Webflow website in about 2 minutes using our sign up embed. Here's how to set that up.",
    },
    {
      id: "item-2",
      question:
        "How can I set up protected content based on a user's membership level?",
      answer:
        "With Outseta and Webflow, you can create multiple membership tiers and restrict content access based on user subscription levels. Simply use our membership gates and conditional visibility features to show or hide content blocks depending on the user's active plan. You can set up different access levels for free members, premium subscribers, and VIP members.",
    },
    {
      id: "item-3",
      question:
        "How can I integrate Outseta's login embed with my Webflow site?",
      answer:
        "Integrating Outseta's login system with Webflow is straightforward. You can embed our pre-built login forms directly into your Webflow pages using our JavaScript embed codes. The login system will automatically handle user authentication, password resets, and session management while maintaining your site's design consistency.",
    },
    {
      id: "item-4",
      question:
        "I need some help implementing Outseta on my Webflow site. What do I do?",
      answer:
        "We're here to help! You can reach out to our support team through multiple channels: check our comprehensive documentation, join our community forum where other users share tips and solutions, or contact our support team directly. We also offer implementation assistance and can provide custom solutions for more complex integrations.",
    },
  ];

  const toggleItem = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Frequently asked questions
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We&apos;ve got answers.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className={`w-full px-6 lg:px-8 py-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between ${
                  openItem === faq.id ? "bg-purple-50" : ""
                }`}
              >
                <span className="text-lg sm:text-xl font-semibold text-gray-900 pr-4 leading-relaxed">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 flex-shrink-0 ${
                    openItem === faq.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItem === faq.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 lg:px-8 pb-6 pt-0">
                  <div className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    {faq.answer}
                    {faq.id === "item-1" && (
                      <a
                        href="#"
                        className="text-purple-600 hover:text-purple-700 font-medium underline ml-1 transition-colors duration-200"
                      >
                        Here&apos;s how to set that up.
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Can&apos;t find the answer you&apos;re looking for? Please chat
              with our friendly team.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 text-lg">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
