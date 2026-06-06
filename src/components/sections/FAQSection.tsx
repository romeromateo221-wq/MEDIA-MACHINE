'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  id: number
  question: string
  answer: string
  category: string
}

const faqs: FAQ[] = [
  {
    id: 1,
    category: 'Instalación',
    question: '¿Cuánto tiempo toma instalar un proyecto?',
    answer: 'El tiempo de instalación varía según la complejidad del proyecto. En promedio, proyectos pequeños toman 2-3 días, proyectos medianos 1-2 semanas, y proyectos complejos pueden extenderse según los requerimientos. Proporcionamos un cronograma detallado antes de iniciar.',
  },
  {
    id: 2,
    category: 'Garantías',
    question: '¿Qué garantía ofrecen en los productos?',
    answer: 'Todos nuestros productos cuentan con garantía de 2 años en partes y componentes. Ofrecemos cobertura integral que incluye defectos de fabricación y funcionamiento. Las pantallas LED tienen garantía de 3 años en píxeles muertos.',
  },
  {
    id: 3,
    category: 'Mantenimiento',
    question: '¿Cuál es la frecuencia recomendada de mantenimiento?',
    answer: 'Recomendamos mantenimiento preventivo cada 6 meses para sistemas críticos. Este incluye limpieza, revisión de conexiones, calibración de equipos y actualización de software. Para sistemas no críticos, mantenimiento anual es suficiente.',
  },
  {
    id: 4,
    category: 'Cotizaciones',
    question: '¿Cómo solicitar una cotización?',
    answer: 'Puedes solicitar una cotización a través de nuestro sitio web, completando el formulario de contacto, llamando directamente o por WhatsApp. Nuestro equipo se pondrá en contacto en máximo 24 horas con una propuesta personalizada.',
  },
  {
    id: 5,
    category: 'Tiempos de Entrega',
    question: '¿Cuáles son los tiempos de entrega?',
    answer: 'Los tiempos varían según el tipo de proyecto. Productos en stock se entregan en 2-3 días. Proyectos customizados toman entre 1-4 semanas. Proyectos de gran escala pueden requerir más tiempo, que se especifica en la propuesta.',
  },
  {
    id: 6,
    category: 'Soporte Técnico',
    question: '¿Ofrecen soporte técnico 24/7?',
    answer: 'Sí, ofrecemos soporte técnico durante horario laboral (lunes a viernes 8:00-18:00) y soporte de emergencia 24/7 para clientes con servicios de mantenimiento contratados. Disponibles vía teléfono, WhatsApp y correo electrónico.',
  },
  {
    id: 7,
    category: 'Soporte Técnico',
    question: '¿Cuál es el tiempo de respuesta ante una falla?',
    answer: 'Nuestro compromiso es responder en máximo 2 horas. Para casos críticos, contamos con equipo de respuesta rápida. El tiempo de resolución depende de la complejidad del problema, pero el 80% se resuelve el mismo día.',
  },
  {
    id: 8,
    category: 'Productos',
    question: '¿Qué marcas de equipos utilizan?',
    answer: 'Trabajamos con las mejores marcas internacionales reconocidas en la industria como Samsung, LG, Sony, Panasonic, Yamaha, JBL, Epson y muchas más. Garantizamos equipos originales y productos de calidad certificada.',
  },
  {
    id: 9,
    category: 'Instalación',
    question: '¿Realizan trabajos de instalación fuera de la ciudad?',
    answer: 'Sí, realizamos instalaciones a nivel nacional e internacional. Contamos con equipo móvil y personal especializado. Los costos de traslado se especifican en la cotización según la ubicación del proyecto.',
  },
  {
    id: 10,
    category: 'Cotizaciones',
    question: '¿Es necesario pagar para obtener una cotización?',
    answer: 'No, las cotizaciones son completamente gratuitas. Realizamos análisis del espacio y requerimientos sin costo. Solo requieren pago una vez confirmado el proyecto y hayan aceptado los términos de la propuesta.',
  },
]

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const categories = ['Todos', ...new Set(faqs.map(f => f.category))]
  const filteredFaqs = selectedCategory === 'Todos'
    ? faqs
    : faqs.filter(f => f.category === selectedCategory)

  return (
    <section id="faq" className="py-20 bg-dark-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Preguntas <span className="gradient-text">Frecuentes</span>
          </h2>
          <p className="text-gray-400">
            Respuestas a las preguntas más comunes sobre nuestros servicios
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all text-sm ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-primary-600 to-accent text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          <AnimatePresence>
            {filteredFaqs.map((faq, idx) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <button
                  onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                  className="w-full glass-dark p-6 rounded-lg hover:border-accent/50 transition-all text-left"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {faq.question}
                      </h3>
                      <span className="text-xs px-2 py-1 bg-primary-500/20 text-primary-300 rounded-full">
                        {faq.category}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedId === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4"
                    >
                      <ChevronDown size={24} className="text-accent" />
                    </motion.div>
                  </div>

                  {/* Answer */}
                  <AnimatePresence>
                    {expandedId === faq.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-white/10"
                      >
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">¿No encontraste tu respuesta?</p>
          <button className="btn-primary">
            Contactar Soporte
          </button>
        </motion.div>
      </div>
    </section>
  )
}
