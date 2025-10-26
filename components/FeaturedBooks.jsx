import { Button } from "./ui/button";
import { Card } from "./ui/card.jsx";
import { Star, ShoppingCart } from "lucide-react";
import { ImageWithFallback } from "./ImageFallback.jsx";

export function FeaturedBooks() {
  const books = [
    {
      title: "The Adventure Begins",
      author: "Emma Thompson",
      age: "3-5 years",
      price: "$14.99",
      rating: 4.9,
      reviews: 248,
      image: "https://images.unsplash.com/photo-1705660800046-2113f479369a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHN0b3J5Ym9vayUyMGNvbG9yZnVsfGVufDF8fHx8MTc2MTA4NDM2NHww&ixlib=rb-4.1.0&q=80&w=400",
      tag: "Bestseller"
    },
    {
      title: "Colors of Friendship",
      author: "Michael Chen",
      age: "4-6 years",
      price: "$12.99",
      rating: 4.8,
      reviews: 195,
      image: "https://images.unsplash.com/photo-1684859634430-3fb8d390e119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYm9vayUyMHNoZWxmfGVufDF8fHx8MTc2MTA4NDM2NXww&ixlib=rb-4.1.0&q=80&w=400",
      tag: "New Release"
    },
    {
      title: "Dreams & Stars",
      author: "Sarah Williams",
      age: "5-7 years",
      price: "$15.99",
      rating: 5.0,
      reviews: 312,
      image: "https://images.unsplash.com/photo-1563045848-0a66ac691653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwcmVhZGluZyUyMGhvbWV8ZW58MXx8fHwxNzYxMDg0MzY1fDA&ixlib=rb-4.1.0&q=80&w=400",
      tag: "Award Winner"
    },
    {
      title: "Little Explorers",
      author: "David Martinez",
      age: "3-5 years",
      price: "$13.99",
      rating: 4.7,
      reviews: 176,
      image: "https://images.unsplash.com/photo-1733947269652-6d9922531213?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJlbnQlMjBjaGlsZCUyMHJlYWRpbmclMjBib29rfGVufDF8fHx8MTc2MTA4NDM2NHww&ixlib=rb-4.1.0&q=80&w=400",
      tag: "Popular"
    },
    {
      title: "Magical Garden Tales",
      author: "Lisa Anderson",
      age: "4-7 years",
      price: "$16.99",
      rating: 4.9,
      reviews: 289,
      image: "https://images.unsplash.com/photo-1705660800046-2113f479369a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHN0b3J5Ym9vayUyMGNvbG9yZnVsfGVufDF8fHx8MTc2MTA4NDM2NHww&ixlib=rb-4.1.0&q=80&w=400",
      tag: "Bestseller"
    },
    {
      title: "Numbers & Shapes Fun",
      author: "Robert Kim",
      age: "3-5 years",
      price: "$11.99",
      rating: 4.8,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1684859634430-3fb8d390e119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYm9vayUyMHNoZWxmfGVufDF8fHx8MTc2MTA4NDM2NXww&ixlib=rb-4.1.0&q=80&w=400",
      tag: "Educational"
    }
  ];

  const getTagColor = (tag) => {
    const colors = {
      "Bestseller": "bg-orange-100 text-orange-700",
      "New Release": "bg-green-100 text-green-700",
      "Award Winner": "bg-purple-100 text-purple-700",
      "Popular": "bg-blue-100 text-blue-700",
      "Educational": "bg-cyan-100 text-cyan-700"
    };
    return colors[tag] || "bg-gray-100 text-gray-700";
  };

  return (
    <section id="books" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-gradient-to-r from-amber-400 to-orange-400 text-white px-5 py-2 rounded-full mb-4 shadow-md">
            ⭐ Curated Collection
          </div>
          <h2 className="text-3xl lg:text-4xl text-gray-800 mb-4">
            Featured Storybooks
          </h2>
          <p className="text-lg text-gray-600">
            Carefully selected titles that captivate young minds and foster a love for reading.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <Card
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-amber-100 group"
            >
              {/* Book Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50">
                <ImageWithFallback
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className={`${getTagColor(book.tag)} px-4 py-2 rounded-full text-xs shadow-md`}>
                    {book.tag}
                  </span>
                </div>
              </div>

              {/* Book Info */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-lg text-gray-800 mb-1">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-600">by {book.author}</p>
                </div>

                {/* Age & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                    {book.age}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm text-gray-800">{book.rating}</span>
                    <span className="text-xs text-gray-500">({book.reviews})</span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl text-gray-800">{book.price}</span>
                  <Button className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white rounded-full shadow-md">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="border-2 border-amber-500 bg-white text-amber-700 hover:bg-amber-50 px-10 py-6 rounded-full shadow-md">
            View All Books →
          </Button>
        </div>
      </div>
    </section>
  );
}
