"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h2 className="text-2xl text-gray-900 mb-4">Project Not Found</h2>
          <Link href="/portfolio">
            <Button className="bg-gradient-to-r from-[#b76e79] to-[#e8a0b9] text-white">
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fef9fa] to-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/portfolio">
          <motion.button
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-gray-600 hover:text-[#b76e79] mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </motion.button>
        </Link>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-2 bg-[#f7c9d8]/30 rounded-full mb-4">
            <span className="text-[#b76e79]">{project.category}</span>
          </div>
          <h1 className="font-['Playfair_Display'] text-gray-900 mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            {project.title}
          </h1>

          {/* Project Meta */}
          <div className="flex flex-wrap gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <User className="text-[#b76e79]" size={20} />
              <span>{project.client}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-[#b76e79]" size={20} />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="text-[#b76e79]" size={20} />
              <span>{project.year}</span>
            </div>
          </div>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl overflow-hidden shadow-2xl mb-12"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[500px] object-cover"
          />
        </motion.div>

        {/* Project Description */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h2 className="font-['Playfair_Display'] text-gray-900 mb-4 text-3xl">
              Project Overview
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {project.fullDescription}
            </p>

            {/* Challenge & Solution */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="font-['Playfair_Display'] text-gray-900 mb-4">
                  The Challenge
                </h3>
                <p className="text-gray-700">{project.challenge}</p>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="font-['Playfair_Display'] text-gray-900 mb-4">
                  Our Solution
                </h3>
                <p className="text-gray-700">{project.solution}</p>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-[#f7c9d8] to-[#b76e79] rounded-3xl p-8 text-white">
              <h3 className="font-['Playfair_Display'] mb-4 text-2xl">
                Love This Style?
              </h3>
              <p className="mb-6 text-white/90">
                Get in touch with us to discuss your own project and bring your vision to life.
              </p>
              <Link href="/booking">
                <Button className="w-full bg-white text-[#b76e79] hover:bg-white/90">
                  Book a Consultation
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="font-['Playfair_Display'] text-gray-900 mb-4">
                Project Details
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-gray-500">Category</span>
                  <p className="text-gray-900">{project.category}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Client</span>
                  <p className="text-gray-900">{project.client}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Duration</span>
                  <p className="text-gray-900">{project.duration}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Completed</span>
                  <p className="text-gray-900">{project.year}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Project Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-['Playfair_Display'] text-gray-900 text-center mb-12 text-3xl">
            Project Gallery
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-3xl overflow-hidden shadow-lg cursor-pointer"
              >
                <img
                  src={image}
                  alt={`${project.title} ${index + 1}`}
                  className="w-full h-80 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div>
            <h2 className="font-['Playfair_Display'] text-gray-900 text-center mb-12 text-3xl">
              Similar Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <Link href={`/portfolio/${relatedProject.slug}`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                        <span className="inline-block px-3 py-1 bg-[#b76e79] text-white rounded-full text-sm mb-2 w-fit">
                          {relatedProject.category}
                        </span>
                        <h3 className="text-white">{relatedProject.title}</h3>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
