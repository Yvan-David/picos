"use client";
import { motion } from 'motion/react';
import { Facebook, Instagram, Twitter, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigation = {
    services: [
      { name: 'Kitchen Design', href: '#services' },
      { name: 'Interior Painting', href: '#services' },
      { name: 'Home Design', href: '#services' },
      { name: 'Materials Store', href: '#shop' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact', href: '#contact' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#fef9fa] to-white border-t border-[#f7c9d8]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2 md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f7c9d8] to-[#b76e79] flex items-center justify-center">
                <span className="text-white font-['Playfair_Display']">P</span>
              </div>
              <h3 className="font-['Playfair_Display'] text-[#b76e79]">Picos Rwanda</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Transforming homes with elegance, color, and comfort since 2010.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gradient-to-br from-[#f7c9d8] to-[#b76e79] rounded-full flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-white" size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href.replace('#', ''));
                    }}
                    className="text-gray-600 hover:text-[#b76e79] transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href.replace('#', ''));
                    }}
                    className="text-gray-600 hover:text-[#b76e79] transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="text-gray-900 mb-4">Stay Updated</h4>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to our newsletter for design tips and exclusive offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 border border-[#f7c9d8] rounded-full text-sm focus:outline-none focus:border-[#b76e79] transition-colors"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-[#b76e79] to-[#e8a0b9] text-white rounded-full hover:shadow-lg transition-shadow duration-300">
                <Heart size={18} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="pt-8 border-t border-[#f7c9d8]/30 text-center"
        >
          <p className="text-gray-600 text-sm">
            © 2025 Picos Rwanda. All rights reserved. Made with{' '}
            <Heart className="inline text-[#b76e79]" size={14} /> for beautiful homes.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
