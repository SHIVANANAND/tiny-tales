import { Brain, Heart, TrendingUp, Shield } from "lucide-react";

export function CauseAwareness() {
  const benefits = [
    {
      emoji: "🧠",
      title: "Cognitive Development",
      description: "Reading stimulates brain growth, enhances neural connections, and builds vocabulary at crucial developmental stages.",
      color: "from-blue-100 to-indigo-100"
    },
    {
      emoji: "🛡️",
      title: "Fight Virtual Autism",
      description: "Reduce screen dependency and prevent developmental delays by replacing passive screen time with active reading engagement.",
      color: "from-green-100 to-teal-100"
    },
    {
      emoji: "💖",
      title: "Emotional Intelligence",
      description: "Stories help children understand emotions, build empathy, and develop social awareness through character experiences.",
      color: "from-pink-100 to-rose-100"
    },
    {
      emoji: "📈",
      title: "Academic Success",
      description: "Early readers show stronger performance in all subjects, better focus, and enhanced critical thinking skills.",
      color: "from-orange-100 to-amber-100"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-800 mb-4">
            Why Reading Matters More Than Ever ✨
          </h2>
          <p className="text-lg text-gray-600">
            In a world dominated by screens, reading provides the essential foundation for your child's cognitive, emotional, and social development.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${benefit.color} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-white`}
              >
                <div className="text-5xl mb-4">{benefit.emoji}</div>
                <h3 className="text-lg text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Banner */}
        <div className="mt-16 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-3xl p-8 lg:p-12 text-white shadow-xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl lg:text-6xl mb-3">71%</div>
              <p className="text-amber-50 text-lg">
                Reduction in screen time among families who read together daily
              </p>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl mb-3">2.5x</div>
              <p className="text-amber-50 text-lg">
                Better language skills in children exposed to regular reading
              </p>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl mb-3">15 min</div>
              <p className="text-amber-50 text-lg">
                Daily reading is all it takes to see significant improvements
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
