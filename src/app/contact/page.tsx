"use client";
import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      description: 'Mon-Fri from 9am to 6pm',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@picosinteriors.com',
      link: 'mailto:hello@picosinteriors.com',
      description: 'We reply within 24 hours',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Design Street, Creative City, CA 90210',
      link: '#',
      description: 'Visit our showroom',
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon - Fri: 9AM - 6PM',
      link: '#',
      description: 'Sat: 10AM - 4PM',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fef9fa] to-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-[#f7c9d8]/30 rounded-full mb-4">
              <span className="text-[#b76e79]">Get in Touch</span>
            </div>
            <h1 className="font-['Playfair_Display'] text-gray-900 mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Let's Bring Your Vision to Life
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Have a question or ready to start your project? We'd love to hear from you
            </p>
          </motion.div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.label}
              href={info.link}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#f7c9d8] to-[#b76e79] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <info.icon className="text-white" size={24} />
              </div>
              <div className="text-sm text-gray-500 mb-1">{info.label}</div>
              <div className="text-gray-900 mb-2 group-hover:text-[#b76e79] transition-colors">
                {info.value}
              </div>
              <div className="text-sm text-gray-600">{info.description}</div>
            </motion.a>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-[#f7c9d8]/30"
          >
            <h2 className="font-['Playfair_Display'] text-gray-900 mb-6 text-2xl">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="contact-name" className="text-gray-700 mb-2 block">Name *</Label>
                <Input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-[#f7c9d8] focus:border-[#b76e79] rounded-xl h-12"
                  placeholder="Your name"
                />
              </div>

              <div>
                <Label htmlFor="contact-email" className="text-gray-700 mb-2 block">Email *</Label>
                <Input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-[#f7c9d8] focus:border-[#b76e79] rounded-xl h-12"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <Label htmlFor="contact-subject" className="text-gray-700 mb-2 block">Subject *</Label>
                <Input
                  id="contact-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="border-[#f7c9d8] focus:border-[#b76e79] rounded-xl h-12"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <Label htmlFor="contact-message" className="text-gray-700 mb-2 block">Message *</Label>
                <Textarea
                  id="contact-message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-[#f7c9d8] focus:border-[#b76e79] rounded-xl min-h-[180px]"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#b76e79] to-[#e8a0b9] hover:from-[#a65d6a] hover:to-[#d98fa8] text-white rounded-xl h-14 transition-all duration-300 transform hover:scale-105"
              >
                <Send className="mr-2" size={20} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>

          {/* Map & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <div className="rounded-3xl overflow-hidden shadow-2xl h-96 bg-gradient-to-br from-[#f7c9d8] to-[#b76e79] flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin size={64} className="mx-auto mb-4 opacity-80" />
                <p className="text-xl mb-2">Visit Our Showroom</p>
                <p className="opacity-80">123 Design Street, Creative City</p>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="font-['Playfair_Display'] text-gray-900 mb-6 text-xl">
                Why Work With Us?
              </h3>
              <div className="space-y-4">
                {[
                  'Over 15 years of design experience',
                  '500+ satisfied clients',
                  'Expert team of designers',
                  'Premium quality materials',
                  'Personalized service',
                  'Competitive pricing',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#b76e79]"></div>
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-[#b76e79] to-[#e8a0b9] rounded-3xl p-8 text-white">
              <h3 className="font-['Playfair_Display'] text-2xl mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-white/90 mb-6">
                Book a free consultation and let's discuss your project in detail.
              </p>
              <a href="/booking">
                <Button className="w-full bg-white text-[#b76e79] hover:bg-white/90 rounded-xl">
                  Schedule Consultation
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
