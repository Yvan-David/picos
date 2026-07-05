"use client";
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBraXRjaGVufGVufDF8fHx8MTc2MDQ2NDcwOHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6 border border-white/30">
            <Sparkles className="text-[#f7c9d8]" size={20} />
            <span className="text-white">Premium Interior Design Services</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-['Playfair_Display'] text-white mb-6 leading-tight"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
        >
          Transform Your Home with <br />
          <span className="text-[#f7c9d8]">Elegance, Color, and Comfort</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-white/90 text-xl max-w-3xl mx-auto mb-10"
        >
          We design, paint, and perfect every corner of your home with attention to detail and a passion for beauty.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => scrollToSection('portfolio')}
            size="lg"
            className="bg-gradient-to-r from-[#b76e79] to-[#e8a0b9] hover:from-[#a65d6a] hover:to-[#d98fa8] text-white rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View Our Work
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button
            onClick={() => scrollToSection('book')}
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-[#b76e79] rounded-full px-8 py-6 transition-all duration-300"
          >
            Book an Appointment
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
