import Link from "next/link";
import Image from "next/image";
import { useCart } from "../lib/cartContext";

export default function BookCard({ book }) {
  const { add } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    add(book, 1);
  };

  const handleBuyNow = (e) => {
    e.preventDefault();
    e.stopPropagation();
    add(book, 1);
    // In a real app, this would redirect to checkout
    window.location.href = '/cart';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="relative">
        <Link href={`/books/${book.id}`}>
          <div className="w-full h-64 relative">
            <Image
              src="/books/book-1.jpg"
              alt={book.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>

        {/* Discount Badge */}
        {book.discount && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            {book.discount}% OFF
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category */}
        {book.category && (
          <div className="text-xs text-tt-gold dark:text-purple-400 font-medium mb-2 uppercase tracking-wide">
            {book.category}
          </div>
        )}

        {/* Title */}
        <Link href={`/books/${book.id}`}>
          <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-tight mb-1 hover:text-tt-gold dark:hover:text-purple-400 transition-colors cursor-pointer line-clamp-2">
            {book.title}
          </h3>
        </Link>

        {/* Author */}
        <div className="text-xs text-gray-600 dark:text-gray-400 mb-3">
          {book.author}
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            ₹{book.price.toFixed(2)}
          </span>
          {book.originalPrice && (
            <>
              <span className="text-sm text-gray-500 line-through">
                ₹{book.originalPrice.toFixed(2)}
              </span>
              <span className="text-xs text-green-600 font-medium">
                {book.discount}% OFF
              </span>
            </>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleBuyNow}
            className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-xs font-medium py-2 px-3 rounded transition-colors duration-200"
          >
            Buy Now
          </button>
          <button
            onClick={handleAddToCart}
            className="flex-1 border border-gray-900 text-gray-900 dark:border-gray-300 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-300 dark:hover:text-gray-900 text-xs font-medium py-2 px-3 rounded transition-colors duration-200"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
