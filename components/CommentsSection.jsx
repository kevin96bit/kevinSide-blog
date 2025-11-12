'use client'

import { useState, useEffect } from 'react'
import { supabase } from '../lib_supa/supaBaseClient'

export default function CommentsSection({ postSlug }) {
  const [comments, setComments] = useState([])
  const [username, setUsername] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchComments()
  }, [])

  async function fetchComments() {
    setLoading(true)
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('post_slug', postSlug)
      .order('created_at', { ascending: false })

    if (!error) setComments(data)
    setLoading(false)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!content.trim()) return

    const { error } = await supabase.from('comments').insert([
      {
        post_slug: postSlug,
        username: username || 'Anonimo',
        content,
      },
    ])

    if (!error) {
      setContent('')
      fetchComments()
    }
  }

  return (
    <div className="mt-12 border-t border-gray-700 pt-6 text-center">
      <h2 className="text-2xl font-semibold text-blue-400 mb-4">
        💬 Commenti
      </h2>

      {/* Form di inserimento */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input
          type="text"
          placeholder="Il tuo nome (opzionale)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-gray-100"
        />
        <textarea
          placeholder="Scrivi un commento..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-gray-100 resize-none h-24"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
        >
          Invia commento
        </button>
      </form>

      {/* Lista commenti */}
      {loading ? (
        <p className="text-gray-400">Caricamento commenti...</p>
      ) : comments.length === 0 ? (
        <p className="text-gray-500">Nessun commento ancora. Scrivi il primo!</p>
      ) : (
        <ul className="space-y-4">
          {comments.map((c) => (
            <li
              key={c.id}
              className="bg-gray-800 p-4 rounded-lg border border-gray-700"
            >
              <p className="text-sm text-blue-400 font-semibold">
                {c.username}
              </p>
              <p className="text-gray-300 mt-1">{c.content}</p>
              <p className="text-xs text-gray-500 mt-2">
                {new Date(c.created_at).toLocaleString('it-IT')}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
