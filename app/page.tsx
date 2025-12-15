import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ReasonsSection from '@/components/ReasonsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FAQ from '@/components/FAQ';
import DogForm from '@/components/DogForm';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main id="main-content">
        {/* Hero Section with Offer Banner */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white" aria-labelledby="hero-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Offer Banner */}
            <div className="text-center mb-8">
              <p className="text-lg md:text-xl font-semibold mb-2">
                🎁 Get Personalized Recommendations for Your Pup 🎁
              </p>
              <p className="text-sm md:text-base text-blue-100">
                Over 20,000+ happy dogs served!
              </p>
            </div>
            
            <div className="text-center">
              <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                7 Reasons Dog Parents Are Switching to DogMarket
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Personalized nutrition and care products designed specifically for your dog's unique dietary needs, breed, and lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#form"
                  className="bg-white text-blue-600 px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-colors"
                >
                  Get Started
                </a>
                <a
                  href="#reasons"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Stats */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">20,000+</p>
                <p className="text-gray-600">Happy Dogs Served</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">85%</p>
                <p className="text-gray-600">Say Their Dogs Prefer Our Recommendations</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100%</p>
                <p className="text-gray-600">Satisfaction Guarantee</p>
              </div>
            </div>
          </div>
        </section>

        <ReasonsSection />
        <TestimonialsSection />
        <HowItWorksSection />
        <FAQ />
        <DogForm />
      </main>
      <Footer />
    </div>
  );
}

