import { Button } from './ui/button';
import { MapPin, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  scrollToMenu: () => void;
}

export function Hero({ scrollToMenu }: HeroProps) {
  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwdHJ1Y2t8ZW58MXx8fHwxNzYxOTExMTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Food truck"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl text-white">
          <div className="inline-block bg-red-600 px-4 py-2 rounded-full mb-6">
            <span className="text-sm">🔥 Now Open!</span>
          </div>
          <h1 className="text-white mb-6">
            Premium Burgers<br />
            Made Fresh Daily
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Experience the finest gourmet burgers crafted by our chef-owner. 
            Made with locally sourced ingredients and passion for great food.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <MapPin className="w-5 h-5 text-red-400" />
              <span>Downtown - 5th & Main</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Clock className="w-5 h-5 text-red-400" />
              <span>Open Now: 11AM - 8PM</span>
            </div>
          </div>
          <div className="flex gap-4">
            <Button 
              onClick={scrollToMenu}
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              View Menu
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
              onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Find Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
