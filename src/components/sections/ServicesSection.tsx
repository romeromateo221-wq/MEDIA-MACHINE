'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Tv2, Zap, Radio, Volume2, Camera, Layers, Boxes, Cog, Palette, FileText, Lightbulb, Wrench } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Publicidad y Branding',
    description: 'Identidad visual y estrategia de marca que destaca tu empresa.',
    services: ['Rotulación', 'Branding Corporativo', 'Señalética', 'Publicidad Exterior'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FileText,
    title: 'Producción Gráfica',
    description: 'Impresión de calidad superior en todos los formatos.',
    services: ['Impresión Gran Formato', 'Viniles', 'Lonas', 'Material POP'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Tv2,
    title: 'Soluciones Audiovisuales',
    description: 'Tecnología visual de última generación para impactar.',
    services: ['Pantallas LED', 'Video Walls', 'Pantallas Interactivas', 'Sistemas Multimedia'],
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Wrench,
    title: 'Tecnología',
    description: 'Instalación, configuración e integración de sistemas.',
    services: ['Instalación Profesional', 'Configuración', 'Integración', 'Soporte 24/7'],
    color: 'from-green-500 to-emerald-500',
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
            Soluciones publicitarias, audiovisuales y tecnológicas completas e integrales para todos tus proyectos.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-6`}
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
                      <span className="text-accent mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="text-accent hover:text-white transition-colors font-semibold text-sm flex items-center space-x-2 group">
                  <span>Saber más</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </motion.div>
            )
          })}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 glass-dark p-12 rounded-xl text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">¿Por qué elegirnos?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Con más de 10 años de experiencia, hemos ayudado a más de 200 clientes a transformar sus ideas en soluciones reales. Nuestro equipo de profesionales está comprometido con la excelencia y la innovación.
          </p>
          <button className="btn-primary">
            Solicitar Consulta Gratis
          </button>
        </motion.div>
      </div>
    </section>
  )
}
