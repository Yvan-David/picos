"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Heart, Users } from 'lucide-react';

const images = [
  "/about3.jpeg",
  "/about1.JPG",
  "/about2.png",
  "/about4.png",
].slice(0, 4); // hard limit to 4 images

export default function AboutUs() {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Heart, label: 'Projects Completed', value: '1000+' },
  ];

  const [imageIndex, setImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload all images before animating between them
  useEffect(() => {
    let loadedCount = 0;
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) setImagesLoaded(true);
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === images.length) setImagesLoaded(true);
      };
    });
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [imagesLoaded]);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-[#fef9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] bg-black">
              <AnimatePresence initial={false}>
                <motion.img
                  key={images[imageIndex]}
                  src={images[imageIndex]}
                  alt="Interior Design Workspace"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#b76e79]/20 to-transparent pointer-events-none z-10"></div>

              {/* Dots indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImageIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === imageIndex ? 'bg-white w-6' : 'bg-white/50'
                    }`}
                    aria-label={`Show image ${i + 1}`}
                  />
                ))}
              </div>
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
              At Picos Rwanda, we believe that your home, office or building should be a reflection of your personality,style or proffession. Our passion for design and color harmony drives us to create stunning designs that inspire and delight.
            </p>
            <p className="text-gray-600 mb-8">
              From modern kitchens, luxirious offices to elegant living spaces, we bring creativity, expertise, and attention to detail to every project. Our team of experienced designers works closely with you to transform your vision into reality.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
