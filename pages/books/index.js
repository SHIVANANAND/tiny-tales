import books from "../../data/books.json";
import BookCard from "../../components/BookCard";
import Header from "../../components/Header";
import FilterSidebar from "../../components/FilterSidebar";
import { useRouter } from "next/router";
import { useMemo, useState, useEffect } from "react";

export default function BooksPage() {
  const router = useRouter();
  const { theme } = router.query;
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState("default");

  const filtered = useMemo(() => {
    let result = books;

    // Theme filter from URL
    if (theme) {
      const t = Array.isArray(theme) ? theme[0] : theme;
      result = result.filter((b) => b.theme === t);
    }

    // Search filter - enhanced to include category
    if (filters.search && filters.search.trim()) {
      const searchTerm = filters.search.toLowerCase().trim();
      result = result.filter((b) =>
        b.title.toLowerCase().includes(searchTerm) ||
        b.author.toLowerCase().includes(searchTerm) ||
        b.description.toLowerCase().includes(searchTerm) ||
        (b.category && b.category.toLowerCase().includes(searchTerm)) ||
        b.theme.toLowerCase().includes(searchTerm)
      );
    }

    // Price range filter
    if (filters.priceRange) {
      result = result.filter((b) =>
        b.price >= filters.priceRange.min && b.price <= filters.priceRange.max
      );
    }

    // Book type/category filter
    if (filters.bookType && filters.bookType.length > 0) {
      result = result.filter((b) =>
        filters.bookType.includes(b.category) || filters.bookType.includes(b.theme)
      );
    }

    // Age group filter
    if (filters.ageGroup && filters.ageGroup.length > 0) {
      result = result.filter((b) => {
        // Map books to age groups based on themes and categories
        const ageMapping = {
          "0-6 months": ["Board Book", "High Contrast"],
          "6-12 months": ["Board Book", "Touch And Feel Books"],
          "1-2 years": ["Cloth Books & Bath Time", "My First Books"],
          "2-4 years": ["Bedtime Stories", "Empathy", "Fairy Tales"],
          "4+ years": ["Adventures", "Learning & STEM", "Animals & Nature"]
        };

        return filters.ageGroup.some(age => {
          const categories = ageMapping[age] || [];
          return categories.includes(b.category) || categories.includes(b.theme);
        });
      });
    }

    // Author filter
    if (filters.authors && filters.authors.length > 0) {
      result = result.filter((b) => filters.authors.includes(b.author));
    }

    // Discount filter
    if (filters.hasDiscount) {
      result = result.filter((b) => b.discount && b.discount > 0);
    }

    // Sorting
    switch (sortBy) {
      case "price-low":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "name":
        result = [...result].sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "author":
        result = [...result].sort((a, b) => a.author.localeCompare(b.author));
        break;
      case "discount":
        result = [...result].sort((a, b) => (b.discount || 0) - (a.discount || 0));
        break;
      case "newest":
        result = [...result].sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      default:
        // Keep original order
        break;
    }

    return result;
  }, [theme, filters, sortBy]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);

    // Update URL parameters for persistence
    const params = new URLSearchParams();
    if (newFilters.search) params.set('search', newFilters.search);
    if (newFilters.priceRange) {
      params.set('minPrice', newFilters.priceRange.min.toString());
      params.set('maxPrice', newFilters.priceRange.max.toString());
    }
    if (newFilters.bookType?.length > 0) params.set('bookTypes', newFilters.bookType.join(','));
    if (newFilters.ageGroup?.length > 0) params.set('ageGroups', newFilters.ageGroup.join(','));
    if (newFilters.authors?.length > 0) params.set('authors', newFilters.authors.join(','));
    if (newFilters.hasDiscount) params.set('discount', 'true');

    const queryString = params.toString();
    const url = queryString ? `/books?${queryString}` : '/books';
    window.history.replaceState(null, '', url);
  };

  // Load filters from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlFilters = {};

    if (params.get('search')) urlFilters.search = params.get('search');
    if (params.get('minPrice') || params.get('maxPrice')) {
      urlFilters.priceRange = {
        min: Number(params.get('minPrice')) || 0,
        max: Number(params.get('maxPrice')) || 50
      };
    }
    if (params.get('bookTypes')) urlFilters.bookType = params.get('bookTypes').split(',');
    if (params.get('ageGroups')) urlFilters.ageGroup = params.get('ageGroups').split(',');
    if (params.get('authors')) urlFilters.authors = params.get('authors').split(',');
    if (params.get('discount') === 'true') urlFilters.hasDiscount = true;

    if (Object.keys(urlFilters).length > 0) {
      setFilters(urlFilters);
    }
  }, []);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="flex">
        {/* Sidebar */}
        <FilterSidebar onFilterChange={handleFilterChange} filters={filters} />

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Header with results count and sorting */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                Books
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Showing All {filtered.length} Results
              </p>
            </div>

            <div className="flex items-center gap-4">
              {theme && (
                <button
                  onClick={() => router.push("/books")}
                  className="text-sm text-tt-gold hover:text-purple-700 underline"
                >
                  Clear theme filter
                </button>
              )}

              <select
                value={sortBy}
                onChange={handleSortChange}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="default">Default Sorting</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
                <option value="author">Author: A to Z</option>
                <option value="discount">Highest Discount</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>

          {/* No results message */}
          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No books found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setFilters({});
                  router.push("/books");
                }}
                className="mt-4 px-6 py-2 bg-tt-gold text-white  text-white rounded-lg"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
