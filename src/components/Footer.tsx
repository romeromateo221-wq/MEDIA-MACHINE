'use client'

import React from 'react'
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 gradient-text">
              MEDIA MACHINE
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Soluciones audiovisuales y tecnológicas de vanguardia para empresas e instituciones.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {['Servicios', 'Productos', 'Proyectos', 'Blog'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-2">
              {['Pantallas LED', 'Señalización Digital', 'Audio Profesional', 'Video Walls'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Phone size={16} />
                <span>+1-234-567-8900</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Mail size={16} />
                <span>info@mediamachine.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <MapPin size={16} />
                <span>Latitud, Longitud</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2026 MEDIA MACHINE. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {[
              { Icon: Facebook, href: '#' },
              { Icon: Linkedin, href: '#' },
              { Icon: Twitter, href: '#' },
            ].map(({ Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                className="text-gray-400 hover:text-accent transition-colors p-2 hover:bg-white/10 rounded-lg"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
