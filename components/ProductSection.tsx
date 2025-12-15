interface Product {
  name: string;
  description: string;
  features: string[];
  image?: string;
}

const products: Product[] = [
  {
    name: 'Premium Dog Food',
    description: 'Nutritionally balanced meals tailored to your dog\'s specific needs, age, and activity level.',
    features: ['Grain-free options', 'All-natural ingredients', 'Veterinarian approved', 'Customizable portions']
  },
  {
    name: 'Specialty Treats',
    description: 'Healthy, delicious treats perfect for training, rewarding, or just showing your pup some love.',
    features: ['Limited ingredient options', 'Allergy-friendly varieties', 'Training-sized portions', 'Organic options']
  },
  {
    name: 'Dietary Supplements',
    description: 'Essential vitamins, minerals, and supplements to support your dog\'s overall health and wellness.',
    features: ['Joint support', 'Digestive health', 'Coat & skin care', 'Immune system support']
  },
  {
    name: 'Prescription Diets',
    description: 'Medically-formulated diets for dogs with specific health conditions or dietary restrictions.',
    features: ['Veterinary recommended', 'Condition-specific formulas', 'Easy digestion', 'Complete nutrition']
  }
];

export default function ProductSection() {
  return (
    <section id="products" className="py-16 bg-white" aria-labelledby="products-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="products-heading" className="text-3xl font-bold mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium dog products, each designed to meet your furry friend's unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-4xl" aria-hidden="true">🐕</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
              </div>
              <ul className="space-y-2" role="list">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">{feature}</span>
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

