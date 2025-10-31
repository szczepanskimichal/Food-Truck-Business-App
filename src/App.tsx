import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Location } from './components/Location';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Beef, MapPin, Clock, Phone } from 'lucide-react';

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center">
                <Beef className="w-6 h-6 text-white" />
              </div>
              <span className="text-gray-900">The Burger Truck</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('menu')} className="text-gray-700 hover:text-red-600 transition-colors">
                Menu
              </button>
              <button onClick={() => scrollToSection('location')} className="text-gray-700 hover:text-red-600 transition-colors">
                Location
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-red-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-red-600 transition-colors">
                Contact
              </button>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>11AM - 8PM</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        <Hero scrollToMenu={() => scrollToSection('menu')} />
        <Menu />
        <Location />
        <About />
        <Contact />
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center">
                  <Beef className="w-6 h-6 text-white" />
                </div>
                <span>The Burger Truck</span>
              </div>
              <p className="text-gray-400 text-sm">
                Serving the best gourmet burgers on wheels since 2020.
              </p>
            </div>
            <div>
              <h3 className="mb-4">Hours</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Monday - Friday: 11:00 AM - 8:00 PM</p>
                <p>Saturday - Sunday: 12:00 PM - 9:00 PM</p>
              </div>
            </div>
            <div>
              <h3 className="mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (555) 123-4567
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Downtown Area
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 The Burger Truck. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
