import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const slides = [
  { id: 1, src: "/hero.jpg", alt: "kids reading" },
  { id: 2, src: "/books/book-1.jpg", alt: "kids reading 2" },
  { id: 3, src: "/stories/story.png", alt: "kids reading 3" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  function startAutoplay() {
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);
  }

  function stopAutoplay() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  // keyboard navigation
  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // simple swipe support
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let startX = 0;
    let moved = false;
    function onStart(e) {
      stopAutoplay();
      startX = e.touches ? e.touches[0].clientX : e.clientX;
      moved = false;
    }
    function onMove(e) {
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const dx = x - startX;
      if (Math.abs(dx) > 20) moved = true;
    }
    function onEnd(e) {
      const x = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
      const dx = x - startX;
      if (!moved) {
        startAutoplay();
        return;
      }
      if (dx > 40) prev();
      else if (dx < -40) next();
      startAutoplay();
    }
    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchmove", onMove, { passive: true });
    el.addEventListener("touchend", onEnd);
    el.addEventListener("mousedown", onStart);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseup", onEnd);
    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", onEnd);
      el.removeEventListener("mousedown", onStart);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseup", onEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function prev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }
  function next() {
    setIndex((i) => (i + 1) % slides.length);
  }

  return (
    <section className="mt-6 grid md:grid-cols-2 gap-6 items-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
          Welcome to <span className="text-tt-gold">TinyTales</span>!
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl">
          Explore our enchanting collection of handpicked books designed to
          spark imagination and curiosity in young minds.
        </p>
        <div className="mt-6">
          <Link
            href="/books"
            className="bg-tt-gold text-white px-6 py-3 rounded-full inline-block font-semibold shadow-md"
          >
            Shop Now
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <div
          ref={containerRef}
          className="relative w-full md:w-[640px] bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden"
        >
          <div className="relative w-full h-72 md:h-80">
            {slides.map((s, i) => (
              <div
                key={s.id}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  i === index ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 640px, 100vw"
                />
              </div>
            ))}
          </div>

          {/* controls */}
          <button
            aria-label="Previous slide"
            onClick={() => {
              prev();
              startAutoplay();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-700/70 rounded-full p-2 shadow"
          >
            ‹
          </button>
          <button
            aria-label="Next slide"
            onClick={() => {
              next();
              startAutoplay();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-700/70 rounded-full p-2 shadow"
          >
            ›
          </button>

          {/* dots */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex items-center gap-3 z-20">
            {slides.map((s, i) => (
              <button
                key={s.id}
                aria-label={`Go to slide ${i + 1}`}
                aria-pressed={i === index}
                onClick={() => {
                  setIndex(i);
                  startAutoplay();
                }}
                className={`w-3.5 h-3.5 md:w-4 md:h-4 rounded-full flex-shrink-0 shadow-lg border border-white/40 ${
                  i === index ? "bg-white" : "bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
