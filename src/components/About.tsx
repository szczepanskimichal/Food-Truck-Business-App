import { Card, CardContent } from './ui/card';
import { Award, Heart, Leaf, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1681270543584-8e541a1bb056?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZ3xlbnwxfHx8fDE3NjE4NTYzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Chef cooking"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-2xl shadow-xl">
              <p className="text-4xl">4+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-gray-900 mb-6">Meet Chef Marcus</h2>
            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                What started as a passion project in 2020 has grown into one of the city's 
                most beloved food trucks. Chef Marcus brings over 15 years of culinary 
                experience from fine dining restaurants to the streets.
              </p>
              <p>
                Every burger is a testament to quality - we source our beef from local farms, 
                bake our brioche buns fresh daily, and hand-cut our fries. It's not fast food, 
                it's food made fast with care.
              </p>
              <p>
                Our mission is simple: serve honest, delicious food that brings people together. 
                Whether you're grabbing a quick lunch or meeting friends for dinner, we're here 
                to make your day a little better, one burger at a time.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        {value.icon}
                      </div>
                      <div>
                        <h3 className="text-sm text-gray-900 mb-1">{value.title}</h3>
                        <p className="text-xs text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const values = [
  {
    title: 'Local Sourcing',
    description: 'Supporting local farmers',
    icon: <Leaf className="w-5 h-5 text-red-600" />,
  },
  {
    title: 'Quality First',
    description: 'Premium ingredients only',
    icon: <Award className="w-5 h-5 text-red-600" />,
  },
  {
    title: 'Made with Love',
    description: 'Every burger, every time',
    icon: <Heart className="w-5 h-5 text-red-600" />,
  },
  {
    title: 'Community',
    description: 'Serving our neighbors',
    icon: <Users className="w-5 h-5 text-red-600" />,
  },
];
