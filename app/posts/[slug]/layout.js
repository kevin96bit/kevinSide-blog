'use client'

import { Github, Linkedin, Twitter } from 'lucide-react'

export default function PostLayout({ children }) {
  return (
    <div className="flex justify-center relative">
      <main className="relative max-w-3xl w-full px-4">
        {/* 🔗 Barra Social centrata e attaccata al post */}
        <aside
          className="hidden lg:flex flex-col items-center gap-5 absolute -left-10 top-1/2 -translate-y-1/2 text-gray-400"
          style={{ zIndex: 10 }}
        >
          {/* 📸 Instagram (SVG custom, in stile lucide) */}
          <a
            href="https://www.instagram.com/kevin96bit/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:drop-shadow-[0_0_4px_rgba(59,130,246,0.8)] transition"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-instagram"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
            </svg>
          </a>

          {/* 🐦 Twitter */}
          <a
            href="https://x.com/Kevin96bit"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:drop-shadow-[0_0_4px_rgba(59,130,246,0.8)] transition"
          >
            <Twitter size={24} />
          </a>

          {/* 💻 GitHub */}
          <a
            href="https://github.com/kevin96bit/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:drop-shadow-[0_0_4px_rgba(59,130,246,0.8)] transition"
          >
            <Github size={24} />
          </a>

          {/* 👔 LinkedIn */}
          <a
            href="https://www.linkedin.com/in/kevin-imerti-197440222/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:drop-shadow-[0_0_4px_rgba(59,130,246,0.8)] transition"
          >
            <Linkedin size={24} />
          </a>

          {/* Linea decorativa */}
          <div className="w-px h-16 bg-gray-600 mt-3" />
        </aside>

        {/* Contenuto del post */}
        {children}
      </main>
    </div>
  )
}
