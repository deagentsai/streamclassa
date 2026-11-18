export default function PricingSection() {
  const pricingPlans = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      description: "For casual learners exploring new skills.",
      features: ["Access to 50+ courses", "Community Slack access", "Recording replays (30 days)", "Basic certificates"],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Pro",
      price: "$79",
      period: "/month",
      description: "For dedicated learners serious about growth.",
      features: ["Access to all 500+ courses", "Live class participation", "Recording replays (12 months)", "Instructor Q&A channels", "Pro certificates & badges", "Priority support"],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For teams and organizations.",
      features: ["Everything in Pro", "Admin dashboard & analytics", "Custom learning paths", "LMS integration", "Dedicated account manager"],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your learning needs. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative p-8 rounded-xl border ${
                plan.popular 
                  ? 'border-purple-500 ring-2 ring-purple-100' 
                  : 'border-gray-200 hover:border-purple-300'
              } transition-all hover:shadow-lg`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              )}
              
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-500 text-sm mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>

              <button className={`w-full py-3 px-4 rounded-lg font-semibold mb-8 ${
                plan.popular 
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'border border-gray-300 hover:border-purple-500 hover:text-purple-600'
              }`}>
                {plan.cta}
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
