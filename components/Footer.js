'use client'

import Link from 'next/link'
import { Heart, Code } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 text-gray-400 py-4 mt-10">
      <div className="container mx-auto flex flex-col items-center justify-center text-center gap-2 px-4">
        {/* 💬 Testo principale */}
        <div>
          <p className="text-sm flex items-center justify-center gap-3 flex-wrap">
            &copy; {new Date().getFullYear()}{' '}
            <span className="text-blue-400 font-semibold">KevinSide Blog</span> 

            {/* 🌐 Icone social */}
            <span className="flex items-center gap-3 text-gray-400 ml-2">
              {/* 📸 Instagram */}
              <a
                href="https://www.instagram.com/kevin96bit/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
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

              {/* 💻 GitHub */}
              <a
                href="https://github.com/kevin96bit/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M9 19c-4.3 1.4-4.3-2.3-6-3M15 22v-3.9a3.37 3.37 0 0 0-.94-2.6c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-6 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.5c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.1V22" />
                </svg>
              </a>

              {/* 👔 LinkedIn */}
              <a
                href="https://www.linkedin.com/in/kevin-imerti-197440222/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </span>
          </p>

          <p className="text-xs text-gray-500 mt-1">
            Pensieri, esperienze e crescita personale — un articolo alla volta.
          </p>
        </div>

        {/* 💙 Crediti tecnici */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
          <span>Creato con</span>
          <Heart className="text-red-500 w-4 h-4" />
          <span>e</span>
          <Code className="text-blue-400 w-4 h-4" />
          <span>
            usando{' '}
            <Link
              href="https://nextjs.org/"
              target="_blank"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              Next.js
            </Link>{' '}
            &{' '}
            <Link
              href="https://tailwindcss.com/"
              target="_blank"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              Tailwind CSS
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
