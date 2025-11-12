'use client'

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thanks for your message, Kevin will get back to you soon! 🚀')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 border border-gray-700 rounded-lg p-8 shadow-lg text-left space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          required
          placeholder="John Doe"
          className="w-full bg-gray-700 text-gray-100 border border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
          Your Email
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full bg-gray-700 text-gray-100 border border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows="5"
          required
          placeholder="Write your message here..."
          className="w-full bg-gray-700 text-gray-100 border border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-md transition"
      >
        Send Message
      </button>
    </form>
  )
}
