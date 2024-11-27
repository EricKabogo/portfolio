'use client'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    alert('Message sent! (Note: Actual submission not implemented)');
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Contact Me
        </h1>

        <div className="flex items-center justify-center">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Get in Touch
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <EnvelopeIcon className="h-8 w-8 text-slate-500" />
                <div>
                  <p className="font-bold text-gray-700">Email</p>
                  <a
                    href="mailto:kabogoeric@gmail.com"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    kabogoeric@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <PhoneIcon className="h-8 w-8 text-blue-500" />
                <div>
                  <p className="font-bold text-gray-700">Phone</p>
                  <a
                    href="tel:+254706003581"
                    className="text-gray-600 hover:text-blue-600">+254 706003581</a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPinIcon className="h-8 w-8 text-red-600" />
                <div>
                  <p className="font-bold text-gray-700">Location</p>
                  <p className="text-gray-600">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* <form 
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="mb-6">
              <label 
                htmlFor="name" 
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input 
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 
                rounded-lg focus:outline-none focus:ring-2 
                focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-6">
              <label 
                htmlFor="email" 
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input 
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 
                rounded-lg focus:outline-none focus:ring-2 
                focus:ring-blue-500"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="mb-6">
              <label 
                htmlFor="message" 
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 
                rounded-lg focus:outline-none focus:ring-2 
                focus:ring-blue-500"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-600 text-white 
              py-3 rounded-lg hover:bg-blue-700 
              transition-colors"
            >
              Send Message
            </button>
          </form> */}
        </div>
      </div>
    </div>
  );
}