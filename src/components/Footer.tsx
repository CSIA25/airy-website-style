
import { Coffee, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-coffee-900 text-coffee-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-coffee-400" />
              <span className="font-playfair text-2xl font-bold text-white">Coffee Eco</span>
            </div>
            <p className="text-coffee-300 leading-relaxed">
              Crafting exceptional coffee experiences since 2020. Every cup tells a story of passion, quality, and community.
            </p>
          </div>
          
          <div>
            <h4 className="font-playfair text-xl font-semibold text-white mb-4">Our Coffee</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Single Origin</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">House Blends</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Espresso</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Cold Brew</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair text-xl font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-coffee-400" />
                <span className="text-sm">123 Coffee Street, Bean City</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-coffee-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-coffee-400" />
                <span className="text-sm">hello@coffeeeco.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-coffee-400" />
                <span className="text-sm">7:00 AM - 9:00 PM</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-playfair text-xl font-semibold text-white mb-4">Follow Us</h4>
            <div className="space-y-2">
              <a href="#" className="block hover:text-white transition-colors duration-200">Instagram</a>
              <a href="#" className="block hover:text-white transition-colors duration-200">Facebook</a>
              <a href="#" className="block hover:text-white transition-colors duration-200">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-coffee-800 mt-12 pt-8 text-center">
          <p className="text-coffee-400">
            © 2024 Coffee Eco. All rights reserved. Made with ❤️ and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
