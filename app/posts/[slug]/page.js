import { getPostBySlug } from '../../../lib/posts'
import Image from 'next/image'
import Link from 'next/link'
import CommentsSection from '../../../components/CommentsSection' // ⬅️ Aggiunto

// ✅ Server Component
export default async function PostPage({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return <p className="text-red-500 text-center mt-10">Post non trovato.</p>
  }

  // 🗓️ Formatto la data in italiano (es. 25 ottobre 2025)
  const formattedDate = post.date
    ? new Date(post.date.split('/').reverse().join('-')).toLocaleDateString('it-IT', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    : 'Data sconosciuta'

  return (
    <article className="max-w-3xl mx-auto bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg text-gray-100">
      {/* 🖼️ Immagine di copertina */}
      {post.image && (
        <div className="relative w-full h-64 mb-6">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded"
            sizes="100vw"
          />
        </div>
      )}

      {/* 🧾 Titolo e metadati */}
      <h1 className="text-4xl font-bold mb-2 text-blue-400">{post.title}</h1>
      <p className="text-gray-400 mb-6 italic">
        {formattedDate} • {post.readingTime}
      </p>

      {/* 📰 Contenuto Markdown */}
      <div
        className="article-content mb-10"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      {/* 💬 Sezione Commenti */}
      <CommentsSection postSlug={post.slug} />

      {/* 🔙 Pulsante per tornare alla home */}
      <div className="text-center mt-10">
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-300 hover:scale-105 shadow-md"
        >
          ← Torna alla home
        </Link>
      </div>
    </article>
  )
}
