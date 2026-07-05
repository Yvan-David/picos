"use client";
import { motion } from 'motion/react';
import Link from 'next/link';
import { ChefHat, Paintbrush, Home, ShoppingBag, ArrowRight } from 'lucide-react';

import { services } from '@/data/services';

const iconMap: { [key: string]: any } = {
  ChefHat,
  Paintbrush,
  Home,
  ShoppingBag,
};

export default function ServicesPage() {
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
              <span className="text-[#b76e79]">Our Services</span>
            </div>
            <h1 className="font-['Playfair_Display'] text-gray-900 mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Professional Design Services
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive interior design solutions tailored to your unique style and needs
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            const colors = [
              'from-[#f7c9d8] to-[#e8a0b9]',
              'from-[#e8a0b9] to-[#b76e79]',
              'from-[#b76e79] to-[#a65d6a]',
              'from-[#a65d6a] to-[#b76e79]',
            ];
            const color = colors[index % colors.length];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${color} opacity-40 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  <div className={`absolute top-6 right-6 w-14 h-14 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    {Icon && <Icon className="text-white" size={28} />}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-['Playfair_Display'] text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.shortDescription}</p>
                  
                  {/* Features Preview */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#b76e79] mt-2"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={`/services/${service.slug}`}>
                    <button className="flex items-center gap-2 text-[#b76e79] hover:text-[#a65d6a] transition-colors group">
                      Learn More & View Pricing
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                    </button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-[#f7c9d8] to-[#b76e79] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="font-['Playfair_Display'] text-3xl mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our design experts and let's bring your vision to life.
          </p>
          <Link href="/booking">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-[#b76e79] rounded-full hover:shadow-lg transition-all duration-300"
            >
              Book a Free Consultation
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
