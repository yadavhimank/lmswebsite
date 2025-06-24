"use client";
import { useState } from "react";

export default function Page() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    alert("Thanks for contacting us!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Section 1: Header */}
      <section className="py-16 px-6 sm:px-10 lg:px-24 text-center bg-gradient-to-r from-purple-100 via-white to-purple-50">
        <h1 className="text-4xl sm:text-5xl font-bold text-purple-700 mb-4">
          Contact Us
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          We&apos;d love to hear from you! Reach out with questions, feedback,
          or just to say hello.
        </p>
      </section>

      {/* Section 2: Contact Details */}
      <section className="py-12 px-6 sm:px-10 lg:px-24 grid sm:grid-cols-2 gap-10 bg-gray-50">
        <div>
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            Our Office
          </h2>
          <p className="text-gray-600">
            HSR Motors, DLF Phase 3, Gurgaon, Haryana, India
          </p>
          <p className="mt-4 text-gray-600">
            <strong>Email:</strong> support@lmswebsite.com
          </p>
          <p className="text-gray-600">
            <strong>Phone:</strong> +91-9876543210
          </p>
          <p className="mt-6 text-gray-500 text-sm">
            Available Mon-Fri, 9am to 6pm
          </p>
        </div>

        <div className="hidden sm:block">
          <iframe
            src="https://maps.google.com/maps?q=gurgaon&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="250"
            className="rounded-xl border"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Section 3: Contact Form */}
      <section className="py-16 px-6 sm:px-10 lg:px-24 bg-white">
        <h2 className="text-3xl font-semibold text-purple-700 mb-8 text-center">
          Send Us a Message
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-xl shadow space-y-6"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md transition-all"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
