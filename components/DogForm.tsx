'use client';

import { useState, FormEvent } from 'react';
import { submitDogDetails, DogSubmission } from '@/lib/supabase';

export default function DogForm() {
  const [formData, setFormData] = useState<DogSubmission>({
    dog_name: '',
    dog_age: null,
    dog_breed: '',
    dog_weight: '',
    dietary_needs: '',
    allergies: '',
    special_requirements: '',
    owner_name: '',
    owner_email: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'dog_age' ? (value ? parseInt(value) : null) : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    // Validate required fields
    if (!formData.dog_name || !formData.owner_name || !formData.owner_email) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all required fields.',
      });
      setIsSubmitting(false);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.owner_email)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await submitDogDetails(formData);
      
      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! We\'ve received your information and will contact you soon with personalized product recommendations.',
        });
        // Reset form
        setFormData({
          dog_name: '',
          dog_age: null,
          dog_breed: '',
          dog_weight: '',
          dietary_needs: '',
          allergies: '',
          special_requirements: '',
          owner_name: '',
          owner_email: '',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="form" className="py-16 bg-white" aria-labelledby="form-heading">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 id="form-heading" className="text-3xl font-bold mb-4">
            Tell Us About Your Dog
          </h2>
          <p className="text-gray-600">
            Fill out the form below to receive personalized product recommendations based on your dog's unique needs.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-md" noValidate>
          {/* Owner Information */}
          <fieldset className="space-y-4">
            <legend className="text-xl font-semibold mb-4">Your Information</legend>
            
            <div>
              <label htmlFor="owner_name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name <span className="text-red-500" aria-label="required">*</span>
              </label>
              <input
                type="text"
                id="owner_name"
                name="owner_name"
                required
                value={formData.owner_name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="owner_email" className="block text-sm font-medium text-gray-700 mb-1">
                Your Email <span className="text-red-500" aria-label="required">*</span>
              </label>
              <input
                type="email"
                id="owner_email"
                name="owner_email"
                required
                value={formData.owner_email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                aria-required="true"
              />
            </div>
          </fieldset>

          {/* Dog Information */}
          <fieldset className="space-y-4">
            <legend className="text-xl font-semibold mb-4">Dog Information</legend>
            
            <div>
              <label htmlFor="dog_name" className="block text-sm font-medium text-gray-700 mb-1">
                Dog's Name <span className="text-red-500" aria-label="required">*</span>
              </label>
              <input
                type="text"
                id="dog_name"
                name="dog_name"
                required
                value={formData.dog_name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                aria-required="true"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="dog_age" className="block text-sm font-medium text-gray-700 mb-1">
                  Age (years)
                </label>
                <input
                  type="number"
                  id="dog_age"
                  name="dog_age"
                  min="0"
                  max="30"
                  value={formData.dog_age || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="dog_weight" className="block text-sm font-medium text-gray-700 mb-1">
                  Weight
                </label>
                <input
                  type="text"
                  id="dog_weight"
                  name="dog_weight"
                  placeholder="e.g., 25 lbs"
                  value={formData.dog_weight}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="dog_breed" className="block text-sm font-medium text-gray-700 mb-1">
                Breed
              </label>
              <input
                type="text"
                id="dog_breed"
                name="dog_breed"
                placeholder="e.g., Golden Retriever, Mixed, etc."
                value={formData.dog_breed}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </fieldset>

          {/* Dietary Information */}
          <fieldset className="space-y-4">
            <legend className="text-xl font-semibold mb-4">Dietary Needs & Preferences</legend>
            
            <div>
              <label htmlFor="dietary_needs" className="block text-sm font-medium text-gray-700 mb-1">
                Dietary Needs
              </label>
              <textarea
                id="dietary_needs"
                name="dietary_needs"
                rows={3}
                placeholder="e.g., Grain-free, High protein, Senior diet, etc."
                value={formData.dietary_needs}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="allergies" className="block text-sm font-medium text-gray-700 mb-1">
                Known Allergies
              </label>
              <textarea
                id="allergies"
                name="allergies"
                rows={3}
                placeholder="e.g., Chicken, Wheat, Dairy, etc."
                value={formData.allergies}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="special_requirements" className="block text-sm font-medium text-gray-700 mb-1">
                Special Requirements
              </label>
              <textarea
                id="special_requirements"
                name="special_requirements"
                rows={3}
                placeholder="Any other information we should know about your dog's health or dietary needs"
                value={formData.special_requirements}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </fieldset>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-busy={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit & Get Recommendations'}
            </button>
          </div>

          {/* Status Message */}
          {submitStatus.type && (
            <div
              role="alert"
              className={`p-4 rounded-md ${
                submitStatus.type === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            >
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

