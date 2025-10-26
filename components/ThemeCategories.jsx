import { Button } from "./ui/button";
import { Rocket, Sparkles, Brain, Heart, Moon } from "lucide-react";

export function ThemeCategories() {
  const themes = [
    {
      icon: Rocket,
      title: "Adventures",
      color: "from-indigo-400 to-indigo-600",
      bgColor: "bg-gradient-to-br from-indigo-500 to-indigo-700",
      stars: true
    },
    {
      icon: Sparkles,
      title: "Fairy Tales",
      color: "from-pink-400 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-500 to-pink-600",
      stars: true
    },
    {
      icon: Brain,
      title: "Learning & STEM",
      color: "from-teal-400 to-green-600",
      bgColor: "bg-gradient-to-br from-teal-500 to-green-600",
      stars: false
    },
    {
      icon: Heart,
      title: "Empathy",
      color: "from-rose-400 to-red-600",
      bgColor: "bg-gradient-to-br from-rose-500 to-red-600",
      stars: true
    },
    {
      icon: Moon,
      title: "Bedtime Stories",
      color: "from-slate-400 to-indigo-600",
      bgColor: "bg-gradient-to-br from-slate-500 to-indigo-700",
      stars: true
    }
  ];

  return (
    <section id="themes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 mb-3">
            Discover by Theme
          </h2>
          <p className="text-lg text-gray-600">
            Find the perfect stories for every mood and milestone
          </p>
        </div>

        {/* Theme Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {themes.map((theme, index) => {
            const Icon = theme.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className={`${theme.bgColor} rounded-3xl p-8 aspect-square flex flex-col items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden`}>
                  {/* Stars decoration */}
                  {theme.stars && (
                    <>
                      <div className="absolute top-4 left-4 text-yellow-300 opacity-80">⭐</div>
                      <div className="absolute top-6 right-6 text-yellow-200 opacity-60 text-xs">✨</div>
                      <div className="absolute bottom-8 right-4 text-yellow-300 opacity-70 text-sm">⭐</div>
                    </>
                  )}
                  
                  {/* Icon */}
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {theme.title === "Adventures" && <div className="text-6xl">🚀</div>}
                    {theme.title === "Fairy Tales" && <div className="text-6xl">🧚</div>}
                    {theme.title === "Learning & STEM" && <div className="text-6xl">🧠</div>}
                    {theme.title === "Empathy" && <div className="text-6xl">❤️</div>}
                    {theme.title === "Bedtime Stories" && <div className="text-6xl">🌙</div>}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-center mb-3 z-10">
                    {theme.title}
                  </h3>
                  
                  {/* Button */}
                  <Button 
                    size="sm" 
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-white/30 border rounded-full px-5 z-10"
                    variant="outline"
                  >
                    Explore
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
