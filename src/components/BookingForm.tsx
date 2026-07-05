"use client";
import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';

export default function BookingForm() {
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
    <section id="book" className="py-20 bg-gradient-to-b from-[#fef9fa] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-[#f7c9d8]/30 rounded-full mb-4">
              <span className="text-[#b76e79]">Book Appointment</span>
            </div>
            <h2 className="font-['Playfair_Display'] text-gray-900 mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Let's Bring Your Vision to Life
            </h2>
            <p className="text-gray-600 mb-8">
              Schedule a consultation with our design experts. We'll discuss your project, provide professional advice, and create a customized plan for your dream space.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {[
                { icon: Calendar, text: 'Flexible scheduling options' },
                { icon: User, text: 'Expert design consultants' },
                { icon: Clock, text: 'Free initial consultation' },
                { icon: MessageSquare, text: 'Personalized design solutions' },
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f7c9d8] to-[#b76e79] rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <span className="text-gray-700">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-[#f7c9d8]/30"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-gray-700 mb-2 block">Full Name</Label>
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
                <Label htmlFor="email" className="text-gray-700 mb-2 block">Email Address</Label>
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
                <Label htmlFor="phone" className="text-gray-700 mb-2 block">Phone Number</Label>
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
                <Label htmlFor="service" className="text-gray-700 mb-2 block">Service Type</Label>
                <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                  <SelectTrigger className="border-[#f7c9d8] focus:border-[#b76e79] rounded-xl h-12">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kitchen">Kitchen Design</SelectItem>
                    <SelectItem value="painting">Interior Painting</SelectItem>
                    <SelectItem value="design">Home Interior Design</SelectItem>
                    <SelectItem value="consultation">Design Consultation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date" className="text-gray-700 mb-2 block">Preferred Date</Label>
                  <Input
                    id="date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="border-[#f7c9d8] focus:border-[#b76e79] rounded-xl h-12"
                  />
                </div>
                <div>
                  <Label htmlFor="time" className="text-gray-700 mb-2 block">Preferred Time</Label>
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
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#b76e79] to-[#e8a0b9] hover:from-[#a65d6a] hover:to-[#d98fa8] text-white rounded-xl h-12 transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? 'Submitting...' : 'Book Appointment'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
