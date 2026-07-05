"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h2 className="text-2xl text-gray-900 mb-4">Service Not Found</h2>
          <Link href="/services">
            <Button className="bg-gradient-to-r from-[#b76e79] to-[#e8a0b9] text-white">
              Back to Services
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fef9fa] to-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/services">
          <motion.button
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-gray-600 hover:text-[#b76e79] mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Services
          </motion.button>
        </Link>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-[#f7c9d8]/30 rounded-full mb-4">
              <span className="text-[#b76e79]">Service</span>
            </div>
            <h1 className="font-['Playfair_Display'] text-gray-900 mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              {service.title}
            </h1>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              {service.fullDescription}
            </p>
            <Link href="/booking">
              <Button className="bg-gradient-to-r from-[#b76e79] to-[#e8a0b9] hover:from-[#a65d6a] hover:to-[#d98fa8] text-white rounded-full px-8 py-6">
                Book This Service
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-['Playfair_Display'] text-gray-900 text-center mb-12 text-3xl">
            What's Included
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#f7c9d8] to-[#b76e79] rounded-lg flex items-center justify-center mb-4">
                  <Check className="text-white" size={20} />
                </div>
                <p className="text-gray-700">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-['Playfair_Display'] text-gray-900 text-center mb-12 text-3xl">
            Our Process
          </h2>
          <div className="space-y-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#f7c9d8] to-[#b76e79] rounded-2xl flex items-center justify-center text-white text-2xl font-['Playfair_Display']">
                  {step.step}
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="font-['Playfair_Display'] text-gray-900 mb-2 text-xl">
                    {step.title}
                  </h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-['Playfair_Display'] text-gray-900 text-center mb-12 text-3xl">
            Pricing Options
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {service.pricing.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative rounded-3xl p-8 ${
                  index === 1
                    ? 'bg-gradient-to-br from-[#b76e79] to-[#e8a0b9] text-white shadow-2xl'
                    : 'bg-white shadow-lg'
                }`}
              >
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-white text-[#b76e79] rounded-full text-sm">
                    Most Popular
                  </div>
                )}

                <h3 className={`font-['Playfair_Display'] text-2xl mb-2 ${index === 1 ? 'text-white' : 'text-gray-900'}`}>
                  {tier.tier}
                </h3>
                <p className={`mb-4 ${index === 1 ? 'text-white/90' : 'text-gray-600'}`}>
                  {tier.description}
                </p>
                <div className={`text-3xl mb-6 ${index === 1 ? 'text-white' : 'text-[#b76e79]'}`}>
                  {tier.price}
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className={index === 1 ? 'text-white' : 'text-[#b76e79]'} size={20} />
                      <span className={index === 1 ? 'text-white/90' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/booking">
                  <Button
                    className={`w-full rounded-xl ${
                      index === 1
                        ? 'bg-white text-[#b76e79] hover:bg-white/90'
                        : 'bg-gradient-to-r from-[#b76e79] to-[#e8a0b9] text-white hover:from-[#a65d6a] hover:to-[#d98fa8]'
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-['Playfair_Display'] text-gray-900 text-center mb-12 text-3xl">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#f7c9d8] to-[#b76e79] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="text-white" size={24} />
                </div>
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-['Playfair_Display'] text-gray-900 text-center mb-12 text-3xl">
            Our Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {service.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-3xl overflow-hidden shadow-lg"
              >
                <img
                  src={image}
                  alt={`${service.title} ${index + 1}`}
                  className="w-full h-80 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-[#f7c9d8] to-[#b76e79] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="font-['Playfair_Display'] text-3xl mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Book a consultation today and let's discuss how we can bring your vision to life.
          </p>
          <Link href="/booking">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-[#b76e79] rounded-full hover:shadow-lg transition-all duration-300"
            >
              Schedule Your Consultation
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
