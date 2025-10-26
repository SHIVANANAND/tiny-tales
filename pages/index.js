import { HeaderNew } from "../components/HeaderNew";
import { HeroNew } from "../components/HeroNew";
import { ThemeCategories } from "../components/ThemeCategories";
import { CauseAwareness } from "../components/CauseAwareness";
import { ParentsGuide } from "../components/ParentsGuide";
import { FunFacts } from "../components/FunFacts";
import { FeaturedBooks } from "../components/FeaturedBooks";
import { CTANew } from "../components/CTANew";
import { FooterNew } from "../components/FooterNew";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-amber-50 flex flex-col">
      <HeaderNew />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-12"><HeroNew /></section>
          <section className="mb-12"><ThemeCategories /></section>
          <section className="mb-12"><CauseAwareness /></section>
          <section className="mb-12"><ParentsGuide /></section>
          <section className="mb-12"><FunFacts /></section>
          <section className="mb-12"><FeaturedBooks /></section>
          <section className="mb-12"><CTANew /></section>
        </div>
      </main>
  {/* FooterNew is rendered globally in _app.js */}
    </div>
  );
}
