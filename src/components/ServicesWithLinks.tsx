"use client";
import { motion } from 'motion/react';
import Link from 'next/link';
import { ChefHat, Paintbrush, Home, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';


export default function ServicesWithLinks() {
  const services = [
    {
      slug: 'Interior-design',
      icon: ChefHat,
      title: 'Kitchen and Home Interior Design',
      description: 'Transform your kitchen and home Interiors into a masterpiece with our custom design solutions. From modern minimalist to classic elegance.',
      image: '/kitchenservice.png',
      color: 'from-[#f7c9d8] to-[#e8a0b9]',
    },
    {
      slug: 'painting',
      icon: Paintbrush,
      title: 'Painting-works',
      description: 'Professional painting services with premium finishes. We bring color and life to every room with precision and care.',
      image: '/paintingservice.png',
      color: 'from-[#e8a0b9] to-[#b76e79]',
    },
    {
      slug: 'building-works',
      icon: Home,
      title: 'Construction works',
      description: 'Complete construction services for every space in your home. Creating harmonious and functional living environments.',
      image: "/buildingservice1.png",
      color: 'from-[#b76e79] to-[#a65d6a]',
    },
    {
      slug: 'materials-store',
      icon: ShoppingBag,
      title: 'Paints & Materials Store',
      description: 'Shop premium paints, brushes, wallpapers, and materials. Everything you need for your DIY projects or professional work.',
      image: '/paintservice.jpg',
      color: 'from-[#a65d6a] to-[#b76e79]',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
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
              <span className="text-[#b76e79]">Our Services</span>
            </div>
            <h2 className="font-['Playfair_Display'] text-gray-900 mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive interior design solutions tailored to your unique style and needs
            </p>
          </motion.div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
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
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-40 group-hover:opacity-50 transition-opacity duration-300`}></div>
                <div className={`absolute top-6 right-6 w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <service.icon className="text-white" size={28} />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-['Playfair_Display'] text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link href={`/services/${service.slug}`}>
                  <Button
                    variant="ghost"
                    className="text-[#b76e79] hover:text-[#a65d6a] p-0 h-auto group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
