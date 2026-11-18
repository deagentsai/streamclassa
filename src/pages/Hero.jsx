export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
            🚀 New Platform Launching Soon
          </span>
        </div>
        
        <h1 className="animate-fade-in-up delay-1 text-5xl sm:text-7xl font-bold mb-6 leading-tight">
          Learn Live.{' '}
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Grow Beyond.
          </span>
        </h1>
        
        <p className="animate-fade-in-up delay-2 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          StreamClassA connects you with world-class instructors for live streaming classes 
          in technology, art, music, and more. Join a global community of learners today.
        </p>
        
        <div className="animate-fade-in-up delay-3 flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="btn-primary px-8 py-3 text-lg">
            Start Learning ✨
          </button>
          <button className="btn-outline px-8 py-3 text-lg">
            Browse Courses →
          </button>
        </div>

        {/* Trust badges */}
        <div className="animate-fade-in-up delay-4 flex flex-wrap justify-center gap-8 text-gray-500 text-sm">
          <span>🔒 Secure payments</span>
          <span>⚡ Instant access</span>
          <span>🌍 190+ countries</span>
        </div>

        {/* Preview image */}
        <div className="animate-fade-in-up delay-4 mt-16 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop"
              alt="Students learning together" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
