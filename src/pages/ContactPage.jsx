import { useState } from 'react';
import { GlassCard, GradientText } from '../components/ui';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! Our concierge team will contact you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          <GradientText>Contact Our Concierge</GradientText>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Our dedicated team is here to assist you with any questions or special requests you may have.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <GlassCard className="p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-xl focus:outline-none focus:border-yellow-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-xl focus:outline-none focus:border-yellow-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-xl focus:outline-none focus:border-yellow-400"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="product">Product Question</option>
                  <option value="order">Order Support</option>
                  <option value="vip">VIP Membership</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-xl focus:outline-none focus:border-yellow-400 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </GlassCard>
        </div>

        <div className="space-y-8">
          <GlassCard className="p-8">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-yellow-400">Phone</h4>
                <p className="text-gray-300">+1 (555) 123-LUXE</p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-400">Email</h4>
                <p className="text-gray-300">concierge@luxe.com</p>
              </div>
              <div>
                <h4 className="font-medium text-yellow-400">Hours</h4>
                <p className="text-gray-300">Monday - Friday: 9AM - 8PM EST</p>
                <p className="text-gray-300">Saturday - Sunday: 10AM - 6PM EST</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-8">
            <h3 className="text-xl font-semibold mb-4">VIP Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Personal Shopping Assistance</li>
              <li>• Priority Customer Support</li>
              <li>• Exclusive Product Access</li>
              <li>• Complimentary Gift Wrapping</li>
              <li>• White Glove Delivery</li>
            </ul>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};
