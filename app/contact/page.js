import ContactForm from './ContactForm'
import Link from 'next/link'

export const metadata = {
  title: 'Contact | My Blog',
  description: 'Get in touch with me for collaborations, projects, or just to say hi!',
}

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gray-900 text-gray-100 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Titolo */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400">
          Contact Me
        </h1>
        <p className="text-gray-400 mb-12 text-lg">
          I’d love to hear from you — whether it’s about a project, collaboration, or just a friendly chat.
        </p>

        {/* Form */}
        <ContactForm />

        {/* Divider */}
        <div className="my-12 border-t border-gray-700"></div>

        {/* Contatti diretti */}
        <div className="space-y-4 text-gray-300">
          <p>
            Prefer reaching out directly? You can email me at{' '}
            <a
              href="mailto:kevin@example.com"
              className="text-blue-400 hover:underline"
            >
              kevin@example.com
            </a>
          </p>

          <p>
            Or connect with me on{' '}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>

        {/* Bottone Torna alla Home */}
        <div className="mt-12">
          <Link
            href="/"
            className="inline-block border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-medium px-6 py-3 rounded-md transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}
