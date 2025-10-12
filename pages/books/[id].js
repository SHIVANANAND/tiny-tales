import { useRouter } from "next/router";
import books from "../../data/books.json";
import Image from "next/image";
import { useCart } from "../../lib/cartContext";
import Header from "../../components/Header";

export default function BookDetail() {
  const router = useRouter();
  const { id } = router.query;
  const book = books.find((b) => b.id === id);
  const { add } = useCart();

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="w-full h-96 relative">
              <Image
                src="/books/book-1.jpg"
                alt={book.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <h1 className="text-3xl font-serif dark:text-white">
              {book.title}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              by {book.author}
            </p>
            <p className="mt-4 text-lg">{book.description}</p>
            <div className="mt-6 flex items-center gap-4">
              <div className="text-2xl font-bold">${book.price.toFixed(2)}</div>
              <button
                onClick={() => add(book, 1)}
                className="bg-tt-gold text-tt-dark px-4 py-2 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
