import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductSection from '@/components/ProductSection';
import FAQ from '@/components/FAQ';
import DogForm from '@/components/DogForm';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main id="main-content">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20" aria-labelledby="hero-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold mb-6">
                Premium Dog Products Tailored to Your Best Friend
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Discover personalized nutrition and care products designed specifically for your dog's unique dietary needs, breed, and lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#form"
                  className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-colors"
                >
                  Get Started
                </a>
                <a
                  href="#products"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-colors"
                >
                  View Products
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Copy Section */}
        <section className="py-16 bg-gray-50" aria-labelledby="about-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="about-heading" className="text-3xl font-bold text-center mb-8">
              Why Choose DogMarket?
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-lg mb-4">
                At DogMarket, we understand that every dog is unique. That's why we've created a personalized approach to dog nutrition and care that takes into account your dog's breed, age, weight, dietary restrictions, and individual health needs.
              </p>
              <p className="text-lg mb-4">
                Our team of veterinary nutritionists and pet care experts work together to curate the finest selection of dog products. Whether your dog has food allergies, requires a special diet, or simply needs the best nutrition available, we're here to help.
              </p>
              <p className="text-lg">
                We believe that proper nutrition is the foundation of a happy, healthy life for your furry companion. That's why we're committed to providing you with products that are not only high-quality but also perfectly matched to your dog's specific requirements.
              </p>
            </div>
          </div>
        </section>

        <ProductSection />
        <FAQ />
        <DogForm />
      </main>
      <Footer />
    </div>
  );
}

