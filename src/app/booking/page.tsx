"use client";
import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('Appointment request received! We\'ll contact you soon to confirm.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fef9fa] to-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-[#f7c9d8]/30 rounded-full mb-4">
              <span className="text-[#b76e79]">Book Appointment</span>
            </div>
            <h1 className="font-['Playfair_Display'] text-gray-900 mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Let's Bring Your Vision to Life
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Schedule a consultation with our design experts. We'll discuss your project, provide professional advice, and create a customized plan for your dream space.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-12">
              {[
                { icon: Calendar, text: 'Flexible scheduling options', description: 'Choose a time that works best for you' },
                { icon: User, text: 'Expert design consultants', description: '15+ years of combined experience' },
                { icon: Clock, text: 'Free initial consultation', description: 'No obligation, just great advice' },
                { icon: MessageSquare, text: 'Personalized design solutions', description: 'Tailored to your unique style' },
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#f7c9d8] to-[#b76e79] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">{feature.text}</div>
                    <div className="text-sm text-gray-600">{feature.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDUxODc0OHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-gray-900">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">Kitchen Renovation Client</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The consultation was incredibly helpful! The team listened to all my ideas and provided expert guidance that made my kitchen renovation a huge success."
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-[#f7c9d8]/30 sticky top-24"
          >
            <h2 className="font-['Playfair_Display'] text-gray-900 mb-6 text-2xl">
              Schedule Your Consultation
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-gray-700 mb-2 block">Full Name *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#b76e79]" size={20} />
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="pl-12 border-[#f7c9d8] focus:border-[#b76e79] rounded-xl h-12"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-gray-700 mb-2 block">Email Address *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#b76e79]" size={20} />
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-12 border-[#f7c9d8] focus:border-[#b76e79] rounded-xl h-12"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="text-gray-700 mb-2 block">Phone Number *</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#b76e79]" size={20} />
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="pl-12 border-[#f7c9d8] focus:border-[#b76e79] rounded-xl h-12"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              {/* Service Type */}
              <div>
                <Label htmlFor="service" className="text-gray-700 mb-2 block">Service Type *</Label>
                <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })} required>
                  <SelectTrigger className="border-[#f7c9d8] focus:border-[#b76e79] rounded-xl h-12">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kitchen">Kitchen Design</SelectItem>
                    <SelectItem value="painting">Interior Painting</SelectItem>
                    <SelectItem value="design">Home Interior Design</SelectItem>
                    <SelectItem value="materials">Materials Consultation</SelectItem>
                    <SelectItem value="consultation">General Consultation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date" className="text-gray-700 mb-2 block">Preferred Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="border-[#f7c9d8] focus:border-[#b76e79] rounded-xl h-12"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <Label htmlFor="time" className="text-gray-700 mb-2 block">Preferred Time *</Label>
                  <Input
                    id="time"
                    type="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="border-[#f7c9d8] focus:border-[#b76e79] rounded-xl h-12"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="text-gray-700 mb-2 block">Additional Information</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-[#f7c9d8] focus:border-[#b76e79] rounded-xl min-h-[100px]"
                  placeholder="Tell us about your project, budget, or any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#b76e79] to-[#e8a0b9] hover:from-[#a65d6a] hover:to-[#d98fa8] text-white rounded-xl h-14 transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? 'Submitting...' : 'Book Appointment'}
              </Button>

              <p className="text-sm text-gray-500 text-center">
                We'll contact you within 24 hours to confirm your appointment
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
