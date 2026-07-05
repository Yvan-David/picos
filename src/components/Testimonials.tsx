"use client";
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDUxODc0OHww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      text: 'Picos Interiors transformed our kitchen into a stunning modern space. The attention to detail and professional service exceeded all our expectations. Highly recommended!',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1758599543154-76ec1c4257df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2MDQ3NDgwOXww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      text: 'The team was incredibly professional and creative. They helped us design our office space beautifully, and the painting work was flawless. Will definitely use them again!',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Interior Designer',
      image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDUxODc0OHww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      text: 'As a fellow designer, I appreciate quality work when I see it. Picos Interiors delivered exceptional results for my home renovation. The color choices were perfect!',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-white">
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
              <span className="text-[#b76e79]">Testimonials</span>
            </div>
            <h2 className="font-['Playfair_Display'] text-gray-900 mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read about the experiences of our satisfied clients
            </p>
          </motion.div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className={`relative bg-gradient-to-br from-white to-[#fef9fa] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                index === activeIndex ? 'border-[#b76e79]' : 'border-[#f7c9d8]/30'
              }`}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#b76e79] to-[#e8a0b9] rounded-full flex items-center justify-center shadow-lg">
                <Quote className="text-white" size={24} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-[#f7c9d8] text-[#f7c9d8]" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#f7c9d8]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-8 bg-[#b76e79]' : 'w-2 bg-[#f7c9d8]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
