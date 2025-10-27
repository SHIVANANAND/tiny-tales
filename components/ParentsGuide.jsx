import { Card } from "./ui/card.jsx";
import { Clock, Users, Sparkles, Calendar, Award, Volume2 } from "lucide-react";

export function ParentsGuide() {
  const tips = [
    {
      emoji: "⏰",
      title: "Create a Reading Routine",
      description: "Set aside 15-20 minutes daily at the same time. Consistency builds habits that last a lifetime.",
      action: "Start with bedtime stories"
    },
    {
      emoji: "🎭",
      title: "Make it Interactive",
      description: "Ask questions, discuss characters, and let your child predict what happens next. Engagement deepens comprehension.",
      action: "Use different voices for characters"
    },
    {
      emoji: "✨",
      title: "Let Them Choose",
      description: "Give children autonomy in selecting books. When they pick what interests them, they're more likely to engage.",
      action: "Visit the library together"
    },
    {
      emoji: "🏠",
      title: "Create a Cozy Space",
      description: "Designate a comfortable reading nook with good lighting, pillows, and easy access to books.",
      action: "Add a reading chair or beanbag"
    },
    {
      emoji: "🏆",
      title: "Celebrate Progress",
      description: "Use a reading chart, stickers, or a reward system to acknowledge milestones and keep motivation high.",
      action: "Track books completed monthly"
    },
    {
      emoji: "👨‍👩‍👧",
      title: "Be a Role Model",
      description: "Children mimic what they see. Let them catch you reading for pleasure to normalize the habit.",
      action: "Share what you're reading"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-gradient-to-r from-amber-400 to-orange-400 text-white px-5 py-2 rounded-full mb-4 shadow-md">
            📖 Parent Resources
          </div>
          <h2 className="text-3xl lg:text-4xl text-gray-800 mb-4">
            6 Fun Ways to Get Your Kids Hooked on Books
          </h2>
          <p className="text-lg text-gray-600">
            Proven strategies from child development experts and fellow parents who've successfully built reading habits.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => {
            return (
              <Card
                key={index}
                className="bg-gradient-to-br from-white to-amber-50 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-amber-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="text-4xl">{tip.emoji}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg text-gray-800 mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                      {tip.description}
                    </p>
                    <div className="inline-flex items-center text-sm text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                      <span>💡 {tip.action}</span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Box */}
        <div className="mt-12 bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 rounded-3xl p-8 text-center shadow-lg border-2 border-amber-200">
          <div className="text-4xl mb-3">📚</div>
          <h3 className="text-2xl text-gray-800 mb-2">
            Want More Expert Guidance?
          </h3>
          <p className="text-gray-700 mb-5 text-lg">
            Download our free "Parent's Reading Starter Kit" with age-specific tips and book recommendations.
          </p>
          <button className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all">
            Get Free Guide 🎁
          </button>
        </div>
      </div>
    </section>
  );
}
