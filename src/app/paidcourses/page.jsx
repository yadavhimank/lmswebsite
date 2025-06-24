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
              strokeWidth={2}
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
                strokeWidth={2}
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
                strokeWidth={2}
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

// Filter Sidebar Component
const FilterSidebar = ({ filters, onFilterChange, isOpen, setIsOpen }) => {
  const categories = [
    "All",
    "Development",
    "Design",
    "Marketing",
    "Business",
    "Data Science",
    "Mobile",
  ];
  const durations = ["All", "0-10 hours", "10-30 hours", "30+ hours"];
  const priceRanges = ["All", "₹0-₹100", "₹100-₹200", "₹200+"];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Filter Sidebar */}
      <div
        className={`fixed lg:relative top-0 left-0 h-full lg:h-auto w-72 lg:w-full bg-white shadow-xl lg:shadow-none z-50 lg:z-auto transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } overflow-y-auto`}
      >
        <div className="p-5">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h2 className="text-xl font-bold text-gray-900">Filters</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Header */}
          <h2 className="text-xl font-bold text-gray-900 mb-6 hidden lg:block">
            Filters
          </h2>

          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Category
            </h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <label
                  key={category}
                  className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg"
                >
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={filters.category === category}
                    onChange={(e) => onFilterChange("category", e.target.value)}
                    className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  />
                  <span className="ml-3 text-gray-700">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Duration Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Duration
            </h3>
            <div className="space-y-2">
              {durations.map((duration) => (
                <label
                  key={duration}
                  className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg"
                >
                  <input
                    type="radio"
                    name="duration"
                    value={duration}
                    checked={filters.duration === duration}
                    onChange={(e) => onFilterChange("duration", e.target.value)}
                    className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  />
                  <span className="ml-3 text-gray-700">{duration}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Price Range
            </h3>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <label
                  key={range}
                  className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg"
                >
                  <input
                    type="radio"
                    name="price"
                    value={range}
                    checked={filters.price === range}
                    onChange={(e) => onFilterChange("price", e.target.value)}
                    className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  />
                  <span className="ml-3 text-gray-700">{range}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          <button
            onClick={() => onFilterChange("clear", null)}
            className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </>
  );
};

// Main Paid Courses Component
const PaidCoursesPage = () => {
  const [filters, setFilters] = useState({
    category: "All",
    duration: "All",
    price: "All",
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const allCourses = [
    {
      id: 1,
      title: "Complete JavaScript Mastery Program",
      instructor: "David Martinez",
      instructorColor: "#8B5CF6",
      category: "Development",
      level: "Beginner",
      rating: "4.9",
      duration: "52 hours",
      students: "18,923",
      description:
        "Become a JavaScript expert from basics to advanced concepts. Master ES6+, async programming, DOM manipulation, and modern frameworks.",
      features: ["Certificate", "Project Portfolio", "Code Reviews"],
      price: "₹119",
      originalPrice: "₹179",
      discount: "₹60",
      emi: "₹20/month",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      icon: "💻",
    },
    {
      id: 2,
      title: "Creative Graphic Design Fundamentals",
      instructor: "Priya Sharma",
      instructorColor: "#F59E0B",
      category: "Design",
      level: "Advanced",
      rating: "4.8",
      duration: "41 hours",
      students: "12,456",
      description:
        "Master visual design principles, typography, color theory, and brand identity. Create professional designs using Adobe Creative Suite.",
      features: ["Design Resources", "Live Feedback", "Portfolio Review"],
      price: "₹149",
      originalPrice: "₹229",
      discount: "₹80",
      emi: "₹25/month",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      icon: "🎨",
    },
    {
      id: 3,
      title: "Social Media Growth Strategies",
      instructor: "Rahul Gupta",
      instructorColor: "#10B981",
      category: "Marketing",
      level: "Intermediate",
      rating: "4.6",
      duration: "34 hours",
      students: "16,782",
      description:
        "Build powerful social media presence across platforms. Learn content creation, influencer marketing, analytics, and community management.",
      features: ["Templates Library", "Growth Tools", "Expert Sessions"],
      price: "₹89",
      originalPrice: "₹139",
      discount: "₹50",
      emi: "₹15/month",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      icon: "📊",
    },
    {
      id: 4,
      title: "AI & Deep Learning Bootcamp",
      instructor: "Dr. Anita Patel",
      instructorColor: "#EF4444",
      category: "Data Science",
      level: "Advanced",
      rating: "4.7",
      duration: "78 hours",
      students: "8,345",
      description:
        "Dive deep into artificial intelligence and neural networks. Build AI models using TensorFlow, PyTorch, and work with real-world datasets.",
      features: ["GPU Access", "Research Papers", "Industry Projects"],
      price: "₹219",
      originalPrice: "₹319",
      discount: "₹100",
      emi: "₹37/month",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      icon: "🤖",
    },
    {
      id: 5,
      title: "Flutter Cross-Platform Development",
      instructor: "Kevin Thomas",
      instructorColor: "#8B5CF6",
      category: "Mobile",
      level: "Intermediate",
      rating: "4.5",
      duration: "46 hours",
      students: "9,671",
      description:
        "Create beautiful native apps for iOS and Android using Flutter and Dart. Build responsive UIs and integrate with cloud services.",
      features: ["Source Code", "Firebase Integration", "App Store Guide"],
      price: "₹169",
      originalPrice: "₹239",
      discount: "₹70",
      emi: "₹28/month",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      icon: "📱",
    },
    {
      id: 6,
      title: "Financial Planning & Investment Mastery",
      instructor: "Meera Kapoor",
      instructorColor: "#F59E0B",
      category: "Business",
      level: "Beginner",
      rating: "4.4",
      duration: "29 hours",
      students: "14,567",
      description:
        "Master personal finance, investment strategies, tax planning, and wealth building. Learn about stocks, mutual funds, and retirement planning.",
      features: [
        "Financial Calculator",
        "Market Analysis",
        "Personal Consultation",
      ],
      price: "₹109",
      originalPrice: "₹159",
      discount: "₹50",
      emi: "₹18/month",
      gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      icon: "📈",
    },
  ];

  const handleFilterChange = (filterType, value) => {
    if (filterType === "clear") {
      setFilters({
        category: "All",
        duration: "All",
        price: "All",
      });
    } else {
      setFilters((prev) => ({
        ...prev,
        [filterType]: value,
      }));
    }
  };

  const filteredCourses = allCourses.filter((course) => {
    if (filters.category !== "All" && course.category !== filters.category)
      return false;

    if (filters.duration !== "All") {
      const hours = parseInt(course.duration);
      if (filters.duration === "0-10 hours" && hours > 10) return false;
      if (filters.duration === "10-30 hours" && (hours <= 10 || hours > 30))
        return false;
      if (filters.duration === "30+ hours" && hours <= 30) return false;
    }

    if (filters.price !== "All") {
      const price = parseInt(course.price.replace("₹", ""));
      if (filters.price === "₹0-₹100" && price > 100) return false;
      if (filters.price === "₹100-₹200" && (price <= 100 || price > 200))
        return false;
      if (filters.price === "₹200+" && price <= 200) return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden lg:block w-64 bg-white shadow-lg">
          <FilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            isOpen={isFilterOpen}
            setIsOpen={setIsFilterOpen}
          />
        </div>

        {/* Mobile Filter Sidebar - Only for mobile */}
        <div className="lg:hidden">
          <FilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            isOpen={isFilterOpen}
            setIsOpen={setIsFilterOpen}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Premium Courses
              </h1>
              <p className="text-gray-600">
                {filteredCourses.length} courses available
              </p>
            </div>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg font-medium"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"
                />
              </svg>
              Filters
            </button>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* No Results */}
          {filteredCourses.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No courses found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters to see more results
              </p>
              <button
                onClick={() => handleFilterChange("clear", null)}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return <PaidCoursesPage />;
}
