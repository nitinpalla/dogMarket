interface Step {
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    title: "Tell us about your pup",
    description: "Take our quick 3-minute quiz, and we'll personalize a meal plan that best suits your pooch based on their age, weight, activity and more.",
  },
  {
    title: "Select your plan",
    description: "Choose from a selection of nutritious options with the perfect balance of proteins, vegetables and superfoods tailored to your dog's needs.",
  },
  {
    title: "Try risk-free",
    description: "We'll send you personalized recommendations to make sure your dog gives it two lickstastic paws up. Otherwise, use our 100% satisfaction guarantee.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 bg-white" aria-labelledby="how-it-works-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Here's How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#form"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

