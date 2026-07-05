"use client";
import { motion } from 'motion/react';
import { Award, Heart, Users } from 'lucide-react';

export default function AboutUs() {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Heart, label: 'Projects Completed', value: '1000+' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-[#fef9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1666876744043-ac474c8026af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbmVyJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MDQwODU3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Interior Design Workspace"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#b76e79]/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#f7c9d8] to-[#b76e79] rounded-full blur-3xl opacity-50"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-[#f7c9d8]/30 rounded-full mb-4">
              <span className="text-[#b76e79]">About Us</span>
            </div>
            <h2 className="font-['Playfair_Display'] text-gray-900 mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Crafting Beautiful Spaces Since 2010
            </h2>
            <p className="text-gray-600 mb-4">
              At Picos Interiors, we believe that your home should be a reflection of your personality and style. Our passion for design and color harmony drives us to create stunning interiors that inspire and delight.
            </p>
            <p className="text-gray-600 mb-8">
              From modern kitchens to elegant living spaces, we bring creativity, expertise, and attention to detail to every project. Our team of experienced designers works closely with you to transform your vision into reality.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#f7c9d8] to-[#b76e79] rounded-xl mb-3">
                    <stat.icon className="text-white" size={24} />
                  </div>
                  <div className="text-2xl text-[#b76e79] mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
