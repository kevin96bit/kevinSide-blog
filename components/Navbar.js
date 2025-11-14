'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Home, User, Mail } from 'lucide-react' 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition"
        >
          KevinSide🌐
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-6 text-gray-200">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <Home size={18} />
            Home
          </Link>

          <Link
            href="/about"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <User size={18} />
            About Me
          </Link>
{/* 
          <Link
            href="/contact"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <Mail size={18} />
            Contact
          </Link> */}
        </div>

        {/* Bottone Mobile */}
        <button
          className="md:hidden text-gray-200 hover:text-blue-400 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 px-4 py-4 space-y-3">
          <Link
            href="/"
            className="flex items-center gap-3 text-gray-200 hover:text-blue-400 transition"
            onClick={() => setIsOpen(false)}
          >
            <Home size={18} /> Home
          </Link>

          <Link
            href="/about"
            className="flex items-center gap-3 text-gray-200 hover:text-blue-400 transition"
            onClick={() => setIsOpen(false)}
          >
            <User size={18} /> About
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-3 text-gray-200 hover:text-blue-400 transition"
            onClick={() => setIsOpen(false)}
          >
            <Mail size={18} /> Contact
          </Link>
        </div>
      )}
    </header>
  )
}
