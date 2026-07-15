"use client";
import { useState } from 'react';
import { motion } from 'motion/react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Kitchens', 'Living Rooms', 'Bedrooms', 'Paint Finishes'];

  const projects = [
    {
      id: 1,
      category: 'Kitchens',
      title: 'Modern Scandinavian Kitchen',
      image: 'https://images.unsplash.com/photo-1682888813795-192fca4a10d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc2MDQ0NDU5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Minimalist design with warm wood tones',
    },
    {
      id: 2,
      category: 'Kitchens',
      title: 'Luxury Contemporary Kitchen',
      image: 'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBraXRjaGVufGVufDF8fHx8MTc2MDQ2NDcwOHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Elegant marble and gold accents',
    },
    {
      id: 3,
      category: 'Living Rooms',
      title: 'Cozy Modern Living Space',
      image: 'https://images.unsplash.com/photo-1638885930125-85350348d266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MDUyMTE0OXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Warm neutrals and plush textures',
    },
    {
      id: 4,
      category: 'Paint Finishes',
      title: 'Premium Paint Application',
      image: 'https://images.unsplash.com/photo-1666179861891-db5155e290c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGhvdXNlJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYwNTIxMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Flawless finish and color harmony',
    },
    {
      id: 5,
      category: 'Bedrooms',
      title: 'Serene Master Bedroom',
      image: 'https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYwNDEyNDc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Tranquil retreat with soft colors',
    },
    {
      id: 6,
      category: 'Living Rooms',
      title: 'Elegant Dining Area',
      image: 'https://images.unsplash.com/photo-1758977403403-c51ef509e788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwcm9vbXxlbnwxfHx8fDE3NjA0MzQ1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Sophisticated design for entertaining',
    },
    {
      id: 7,
      category: 'Bathrooms',
      title: 'luxirious Bathroom',
      image: '/bathroom2.png',
      description: 'Luxirious design',
    },
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-[#fef9fa] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-[#f7c9d8]/30 rounded-full mb-4">
              <span className="text-[#b76e79]">Portfolio</span>
            </div>
            <h2 className="font-['Playfair_Display'] text-gray-900 mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Our Latest Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our stunning before-and-after transformations and design projects
            </p>
          </motion.div>
        </div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-[#b76e79] to-[#e8a0b9] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-[#f7c9d8]/30 border border-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-block px-3 py-1 bg-[#b76e79] text-white rounded-full text-sm mb-2 w-fit">
                    {project.category}
                  </span>
                  <h3 className="text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
