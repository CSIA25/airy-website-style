
import { Coffee, User, ShoppingCart } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-coffee-900/95 backdrop-blur-sm border-b border-coffee-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-coffee-200" />
              <span className="font-playfair text-2xl font-bold text-coffee-100">Coffee Eco</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-coffee-200 hover:text-coffee-100 transition-colors duration-200">Home</a>
              <a href="#" className="text-coffee-200 hover:text-coffee-100 transition-colors duration-200">Menu</a>
              <a href="#" className="text-coffee-200 hover:text-coffee-100 transition-colors duration-200">Story</a>
              <a href="#" className="text-coffee-200 hover:text-coffee-100 transition-colors duration-200">Contact</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-coffee-200 hover:text-coffee-100 transition-colors duration-200">
              <User className="h-5 w-5" />
            </button>
            <button className="text-coffee-200 hover:text-coffee-100 transition-colors duration-200">
              <ShoppingCart className="h-5 w-5" />
            </button>
            <button className="bg-coffee-600 hover:bg-coffee-500 text-white px-4 py-2 rounded-lg transition-colors duration-200">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
