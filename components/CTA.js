import Link from "next/link";

export default function CTA() {
  return (
    <section className="mt-12 bg-tt-gold text-white py-8 rounded-lg text-center">
      <h3 className="text-2xl font-serif">Ready for an Adventure?</h3>
      <p className="mt-3">
        <Link
          href="/books"
          className="mt-4 bg-white text-tt-dark px-6 py-2 rounded-full inline-block"
        >
          Start Exploring Books
        </Link>
      </p>
    </section>
  );
}
