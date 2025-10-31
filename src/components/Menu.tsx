import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Flame, Leaf } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Menu() {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Our Signature Burgers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every burger is handcrafted with premium ingredients and cooked to perfection by our chef-owner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyfGVufDF8fHx8MTc2MTgxNDI3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {item.isSpicy && (
                  <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full flex items-center gap-1">
                    <Flame className="w-4 h-4" />
                    <span className="text-xs">Spicy</span>
                  </div>
                )}
                {item.isVegetarian && (
                  <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full flex items-center gap-1">
                    <Leaf className="w-4 h-4" />
                    <span className="text-xs">Veggie</span>
                  </div>
                )}
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <span className="text-red-600">${item.price}</span>
                </div>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Includes:</p>
                  <div className="flex flex-wrap gap-2">
                    {item.ingredients.map((ingredient, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {ingredient}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sides & Drinks */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Sides</CardTitle>
              <CardDescription>Perfect additions to your burger</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {sides.map((side, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-900">{side.name}</p>
                      <p className="text-sm text-gray-500">{side.description}</p>
                    </div>
                    <span className="text-red-600">${side.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Drinks</CardTitle>
              <CardDescription>Refresh your meal</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {drinks.map((drink, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-900">{drink.name}</p>
                      <p className="text-sm text-gray-500">{drink.description}</p>
                    </div>
                    <span className="text-red-600">${drink.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const menuItems = [
  {
    name: 'Classic Cheeseburger',
    price: '12.99',
    description: 'Our signature beef patty with aged cheddar, lettuce, tomato, and special sauce',
    ingredients: ['Angus Beef', 'Cheddar', 'Lettuce', 'Tomato', 'House Sauce'],
    isSpicy: false,
    isVegetarian: false,
  },
  {
    name: 'The Inferno',
    price: '14.99',
    description: 'For heat lovers! Jalapeños, pepper jack, spicy mayo, and chipotle sauce',
    ingredients: ['Angus Beef', 'Pepper Jack', 'Jalapeños', 'Chipotle', 'Spicy Mayo'],
    isSpicy: true,
    isVegetarian: false,
  },
  {
    name: 'BBQ Bacon Burger',
    price: '15.99',
    description: 'Smoky BBQ sauce, crispy bacon, onion rings, and cheddar cheese',
    ingredients: ['Angus Beef', 'Bacon', 'Cheddar', 'Onion Rings', 'BBQ Sauce'],
    isSpicy: false,
    isVegetarian: false,
  },
  {
    name: 'Mushroom Swiss',
    price: '13.99',
    description: 'Sautéed mushrooms, Swiss cheese, caramelized onions, and truffle aioli',
    ingredients: ['Angus Beef', 'Swiss', 'Mushrooms', 'Onions', 'Truffle Aioli'],
    isSpicy: false,
    isVegetarian: false,
  },
  {
    name: 'Garden Veggie',
    price: '11.99',
    description: 'House-made veggie patty with avocado, sprouts, and herb mayo',
    ingredients: ['Veggie Patty', 'Avocado', 'Sprouts', 'Tomato', 'Herb Mayo'],
    isSpicy: false,
    isVegetarian: true,
  },
  {
    name: 'Double Trouble',
    price: '17.99',
    description: 'Two beef patties, double cheese, bacon, and all the fixings',
    ingredients: ['2x Angus Beef', 'Cheddar', 'Bacon', 'Lettuce', 'Special Sauce'],
    isSpicy: false,
    isVegetarian: false,
  },
];

const sides = [
  { name: 'French Fries', description: 'Classic crispy fries', price: '4.99' },
  { name: 'Sweet Potato Fries', description: 'With chipotle mayo', price: '5.99' },
  { name: 'Onion Rings', description: 'Beer-battered & crispy', price: '5.99' },
  { name: 'Loaded Fries', description: 'Cheese, bacon, green onions', price: '7.99' },
];

const drinks = [
  { name: 'Soft Drinks', description: 'Coke, Sprite, or Fanta', price: '2.99' },
  { name: 'Craft Lemonade', description: 'Fresh squeezed', price: '3.99' },
  { name: 'Iced Tea', description: 'Sweetened or unsweetened', price: '2.99' },
  { name: 'Milkshake', description: 'Vanilla, chocolate, or strawberry', price: '5.99' },
];
