"use client";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-white text-gray-800 pt-20">
      {/* Section 1: Hero */}
      <section className="py-16 px-6 sm:px-10 lg:px-24 text-center bg-gradient-to-r from-purple-100 via-white to-purple-50">
        <h1 className="text-4xl sm:text-5xl font-bold text-purple-700 mb-4">
          About Us
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Welcome to LMS Website &apos; your trusted platform for quality online
          learning. We&apos;re here to make education engaging, accessible, and
          affordable.
        </p>
      </section>

      {/* Section 2: Mission and Vision */}
      <section className="py-16 px-6 sm:px-10 lg:px-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-purple-700">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to empower learners across the globe by providing
            accessible and high-quality educational resources. We believe in
            learning by doing, building real-world skills that last.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-purple-700">
            Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To become a go-to platform for students, professionals, and lifelong
            learners. We&apos;re committed to innovation, inclusion, and impact
            in digital education.
          </p>
        </div>
      </section>

      {/* Section 3: Why Choose Us */}
      <section className="py-16 px-6 sm:px-10 lg:px-24 bg-purple-50 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-semibold mb-4 text-purple-700">
            Why Choose Our LMS?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our LMS is designed with you in mind. We offer a comprehensive suite
            of features to enhance your learning journey, whether you&apos;re a
            student, an educator, or a lifelong learner.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Extensive library of courses and resources.</li>
            <li>
              Interactive learning experience with quizzes and assignments.
            </li>
            <li>Progress tracking and personalized recommendations.</li>
            <li>Dedicated support team to assist you.</li>
            <li>Flexible learning on any device, anytime, anywhere.</li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src="/lms-features.jpg" // Replace with an actual image showcasing LMS features
            alt="LMS Features"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>
      </section>

      {/* Section 4: Our Values */}
      <section className="py-16 px-6 sm:px-10 lg:px-24">
        <h2 className="text-3xl font-semibold text-center text-purple-700 mb-10">
          Our Core Values
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Innovation
            </h3>
            <p className="text-gray-600">
              Continuously evolving our platform to bring the latest in
              educational technology.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Accessibility
            </h3>
            <p className="text-gray-600">
              Making quality education available to everyone, regardless of
              their background.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Excellence
            </h3>
            <p className="text-gray-600">
              Striving for the highest standards in content, delivery, and user
              experience.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Community
            </h3>
            <p className="text-gray-600">
              Fostering a supportive and engaging learning environment for all
              users.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Meet the Team */}
      <section className="py-16 px-6 sm:px-10 lg:px-24 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center text-purple-700 mb-10">
          Meet the Team
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {[
            {
              name: "Himank Yadav",
              role: "Frontend Developer",
              img: "/profile.jpg", // Replace with actual image path if available
            },
            {
              name: "Riya Kapoor",
              role: "Content Strategist",
              img: "/profile2.jpg", // Ensure this path is correct or replace
            },
            {
              name: "Aman Verma",
              role: "Product Designer",
              img: "/profile3.jpg", // Ensure this path is correct or replace
            },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
            >
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
