import { GradientText } from './ui/GradientText';
import { GlassCard } from './ui/GlassCard';

export const Footer = () => (
  <footer className="glass-card border-t border-gray-700 mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">
            <GradientText>LUXE</GradientText>
          </h3>
          <p className="text-gray-400">Premium luxury goods for the discerning customer.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Shop</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-yellow-400 transition-colors">New Arrivals</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Best Sellers</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Sale</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Size Guide</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Returns</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Newsletter</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-white bg-opacity-10 border border-gray-600 rounded-l-xl focus:outline-none focus:border-yellow-400"
            />
            <button className="px-6 py-2 bg-yellow-500 text-black rounded-r-xl hover:bg-yellow-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2024 LUXE. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
