import { Button } from "./ui/button";
import { ImageWithFallback } from "./ImageFallback";

export function HeroNew() {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Hero Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            {/* Left Content */}
            <div className="p-8 lg:p-12 space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl lg:text-5xl text-gray-800 leading-tight">
                  Welcome to <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Tiny</span>
                  <span className="text-gray-800">Tales</span>
                  <span className="text-amber-600">!</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Explore our enchanting collection of handpicked books designed to spark imagination and curiosity in young minds.
                </p>
              </div>

              <Button className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                Shop Now
              </Button>
            </div>

            {/* Right Image */}
            <div className="relative h-80 lg:h-96 bg-gradient-to-br from-amber-100 to-orange-100">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1721687335590-2e845e641770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHJlYWRpbmclMjB0ZW50fGVufDF8fHx8MTc2MTA4NTIwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Children reading in tent"
                className="w-full h-full object-cover"
              />
              
              {/* Floating Badge */}
              <div className="absolute top-4 right-4 bg-gray-900 text-white px-4 py-3 rounded-2xl shadow-lg">
                <div className="text-sm mb-1">New Adventures Await!</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 lg:gap-16">
          <div className="text-center">
            <div className="text-4xl mb-1">🎉</div>
            <div className="text-2xl text-gray-800">10,000+</div>
            <div className="text-sm text-gray-600">Happy Families</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-1">📚</div>
            <div className="text-2xl text-gray-800">50,000+</div>
            <div className="text-sm text-gray-600">Books Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-1">⭐</div>
            <div className="text-2xl text-gray-800">4.9/5</div>
            <div className="text-sm text-gray-600">Parent Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-1">🧠</div>
            <div className="text-2xl text-gray-800">71%</div>
            <div className="text-sm text-gray-600">Less Screen Time</div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-amber-300 rounded-full opacity-10 blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-300 rounded-full opacity-10 blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-300 rounded-full opacity-10 blur-xl"></div>
    </section>
  );
}
