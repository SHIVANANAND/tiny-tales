const themes = [
  { title: "Adventures", color: "from-indigo-900 to-indigo-700", emoji: "🧭" },
  { title: "Fairy Tales", color: "from-pink-800 to-pink-600", emoji: "🧚" },
  { title: "Learning & STEM", color: "from-teal-700 to-teal-500", emoji: "🔬" },
  { title: "Empathy", color: "from-slate-800 to-slate-700", emoji: "🤝" },
  {
    title: "Bedtime Stories",
    color: "from-violet-700 to-violet-500",
    emoji: "🌙",
  },
  {
    title: "Animals & Nature",
    color: "from-green-700 to-green-500",
    emoji: "🦋",
  },
];

import Link from "next/link";

export default function ThemeCards() {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {themes.map((t) => (
        <div
          key={t.title}
          className={`p-4 rounded-xl shadow-xl bg-gradient-to-br ${t.color} text-white flex flex-col items-center tt-card`}
        >
          <div
            className="h-28 w-28 bg-white/8 rounded-xl mb-4 shadow-inner flex items-center justify-center text-5xl"
            role="img"
            aria-label={`${t.title} icon`}
          >
            {t.emoji}
          </div>
          <div className="font-serif text-lg font-semibold text-center">
            {t.title}
          </div>
          <Link
            href={{ pathname: "/books", query: { theme: t.title } }}
            className="mt-4 bg-tt-gold text-tt-dark px-4 py-1 rounded"
          >
            Explore
          </Link>
        </div>
      ))}
    </div>
  );
}
