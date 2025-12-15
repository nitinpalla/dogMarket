'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What makes DogMarket products different?",
    answer: "Our products are carefully curated based on your dog's specific dietary needs, age, breed, and health requirements. We work with veterinarians and nutritionists to ensure every product meets the highest quality standards."
  },
  {
    question: "How do you determine the right products for my dog?",
    answer: "We use the information you provide about your dog's breed, age, weight, dietary needs, and any allergies to recommend the perfect products. Our algorithm matches your dog's profile with products that have been verified for their specific requirements."
  },
  {
    question: "Do you offer products for dogs with allergies?",
    answer: "Yes! We specialize in products for dogs with food allergies and sensitivities. When you fill out our form, be sure to include all known allergies, and we'll only recommend products that are safe for your dog."
  },
  {
    question: "What if my dog has special dietary requirements?",
    answer: "We accommodate all special dietary needs including grain-free, raw food, prescription diets, and more. Just let us know your dog's specific requirements in the form, and we'll tailor our recommendations accordingly."
  },
  {
    question: "How quickly will I receive product recommendations?",
    answer: "After submitting your dog's information, you'll receive personalized product recommendations within 24-48 hours via email. For urgent needs, please contact us directly."
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we ship within the United States and Canada. We're working on expanding to other countries. Sign up for our newsletter to be notified when we launch in your region."
  },
  {
    question: "Can I return products if they don't work for my dog?",
    answer: "Yes, we offer a 30-day satisfaction guarantee. If a product doesn't work for your dog, you can return it for a full refund. Please contact our customer service team to initiate a return."
  },
  {
    question: "Are your products veterinarian-approved?",
    answer: "Many of our products are recommended by veterinarians, and we work closely with veterinary nutritionists to ensure product quality. However, we always recommend consulting with your veterinarian before making significant changes to your dog's diet."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="faq-heading" className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                type="button"
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span className="font-semibold text-gray-900">{item.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-4 text-gray-700">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

