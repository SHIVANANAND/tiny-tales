export function FunFacts() {
  const facts = [
    {
      emoji: "🧠",
      fact: "Reading for just 6 minutes can reduce stress by 68%",
      detail: "More effective than listening to music or going for a walk",
      color: "from-purple-200 to-indigo-200"
    },
    {
      emoji: "📚",
      fact: "Children who read at home perform 12% better in school",
      detail: "Reading at home is a stronger predictor of success than family income",
      color: "from-green-200 to-teal-200"
    },
    {
      emoji: "💭",
      fact: "Reading improves imagination 3x more than screen time",
      detail: "Books encourage active visualization while screens provide passive images",
      color: "from-pink-200 to-rose-200"
    },
    {
      emoji: "🌟",
      fact: "Kids exposed to books learn 1.4 million more words by age 5",
      detail: "Compared to children who aren't read to regularly",
      color: "from-orange-200 to-amber-200"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-800 mb-4">
            The Science of Reading 🔬
          </h2>
          <p className="text-lg text-gray-600">
            Research-backed facts that show why books are brain food for growing minds.
          </p>
        </div>

        {/* Facts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((item, index) => {
            return (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${item.color} rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-white`}
              >
                {/* Emoji */}
                <div className="text-5xl mb-4">{item.emoji}</div>

                {/* Fact */}
                <h3 className="text-lg text-gray-800 mb-3 leading-snug">
                  {item.fact}
                </h3>

                {/* Detail */}
                <p className="text-xs text-gray-700 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center bg-gradient-to-r from-amber-200 via-orange-200 to-amber-200 rounded-3xl p-8 shadow-lg border-2 border-amber-300">
          <p className="text-xl text-gray-800">
            <span className="text-3xl mr-2">📖</span>
            <strong>Did you know?</strong> Reading to children from birth develops listening skills, attention span, and emotional bonding — creating readers for life.
          </p>
        </div>
      </div>
    </section>
  );
}
