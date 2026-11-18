export default function FeaturesSection() {
  const features = [
    {
      icon: "📡",
      title: "Live Interactive Classes",
      description: "Real-time video with Q&A, polls, and breakout rooms."
    },
    {
      icon: "🎬",
      title: "Recorded Sessions",
      description: "Never miss a lesson — watch replays anytime for 12 months."
    },
    {
      icon: "👨‍🏫",
      title: "Expert Instructors",
      description: "Learn from industry professionals with proven track records."
    },
    {
      icon: "💬",
      title: "Community & Support",
      description: "Dedicated Slack channels and peer study groups."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why StreamClassA?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everething you need to learn effectively — and everything your instructor needs to teach brilliantly.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border transition-transform hover:scale-105"
              style={{animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`}}
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
