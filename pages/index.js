import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ThemeCards from "../components/ThemeCards";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>TinyTales - Kids Bookstore</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Hero />
          <section className="mt-12">
            <h2 className="text-center text-2xl font-serif text-tt-gold">
              Discover by Theme
            </h2>
            <ThemeCards />
          </section>
          <CTA />
        </main>
      </div>
    </>
  );
}
