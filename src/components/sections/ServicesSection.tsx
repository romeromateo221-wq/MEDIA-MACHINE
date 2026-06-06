'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Tv2, Zap, Radio, Volume2, Camera, Layers, Boxes, Cog } from 'lucide-react'

const services = [
  {
    icon: Tv2,
    title: 'Pantallas LED',
    description: 'Pantallas LED de alta calidad para interiores y exteriores con tecnología de punta.',
    services: ['LED Indoor', 'LED Outdoor', 'Pantallas Publicitarias', 'Pantallas para Eventos'],
  },
  {
    icon: Radio,
    title: 'Señalización Digital',
    description: 'Soluciones de digital signage para comunicación corporativa efectiva.',
    services: ['Carteles Digitales', 'Totem Digital', 'Menu Boards', 'Webs Display'],
  },
  {
    icon: Layers,
    title: 'Pantallas Interactivas',
    description: 'Tecnología táctil para experiencias interactivas inmersivas.',
    services: ['Pantallas Táctiles', 'Pizarras Inteligentes', 'Kioscos', 'Instalaciones Interactivas'],
  },
  {
    icon: Volume2,
    title: 'Sistemas de Audio',
    description: 'Audio profesional de calidad de concierto para cualquier espacio.',
    services: ['Audio para Auditorios', 'Sound Systems', 'Audio Ambiental', 'Conferencias'],
  },
  {
    icon: Camera,
    title: 'Sistemas de Video',
    description: 'Soluciones de video profesional para producción y transmisión.',
    services: ['Video Walls', 'Proyectores', 'Streaming Profesional', 'Video Production'],
  },
  {
    icon: Cog,
    title: 'Servicios Técnicos',
    description: 'Instalación, configuración, mantenimiento y soporte técnico especializado.',
    services: ['Diseño', 'Instalación', 'Mantenimiento', 'Soporte 24/7'],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-dark-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
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
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Soluciones audiovisuales completas e integrales para todos tus proyectos tecnológicos.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-dark p-8 rounded-xl hover:border-accent/50 transition-all"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent rounded-lg flex items-center justify-center mb-6"
                >
                  <Icon size={32} className="text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6">
                  {service.description}
                </p>

                {/* Services List */}
                <ul className="space-y-2 mb-6">
                  {service.services.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2 text-sm text-gray-300">
                      <span className="text-accent mt-1">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="text-accent hover:text-white transition-colors font-semibold text-sm flex items-center space-x-2">
                  <span>Saber más</span>
                  <span>→</span>
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
