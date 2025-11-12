import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: "Kevin’s Blog",
  description: "A dark, modern, and professional tech blog built with Next.js and Tailwind CSS.",
  icons: {
    icon: '/favicon.svg', 
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-100 flex flex-col min-h-screen antialiased">
        <Navbar />

        <main className="flex-1 container mx-auto px-4 py-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
