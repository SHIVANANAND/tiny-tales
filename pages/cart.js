import Header from "../components/Header";
import { useCart } from "../lib/cartContext";
import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
  const { items, remove, updateQty, clear } = useCart();
  const [quantities, setQuantities] = useState({});

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const originalTotal = items.reduce((s, i) => s + (i.originalPrice || i.price) * i.qty, 0);
  const totalSavings = originalTotal - subtotal;
  const freeShippingThreshold = 500;
  const amountForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const handleQuantityChange = (itemId, newQty) => {
    if (newQty < 1) return;
    setQuantities(prev => ({ ...prev, [itemId]: newQty }));
  };

  const updateCart = () => {
    Object.entries(quantities).forEach(([itemId, qty]) => {
      updateQty(itemId, qty);
    });
    setQuantities({});
  };

  const getItemQuantity = (item) => {
    return quantities[item.id] !== undefined ? quantities[item.id] : item.qty;
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Shop Cart</h1>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-gray-900 dark:hover:text-white">
              Home
            </Link>
            <span>{'>'}</span>
            <span>Shop Cart</span>
          </nav>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl text-gray-600 dark:text-gray-400 mb-4">Your cart is empty</h2>
            <Link
              href="/books"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Cart Items Table */}
            <div className="lg:col-span-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 p-4 bg-gray-100 dark:bg-gray-700 font-medium text-gray-700 dark:text-gray-300">
                  <div className="col-span-5">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-center">Subtotal</div>
                  <div className="col-span-1 text-center"></div>
                </div>

                {/* Cart Items */}
                {items.map((item) => (
                  <div key={item.id} className="grid grid-cols-12 gap-4 p-4 border-b border-gray-200 dark:border-gray-700 items-center">
                    {/* Product Column */}
                    <div className="col-span-5 flex items-center gap-4">
                      <div className="w-16 h-20 relative flex-shrink-0">
                        <img
                          src="/books/book-1.jpg"
                          alt={item.title}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white leading-tight">
                          {item.title} | {item.category || 'Board Book'}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          by {item.author}
                        </p>
                      </div>
                    </div>

                    {/* Price Column */}
                    <div className="col-span-2 text-center">
                      <div className="font-bold text-gray-900 dark:text-white">₹{item.price}</div>
                      {item.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">₹{item.originalPrice}</div>
                      )}
                    </div>

                    {/* Quantity Column */}
                    <div className="col-span-2 flex items-center justify-center gap-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, getItemQuantity(item) - 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        −
                      </button>
                      <span className="w-8 text-center font-medium">
                        {getItemQuantity(item)}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, getItemQuantity(item) + 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        +
                      </button>
                    </div>

                    {/* Subtotal Column */}
                    <div className="col-span-2 text-center">
                      <div className="font-bold text-gray-900 dark:text-white">
                        ₹{(item.price * getItemQuantity(item)).toFixed(0)}
                      </div>
                      {item.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">
                          ₹{(item.originalPrice * getItemQuantity(item)).toFixed(0)}
                        </div>
                      )}
                    </div>

                    {/* Remove Column */}
                    <div className="col-span-1 text-center">
                      <button
                        onClick={() => remove(item.id)}
                        className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-red-100 dark:hover:bg-red-900 flex items-center justify-center transition-colors"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}

                {/* Action Buttons */}
                <div className="p-4 flex flex-wrap gap-4">
                  <Link
                    href="/books"
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    CONTINUE SHOPPING
                  </Link>
                  <button
                    onClick={updateCart}
                    className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    UPDATE CART
                  </button>
                  <button
                    onClick={clear}
                    className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    CLEAR CART
                  </button>
                </div>
              </div>
            </div>

            {/* Cart Summary Sidebar */}
            <div className="lg:col-span-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Cart Total</h2>

                {/* Savings Message */}
                {totalSavings > 0 && (
                  <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg mb-4">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-green-700 dark:text-green-300 font-medium">
                      You will save ₹{totalSavings.toFixed(0)} on this order
                    </span>
                  </div>
                )}

                {/* Free Delivery Message */}
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg mb-6">
                  {amountForFreeShipping > 0 ? (
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      You're only <span className="font-bold">₹{amountForFreeShipping.toFixed(0)}</span> away from free delivery!
                      <br />
                      <span className="text-green-600 dark:text-green-400 font-medium">
                        Add more products to your cart now to enjoy this benefit.
                      </span>
                    </p>
                  ) : (
                    <p className="text-sm text-green-700 dark:text-green-300 font-medium">
                      🎉 You qualify for free delivery!
                    </p>
                  )}
                </div>

                {/* Totals */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="font-medium text-gray-700 dark:text-gray-300">SUBTOTAL</span>
                    <div className="text-right">
                      <span className="font-bold text-gray-900 dark:text-white">₹{subtotal.toFixed(0)}</span>
                      {totalSavings > 0 && (
                        <div className="text-sm text-gray-500 line-through">₹{originalTotal.toFixed(0)}</div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-center py-2">
                    <span className="font-bold text-gray-900 dark:text-white">GRAND TOTAL</span>
                    <div className="text-right">
                      <span className="font-bold text-xl text-gray-900 dark:text-white">₹{subtotal.toFixed(0)}</span>
                      {totalSavings > 0 && (
                        <div className="text-sm text-gray-500 line-through">₹{originalTotal.toFixed(0)}</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <button className="w-full bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-bold text-lg mt-6 transition-colors">
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
