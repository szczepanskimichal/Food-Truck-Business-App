import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or want to book us for your event? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out to us directly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-gray-900">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-900">hello@burgertruck.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
                <CardDescription>Stay updated on our locations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <Button size="icon" variant="outline" className="hover:bg-red-50 hover:text-red-600">
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button size="icon" variant="outline" className="hover:bg-red-50 hover:text-red-600">
                    <Facebook className="w-5 h-5" />
                  </Button>
                  <Button size="icon" variant="outline" className="hover:bg-red-50 hover:text-red-600">
                    <Twitter className="w-5 h-5" />
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Follow us on social media for daily location updates, special offers, and behind-the-scenes content!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>We'll respond within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more..." 
                      rows={6}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Event Booking CTA */}
        <Card className="mt-12 bg-gradient-to-r from-red-600 to-orange-500 text-white border-0">
          <CardContent className="py-12 text-center">
            <h3 className="text-white mb-4">Book Us for Your Event!</h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              Looking to bring amazing burgers to your corporate event, wedding, or party? 
              We offer catering services for groups of all sizes.
            </p>
            <Button size="lg" variant="secondary">
              Request Event Quote
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
