import Image from "next/image";
import Link from "next/link";
export default function Hero() {
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
        <div className="relative w-full md:w-[640px] bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden">
          <Image
            src="/hero.jpg"
            alt="kids reading"
            width={1200}
            height={600}
            className="w-full h-72 md:h-80 object-cover"
          />
          <div className="absolute left-6 top-6 bg-tt-dark text-white px-4 py-2 rounded-lg shadow">
            New Adventures Await!
          </div>
          <div className="absolute right-6 bottom-6 flex items-center gap-3">
            <span className="inline-block h-3 w-3 bg-white rounded-full opacity-80"></span>
            <span className="inline-block h-3 w-3 bg-white/60 rounded-full"></span>
            <span className="inline-block h-3 w-3 bg-white/40 rounded-full"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
