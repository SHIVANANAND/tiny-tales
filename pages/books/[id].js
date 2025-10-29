import { useRouter } from "next/router";
import books from "../../data/books.json";
import Image from "next/image";
import { useCart } from "../../lib/cartContext";
import Header from "../../components/Header";
import { useState } from "react";

export default function BookDetail() {
  const router = useRouter();
  const { id } = router.query;
  const book = books.find((b) => b.id === id);
  const { add } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock image gallery (using same image for demo)
  const images = [
    "/books/book-1.jpg",
    "/books/book-1.jpg",
    "/books/book-1.jpg"
  ];

  if (!book) return <div>Loading...</div>;

  const handleQuantityChange = (change) => {
    const newQty = Math.max(1, quantity + change);
    setQuantity(newQty);
  };

  const handleAddToCart = () => {
    add(book, quantity);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Get related products based on theme and category
  const getRelatedProducts = () => {
    if (!book) return [];

    return books
      .filter((b) =>
        b.id !== book.id &&
        (b.theme === book.theme || b.category === book.category)
      )
      .slice(0, 6); // Limit to 6 related products
  };

  const relatedProducts = getRelatedProducts();

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column - Image Gallery */}
          <div className="lg:col-span-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              {/* Main Image */}
              <div className="relative mb-4">
                <div className="w-full h-96 relative bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={images[currentImageIndex]}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-2 mb-4">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-16 h-16 relative rounded border-2 overflow-hidden ${currentImageIndex === index ? 'border-purple-500' : 'border-gray-200'
                      }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
                {/* Video Thumbnail */}
                <button className="w-16 h-16 relative rounded border-2 border-gray-200 bg-red-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Center Column - Product Information */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              {/* Product Title */}
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {book.title} | {book.category || 'Board Book'}
              </h1>

              {/* Product Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {book.description}
              </p>

              {/* Pricing */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ₹{book.price.toFixed(2)}
                </span>
                {book.originalPrice && (
                  <>
                    <span className="text-lg text-gray-500 line-through">
                      ₹{book.originalPrice.toFixed(2)}
                    </span>
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                      {book.discount}% OFF
                    </span>
                  </>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    −
                  </button>
                  <span className="w-12 text-center text-lg font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-medium text-lg transition-colors mb-4"
              >
                Add To Cart
              </button>

              {/* Share */}
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span>Share:</span>
                <button className="p-1 hover:text-gray-800 dark:hover:text-gray-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Features Sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 space-y-4">

              {/* Free Shipping */}
              <div className="flex items-start gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex-shrink-0">
                  🚚
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Free Shipping</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">On shopping above ₹500</p>
                </div>
              </div>

              {/* Widest Range */}
              <div className="flex items-start gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex-shrink-0">
                  🏪
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Widest Range</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">5000+ books to choose from</p>
                </div>
              </div>

              {/* Lifetime Bond */}
              <div className="flex items-start gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex-shrink-0">
                  💝
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Lifetime Bond</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Build a lifetime bond over books with your little one</p>
                </div>
              </div>

              {/* Satisfaction Guarantee */}
              <div className="flex items-start gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex-shrink-0">
                  ✅
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">100% Satisfaction</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">100% Satisfaction level guaranteed</p>
                </div>
              </div>

              {/* Add to Wishlist */}
              <button className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Add To Wishlist
              </button>
            </div>
          </div>
        </div>

        {/* Tabbed Content Section */}
        <div className="mt-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setActiveTab("description")}
                className={`px-6 py-4 text-sm font-medium transition-colors ${activeTab === "description"
                  ? "border-b-2 border-purple-500 text-tt-gold dark:text-purple-400 bg-gray-50 dark:bg-gray-700"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("details")}
                className={`px-6 py-4 text-sm font-medium transition-colors ${activeTab === "details"
                  ? "border-b-2 border-purple-500 text-tt-gold dark:text-purple-400 bg-gray-50 dark:bg-gray-700"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
              >
                Product Details
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`px-6 py-4 text-sm font-medium transition-colors ${activeTab === "reviews"
                  ? "border-b-2 border-purple-500 text-tt-gold dark:text-purple-400 bg-gray-50 dark:bg-gray-700"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
              >
                Reviews
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === "description" && (
                <div className="prose dark:prose-invert max-w-none">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                    Product Description
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {book.description}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    Designed to develop babies' eyesight, this book of large, friendly faces will stimulate vision
                    from birth. With clearly-defined simple images and black-and-white patterns throughout, it provides
                    a multi-sensory experience that will help focus a baby's attention and concentration.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    New to mummy, daddy, the animals, the sun, the flower... and who's that in the mirror?
                    Perfect for encouraging early visual development and bonding moments between parent and child.
                  </p>
                </div>
              )}

              {activeTab === "details" && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                    Product Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                        <span className="font-medium text-gray-900 dark:text-white">Author:</span>
                        <span className="text-gray-600 dark:text-gray-300">{book.author}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                        <span className="font-medium text-gray-900 dark:text-white">Category:</span>
                        <span className="text-gray-600 dark:text-gray-300">{book.category || "Board Book"}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                        <span className="font-medium text-gray-900 dark:text-white">Theme:</span>
                        <span className="text-gray-600 dark:text-gray-300">{book.theme}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                        <span className="font-medium text-gray-900 dark:text-white">Price:</span>
                        <span className="text-gray-600 dark:text-gray-300">₹{book.price.toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                        <span className="font-medium text-gray-900 dark:text-white">Age Group:</span>
                        <span className="text-gray-600 dark:text-gray-300">0-3 years</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                        <span className="font-medium text-gray-900 dark:text-white">Language:</span>
                        <span className="text-gray-600 dark:text-gray-300">English</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                        <span className="font-medium text-gray-900 dark:text-white">Pages:</span>
                        <span className="text-gray-600 dark:text-gray-300">12 pages</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                        <span className="font-medium text-gray-900 dark:text-white">Format:</span>
                        <span className="text-gray-600 dark:text-gray-300">Board Book</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div>
                  <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
                    Customer Reviews
                  </h3>

                  {/* Review Summary */}
                  <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">4.8</div>
                      <div className="flex items-center justify-center gap-1 mb-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className={`w-4 h-4 ${star <= 5 ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Based on 24 reviews</div>
                    </div>
                  </div>

                  {/* Individual Reviews */}
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-medium">
                          S
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-gray-900 dark:text-white">Sarah M.</span>
                            <div className="flex items-center gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                  key={star}
                                  className="w-4 h-4 text-yellow-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">2 days ago</span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">
                            Perfect book for my newborn! The high contrast images really capture her attention.
                            Great quality and exactly what I was looking for to help with her visual development.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-medium">
                          M
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-gray-900 dark:text-white">Mike R.</span>
                            <div className="flex items-center gap-1">
                              {[1, 2, 3, 4].map((star) => (
                                <svg
                                  key={star}
                                  className="w-4 h-4 text-yellow-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                              <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">1 week ago</span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">
                            Good book with nice illustrations. My baby seems to enjoy looking at it.
                            Only wish it was a bit bigger, but overall satisfied with the purchase.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                          A
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-gray-900 dark:text-white">Amanda K.</span>
                            <div className="flex items-center gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                  key={star}
                                  className="w-4 h-4 text-yellow-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">2 weeks ago</span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">
                            Excellent quality and fast shipping! This book is perfect for newborns.
                            The black and white contrast is exactly what babies need for visual development. Highly recommend!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                You May Also Like
              </h2>

              {/* Horizontal Scrollable Product Grid */}
              <div className="relative">
                <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {relatedProducts.map((relatedBook) => (
                    <div
                      key={relatedBook.id}
                      className="flex-shrink-0 w-48 bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => router.push(`/books/${relatedBook.id}`)}
                    >
                      {/* Product Image */}
                      <div className="w-full h-48 relative bg-gray-100">
                        <Image
                          src="/books/book-1.jpg"
                          alt={relatedBook.title}
                          fill
                          className="object-cover"
                        />
                        {/* Discount Badge */}
                        {relatedBook.discount && (
                          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                            {relatedBook.discount}% OFF
                          </div>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="p-4">
                        {/* Category */}
                        {relatedBook.category && (
                          <div className="text-xs text-tt-gold dark:text-purple-400 font-medium mb-1 uppercase tracking-wide">
                            {relatedBook.category}
                          </div>
                        )}

                        {/* Title */}
                        <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-tight mb-2 line-clamp-2">
                          {relatedBook.title}
                        </h3>

                        {/* Author */}
                        <div className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                          {relatedBook.author}
                        </div>

                        {/* Pricing */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-sm font-bold text-gray-900 dark:text-white">
                            ₹{relatedBook.price.toFixed(2)}
                          </span>
                          {relatedBook.originalPrice && (
                            <>
                              <span className="text-xs text-gray-500 line-through">
                                ₹{relatedBook.originalPrice.toFixed(2)}
                              </span>
                            </>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-1">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              router.push(`/books/${relatedBook.id}`);
                            }}
                            className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-xs font-medium py-2 px-2 rounded transition-colors duration-200"
                          >
                            View
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              add(relatedBook, 1);
                            }}
                            className="flex-1 border border-gray-900 text-gray-900 dark:border-gray-300 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-300 dark:hover:text-gray-900 text-xs font-medium py-2 px-2 rounded transition-colors duration-200"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Scroll Indicators */}
                <div className="flex justify-center mt-4 gap-2">
                  {Array.from({ length: Math.ceil(relatedProducts.length / 4) }).map((_, index) => (
                    <button
                      key={index}
                      className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-purple-500 transition-colors"
                    />
                  ))}
                </div>
              </div>

              {/* View All Link */}
              <div className="text-center mt-6">
                <button
                  onClick={() => router.push('/books')}
                  className="text-tt-gold dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium text-sm underline"
                >
                  View All Books →
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
