"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  Lock,
  ArrowRight,
  Tag,
  Clock,
  Users,
  Star,
  CheckCircle,
} from "lucide-react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
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
      price: 119,
      originalPrice: 179,
      discount: 60,
      emi: "₹20/month",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      icon: "💻",
      quantity: 1,
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
      price: 149,
      originalPrice: 229,
      discount: 80,
      emi: "₹25/month",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      icon: "🎨",
      quantity: 1,
    },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "save20") {
      setAppliedPromo({ code: "SAVE20", discount: 20 });
    } else if (promoCode.toLowerCase() === "student10") {
      setAppliedPromo({ code: "STUDENT10", discount: 10 });
    } else {
      alert("Invalid promo code");
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const promoDiscount = appliedPromo
    ? (subtotal * appliedPromo.discount) / 100
    : 0;
  const total = subtotal - promoDiscount;

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsCheckingOut(false);
    // Redirect to success page or payment gateway
    alert("Redirecting to payment gateway...");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ShoppingCart className="w-16 h-16 text-gray-400" />
            </motion.div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Your cart is empty
            </h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven&apos;t added any courses yet.
            </p>
            <Link
              href="/courses"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Browse Courses
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Shopping Cart
          </h1>
          <p className="text-gray-600">
            {cartItems.length} course{cartItems.length > 1 ? "s" : ""} in your
            cart
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Course Details
                </h2>

                <AnimatePresence>
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      className="flex flex-col md:flex-row gap-4 p-4 border border-gray-200 rounded-xl mb-4 last:mb-0"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ y: -2 }}
                    >
                      {/* Course Image */}
                      <div className="relative w-full md:w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <div
                          className="absolute inset-0 bg-gradient-to-br opacity-90"
                          style={{ background: item.gradient }}
                        >
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white/90 text-2xl font-bold">
                              {item.icon}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Course Info */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start justify-between">
                          <div className="flex-1 mb-4 md:mb-0">
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                              by {item.instructor}
                            </p>

                            {/* Course Stats */}
                            <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                              <div className="flex items-center">
                                <Star className="w-3 h-3 mr-1 text-amber-500" />
                                <span>{item.rating}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-3 h-3 mr-1" />
                                <span>{item.duration}</span>
                              </div>
                              <div className="flex items-center">
                                <Users className="w-3 h-3 mr-1" />
                                <span>{item.students}</span>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                {item.category}
                              </span>
                              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                                {item.level}
                              </span>
                            </div>
                          </div>

                          {/* Price and Controls */}
                          <div className="flex flex-col items-end">
                            <div className="text-right mb-3">
                              <div className="text-xl font-bold text-gray-900">
                                ₹{item.price}
                              </div>
                              <div className="text-sm text-gray-500 line-through">
                                ₹{item.originalPrice}
                              </div>
                              <div className="text-xs text-green-600">
                                Save ₹{item.discount}
                              </div>
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2 mb-3">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="w-8 text-center font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>

                            {/* Remove Button */}
                            <motion.button
                              onClick={() => removeItem(item.id)}
                              className="flex items-center text-red-600 hover:text-red-700 text-sm transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Trash2 className="w-4 h-4 mr-1" />
                              Remove
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Order Summary
                </h2>

                {/* Promo Code */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Promo Code
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <motion.button
                      onClick={applyPromoCode}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Apply
                    </motion.button>
                  </div>
                  {appliedPromo && (
                    <motion.div
                      className="mt-2 flex items-center text-green-600 text-sm"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <Tag className="w-4 h-4 mr-1" />
                      {appliedPromo.code} applied ({appliedPromo.discount}% off)
                    </motion.div>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  {appliedPromo && (
                    <div className="flex justify-between text-green-600">
                      <span>Promo Discount</span>
                      <span>-₹{promoDiscount}</span>
                    </div>
                  )}
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-semibold text-gray-900">
                      <span>Total</span>
                      <span>₹{total}</span>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <motion.button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isCheckingOut ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4 mr-2" />
                      Secure Checkout
                    </>
                  )}
                </motion.button>

                {/* Security Info */}
                <div className="mt-4 text-center">
                  <div className="flex items-center justify-center text-sm text-gray-500 mb-2">
                    <Lock className="w-4 h-4 mr-1" />
                    SSL Secured Payment
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-xs text-gray-400">Visa</div>
                    <div className="text-xs text-gray-400">Mastercard</div>
                    <div className="text-xs text-gray-400">PayPal</div>
                    <div className="text-xs text-gray-400">UPI</div>
                  </div>
                </div>

                {/* Money Back Guarantee */}
                <motion.div
                  className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center text-green-800">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <div>
                      <div className="font-medium text-sm">
                        30-Day Money Back Guarantee
                      </div>
                      <div className="text-xs text-green-600">
                        Full refund if not satisfied
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Continue Shopping */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/courses"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
          >
            ← Continue Shopping
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
