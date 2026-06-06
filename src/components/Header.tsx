'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Inicio', href: '#' },
    { label: 'Nosotros', href: '#about' },
    { label: 'Servicios', href: '#services' },
    { label: 'Productos', href: '#products' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
  ]

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-950/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MM</span>
                </div>
                <span className="font-display font-bold text-xl gradient-text hidden sm:inline">
                  MEDIA MACHINE
                </span>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-1">
              {menuItems.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  className="px-4 py-2 text-gray-300 hover:text-white transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="btn-primary">Cotizar</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-dark-900/95 backdrop-blur-md border-t border-white/10"
          >
            <nav className="flex flex-col space-y-2 px-4 py-4">
              {menuItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button className="btn-primary w-full mt-4">Cotizar</button>
            </nav>
          </motion.div>
        )}
      </header>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={24} />
      </motion.a>
    </>
  )
}
