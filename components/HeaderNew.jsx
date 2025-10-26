import { Button } from "./ui/button";
import { BookOpen, Menu, ShoppingCart } from "lucide-react";

export function HeaderNew() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-md transform -rotate-6">
              <BookOpen className="w-6 h-6 text-white transform rotate-6" />
            </div>
            <span className="text-2xl text-gray-800">TinyTales</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#books" className="text-gray-700 hover:text-amber-600 transition-colors">
              Books
            </a>
            <a href="#themes" className="text-gray-700 hover:text-amber-600 transition-colors">
              Themes
            </a>
            <a href="#resources" className="text-gray-700 hover:text-amber-600 transition-colors">
              Resources
            </a>
            <a href="#mission" className="text-gray-700 hover:text-amber-600 transition-colors">
              Our Mission
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:text-amber-600 transition-colors hover:bg-amber-50 rounded-full">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-white text-xs rounded-full flex items-center justify-center shadow-md">
                3
              </span>
            </button>
            <Button className="hidden sm:flex bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white rounded-full px-6 shadow-md">
              Shop Now
            </Button>
            <button className="md:hidden w-9 h-9 flex items-center justify-center text-gray-700">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
