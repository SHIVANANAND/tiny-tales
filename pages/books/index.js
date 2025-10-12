import books from "../../data/books.json";
import BookCard from "../../components/BookCard";
import Header from "../../components/Header";
import { useRouter } from "next/router";
import { useMemo } from "react";

export default function BooksPage() {
  const router = useRouter();
  const { theme } = router.query;

  const filtered = useMemo(() => {
    if (!theme) return books;
    const t = Array.isArray(theme) ? theme[0] : theme;
    return books.filter((b) => b.theme === t);
  }, [theme]);

  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-serif">Books</h1>
          {theme && (
            <button
              onClick={() => router.push("/books")}
              className="text-sm underline"
            >
              Clear filter
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((b) => (
            <BookCard key={b.id} book={b} />
          ))}
        </div>
      </main>
    </div>
  );
}
