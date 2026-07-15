"use client";
import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+250 (785) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@picosrwanda.com',
      link: 'mailto:hello@picosrwanda.com',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Gahanga, Kigali, Rwanda',
      link: 'https://maps.google.com/?q=Gahanga,Kigali,Rwanda',
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon - Fri: 9AM - 8PM',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#fef9fa] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-[#f7c9d8]/30 rounded-full mb-4">
              <span className="text-[#b76e79]">Get in Touch</span>
            </div>
            <h2 className="font-['Playfair_Display'] text-gray-900 mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Let's Bring Your Vision to Life
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a question or ready to start your project? We'd love to hear from you
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.link}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#f7c9d8] to-[#b76e79] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">{info.label}</div>
                  <div className="text-gray-900 group-hover:text-[#b76e79] transition-colors">
                    {info.value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative mt-8 rounded-3xl overflow-hidden shadow-xl border-4 border-[#f7c9d8]/40"
            >
              <iframe
                title="Picos Rwanda Location"
                src="https://www.google.com/maps?q=Gahanga,Kigali,Rwanda&z=15&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-80"
              />

              {/* Brand Overlay */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-xl px-4 py-2 shadow-lg border border-[#f7c9d8]/40">
                <div className="flex items-center gap-2">
                  <MapPin className="text-[#b76e79]" size={18} />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Picos Rwanda
                    </p>
                    <p className="text-xs text-gray-600">
                      Gahanga, Kigali
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-[#f7c9d8]/30"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="contact-name" className="text-gray-700 mb-2 block">Name</Label>
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
                <Label htmlFor="contact-email" className="text-gray-700 mb-2 block">Email</Label>
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
                <Label htmlFor="contact-message" className="text-gray-700 mb-2 block">Message</Label>
                <Textarea
                  id="contact-message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-[#f7c9d8] focus:border-[#b76e79] rounded-xl min-h-[150px]"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#b76e79] to-[#e8a0b9] hover:from-[#a65d6a] hover:to-[#d98fa8] text-white rounded-xl h-12 transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
