import Header from "../components/Header";
import Image from "next/image";
import { useCart } from "../lib/cartContext";

export default function CartPage() {
  const { items, remove, updateQty, clear } = useCart();
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-serif mb-4">Your Cart</h1>
        {items.length === 0 ? (
          <div>Your cart is empty.</div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border rounded p-3 bg-white dark:bg-gray-800"
              >
                <div className="w-20 h-28 relative overflow-hidden rounded">
                  <Image
                    src="/books/book-1.jpg"
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="flex-1">
                  <div className="font-semibold dark:text-white">
                    {item.title}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {item.author}
                  </div>
                </div>
                <div>
                  <input
                    type="number"
                    min="1"
                    value={item.qty}
                    onChange={(e) =>
                      updateQty(item.id, Number(e.target.value) || 1)
                    }
                    className="w-16 p-1 border rounded text-black bg-white"
                  />
                </div>
                <div className="font-semibold">
                  ${(item.price * item.qty).toFixed(2)}
                </div>
                <div>
                  <button
                    onClick={() => remove(item.id)}
                    className="text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="text-right">
              <div className="text-lg">
                Subtotal:{" "}
                <span className="font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="mt-3 flex justify-end gap-3">
                <button onClick={clear} className="px-4 py-2 border rounded">
                  Clear
                </button>
                <button className="px-4 py-2 bg-tt-gold text-tt-dark rounded">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
