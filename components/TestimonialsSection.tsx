interface Testimonial {
  dogName: string;
  breed: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    dogName: "Max",
    breed: "Golden Retriever",
    quote: "Food recommendations are personalized and convenient - not to mention healthy for my growing boy. The dietary customization is a plus!",
  },
  {
    dogName: "Bella & Luna",
    breed: "Corgis",
    quote: "The personalized approach makes it affordable and convenient to provide my dogs with the nutrition they need.",
  },
  {
    dogName: "Charlie",
    breed: "German Shepherd",
    quote: "Charlie has been on the recommended plan for a little over a week. He is excited to eat his food, his energy levels are great, coat is shiny, and he has perfect #2's!",
  },
  {
    dogName: "Daisy",
    breed: "Beagle Mix",
    quote: "Loving both the quality recommendations as well as the convenience. I've never seen my picky beagle more eager to eat her food!",
  },
  {
    dogName: "Rocky",
    breed: "English Bulldog",
    quote: "I don't normally write reviews, but my English bulldog has been going nuts for these recommendations! He can't get enough.",
  },
  {
    dogName: "Milo",
    breed: "Maltese",
    quote: "My dog is a senior dog that is the pickiest eater. Happy to say that with DogMarket, he wipes his bowl clean with every meal!",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Hear Firsthand What The 'Bark' Is About
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. DogMarket is recommended by pet parents across the country.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-3">
                  <span className="text-white text-2xl" aria-hidden="true">🐕</span>
                </div>
                <h3 className="text-xl font-semibold">{testimonial.dogName}</h3>
                <p className="text-gray-600 text-sm">{testimonial.breed}</p>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

