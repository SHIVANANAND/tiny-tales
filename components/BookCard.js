import Link from "next/link";
import Image from "next/image";

export default function BookCard({ book }) {
  return (
    <div className="border rounded-lg p-4 bg-white dark:bg-gray-800 shadow-sm tt-card">
      <Link href={`/books/${book.id}`} className="block">
        <div className="w-full h-48 relative mb-3">
          <Image
            src="/books/book-1.jpg"
            alt={book.title}
            fill
            className="object-cover rounded"
          />
        </div>
        <h3 className="font-serif text-lg font-semibold leading-tight text-tt-dark dark:text-white">
          {book.title}
        </h3>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {book.author}
        </div>
        <div className="mt-2 font-bold text-tt-dark dark:text-white">
          ${book.price.toFixed(2)}
        </div>
      </Link>
    </div>
  );
}
