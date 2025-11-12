import Link from 'next/link'
import Image from 'next/image'

export default function PostCard({ post }) {
  // ✅ Formatto la data in italiano (es. 23 ottobre 2025)
  const formattedDate = post.date
    ? new Date(post.date.split('/').reverse().join('-')).toLocaleDateString('it-IT', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    : 'Data sconosciuta'

  return (
    <Link
      href={`/posts/${post.slug}`}
      className="group relative flex flex-col bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] h-full"
    >
      {/* 🖼️ Immagine */}
      <div className="relative w-full h-48 overflow-hidden bg-gray-900">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-600 text-sm">
            No image
          </div>
        )}
      </div>

      {/* 🧾 Contenuto */}
      <div className="flex flex-col flex-1 p-5 relative">
        <h2 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-blue-400 transition-colors duration-300">
          {post.title}
        </h2>

        {/* 💠 Riga di separazione */}
        <div className="border-b border-blue-500/30 mb-3"></div>

        {/* 📅 Data + tempo di lettura */}
        <p className="text-gray-400 text-sm mb-3 italic">
          {formattedDate} • {post.readingTime || '—'}
        </p>

        {/* 📖 Riassunto con effetto fade */}
        <div className="relative flex-1">
          <p className="text-gray-300 line-clamp-3">
            {post.excerpt || 'No description available.'}
          </p>

          {/* 🌙 Effetto sfumatura in fondo */}
          <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-gray-800 via-transparent pointer-events-none"></div>
        </div>

        {/* 🔗 Pulsante "Read more" */}
        <div className="pt-4">
          <span className="inline-block text-blue-400 text-sm font-medium group-hover:text-blue-300 transition">
            Read more →
          </span>
        </div>
      </div>
    </Link>
  )
}
