import { Button } from "./ui/button";

export function CTANew() {
  return (
    <section className="py-24 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 relative overflow-hidden">
      {/* Decorative Stars */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-10 left-10 text-6xl text-white">✨</div>
        <div className="absolute top-20 right-20 text-4xl text-white">⭐</div>
        <div className="absolute bottom-20 left-1/4 text-5xl text-white">🌟</div>
        <div className="absolute bottom-10 right-10 text-6xl text-white">✨</div>
        <div className="absolute top-1/2 right-1/3 text-3xl text-white">⭐</div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl text-white max-w-3xl mx-auto leading-tight">
            Ready for an Adventure? 🚀
          </h2>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-amber-50 max-w-2xl mx-auto">
            Join thousands of families who've made the joyful switch from screens to stories. Your child's reading journey starts here!
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              size="lg" 
              className="bg-white text-amber-700 hover:bg-amber-50 px-12 py-7 rounded-full shadow-2xl hover:shadow-3xl transition-all text-lg"
            >
              Start Exploring Books →
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12 pt-8 text-white">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="text-sm">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚚</span>
              <span className="text-sm">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💯</span>
              <span className="text-sm">30-Day Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
