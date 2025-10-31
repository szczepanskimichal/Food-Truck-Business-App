import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Clock, Calendar, Navigation } from 'lucide-react';
import { Button } from './ui/button';

export function Location() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Find Our Truck</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We move around the city to bring you the best burgers. Check our current location and schedule below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CardTitle>Current Location</CardTitle>
                    <Badge className="bg-green-500 hover:bg-green-500">
                      <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                      Open Now
                    </Badge>
                  </div>
                  <Button size="sm" variant="outline">
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
                <CardDescription>5th Avenue & Main Street, Downtown</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                {/* Interactive Map Placeholder */}
                <div className="relative h-96 bg-gray-100">
                  {/* Map Container - In a real app, you'd use Google Maps or Mapbox */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-red-600 rounded-full mx-auto flex items-center justify-center animate-pulse">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-900">Downtown Location</p>
                        <p className="text-sm text-gray-500">5th Ave & Main St</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Map Grid Pattern */}
                  <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="gray" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>

                  {/* Simulated roads */}
                  <div className="absolute top-1/2 left-0 right-0 h-12 bg-gray-300 transform -translate-y-1/2" />
                  <div className="absolute top-0 bottom-0 left-1/2 w-12 bg-gray-300 transform -translate-x-1/2" />
                  
                  {/* Street Names */}
                  <div className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white px-2 py-1 rounded shadow text-sm">
                    Main Street
                  </div>
                  <div className="absolute left-1/2 top-4 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-sm">
                    5th Avenue
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Schedule & Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-red-600" />
                  <CardTitle>Today's Hours</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Friday, Oct 31</span>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Open
                    </Badge>
                  </div>
                  <div className="text-2xl">11:00 AM - 8:00 PM</div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600 mb-2">Closes in 3 hours</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-600 h-2 rounded-full" style={{ width: '62%' }} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-red-600" />
                  <CardTitle>Weekly Schedule</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {weeklySchedule.map((day, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-3">
                        <span className={day.isToday ? 'text-red-600' : 'text-gray-900'}>
                          {day.day}
                        </span>
                        {day.isToday && (
                          <Badge variant="secondary" className="text-xs">Today</Badge>
                        )}
                      </div>
                      <span className="text-gray-600">{day.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <CardTitle>This Week's Spots</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {locationSchedule.map((location, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2" />
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">{location.day}</p>
                        <p className="text-sm text-gray-600">{location.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

const weeklySchedule = [
  { day: 'Monday', hours: '11:00 AM - 8:00 PM', isToday: false },
  { day: 'Tuesday', hours: '11:00 AM - 8:00 PM', isToday: false },
  { day: 'Wednesday', hours: '11:00 AM - 8:00 PM', isToday: false },
  { day: 'Thursday', hours: '11:00 AM - 8:00 PM', isToday: false },
  { day: 'Friday', hours: '11:00 AM - 8:00 PM', isToday: true },
  { day: 'Saturday', hours: '12:00 PM - 9:00 PM', isToday: false },
  { day: 'Sunday', hours: '12:00 PM - 9:00 PM', isToday: false },
];

const locationSchedule = [
  { day: 'Mon-Tue', location: 'Downtown - 5th & Main' },
  { day: 'Wed-Thu', location: 'Business District - Park Plaza' },
  { day: 'Fri-Sun', location: 'Waterfront - Harbor Street' },
];
