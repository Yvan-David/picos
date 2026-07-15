"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

import { projects } from '@/data/projects';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Kitchens', 'Living Rooms', 'Bedrooms', 'Paint Finishes', 'Bathrooms', 'Construction'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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
              <span className="text-[#b76e79]">Portfolio</span>
            </div>
            <h1 className="font-['Playfair_Display'] text-gray-900 mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Our Project Gallery
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our complete collection of stunning transformations and design projects
            </p>
          </motion.div>
        </div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Link href={`/portfolio/${project.slug}`} key={project.slug}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 6) * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
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

                  {/* Always Visible Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-white">{project.title}</h3>
                    <span className="text-white/80 text-sm">{project.category}</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
