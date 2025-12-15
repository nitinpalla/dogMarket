interface Reason {
  number: string;
  title: string;
  description: string;
  highlight?: string;
}

const reasons: Reason[] = [
  {
    number: "1",
    title: "Always Know What's in The Bowl",
    description: "Our recipes are developed with vet nutritionists and made from healthy, wholesome ingredients that humans trust. That means no artificial flavors or colors and no added fillers.",
  },
  {
    number: "2",
    title: "A Healthier, Happier Pup",
    description: "All plans provide a complete and balanced diet that supports gut & immune health, contributes to a shiny coat, and promotes an overall active lifestyle.",
    highlight: "P.S. we are not liable for zoomies!",
  },
  {
    number: "3",
    title: "Get More 'Bark' for Your Buck",
    description: "Our personalized plans are affordable and designed to fit your budget. Plus, our products are shelf-stable and require zero prep. After all, time is money, so we figured we'd save you some of that too!",
  },
  {
    number: "4",
    title: "Personalized to Your Pup",
    description: "We believe that every dog is unique. That's why we personalize recommendations based on your dog's breed, age, weight, dietary needs, and health requirements.",
  },
  {
    number: "5",
    title: "Picky Eater Approved",
    description: "More than 85% of customers say their dog prefers our recommendations to their old food. With a wide variety of options to choose from, we're confident you'll find something they'll love.",
  },
  {
    number: "6",
    title: "More Years Chasing Squirrels",
    description: "Studies show that maintaining a healthy weight can add up to 2.5 years to your dog's life! Our plans are personalized to each pup, so you can rest assured they get the nutrition and caloric intake they need.",
  },
  {
    number: "7",
    title: "It's Risk Free (Fur-Real)",
    description: "Give us a try today and get personalized recommendations. Not for your Pup? No worries! Our 100% satisfaction guarantee means you and your dog can 'paws' and think before committing to a new diet.",
  },
];

export default function ReasonsSection() {
  return (
    <section id="reasons" className="py-16 bg-white" aria-labelledby="reasons-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="reasons-heading" className="text-3xl md:text-4xl font-bold mb-4">
            7 Reasons Dog Parents Are Switching to DogMarket
          </h2>
        </div>

        <div className="space-y-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {reason.number}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {reason.description}
                </p>
                {reason.highlight && (
                  <p className="text-gray-600 italic mt-2">{reason.highlight}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

