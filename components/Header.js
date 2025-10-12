import { useState } from "react";
import useTheme from "../lib/useTheme";
import { useCart } from "../lib/cartContext";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const { items } = useCart() || { items: [] };

  const count = items ? items.reduce((s, i) => s + (i.qty || 0), 0) : 0;

  return (
    <header className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm sticky top-0 z-40 shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-tt-gold rounded flex items-center justify-center font-bold text-tt-dark">
              📚
            </div>
            <div className="text-2xl font-serif font-bold text-tt-dark dark:text-white">
              TinyTales
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <button
            onClick={toggle}
            className="px-3 py-1 border rounded text-sm"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>

          <Link href="/cart" className="relative">
            🛒
            {count > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full px-1">
                {count}
              </span>
            )}
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="p-2 border rounded"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-3">
            <button onClick={toggle} className="text-left">
              {theme === "dark" ? "Light" : "Dark"}
            </button>
            <Link href="/cart" className="text-left">
              Cart {count > 0 ? `(${count})` : ""}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
