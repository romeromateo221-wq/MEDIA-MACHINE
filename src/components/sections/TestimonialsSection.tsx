'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, User } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  company: string
  position: string
  content: string
  rating: number
  image?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Juan Carlos López',
    company: 'BIERPLATZ',
    position: 'Gerente General',
    content: 'MEDIA MACHINE transformó completamente nuestro espacio. La señalización digital y los letreros de neón son espectaculares. El equipo fue profesional y entregó el proyecto a tiempo.',
    rating: 5,
  },
  {
    id: 2,
    name: 'María González',
    company: 'POLLO EJECUTIVO',
    position: 'Administradora',
    content: 'Excelente servicio desde el diseño hasta la instalación. Los sistemas de iluminación funcionan perfectamente y nuestros clientes quedan maravillados con la decoración.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Roberto Martínez',
    company: 'Empresa Corporativa',
    position: 'Director de Comunicaciones',
    content: 'El soporte técnico de MEDIA MACHINE es excepcional. Siempre disponibles para resolver cualquier inconveniente. Altamente recomendados.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Lo que Dicen Nuestros <span className="gradient-text">Clientes</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Testimonios de empresas que confiaron en MEDIA MACHINE
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-dark p-8 rounded-xl"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent rounded-full flex items-center justify-center">
                  <User size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">
                    {testimonial.position} en {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
