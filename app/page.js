import PostCard from '../components/PostCard'
import { getAllPosts } from '../lib/posts'


export default function HomePage() {
  const posts = getAllPosts()

  return (
    <section className="min-h-screen bg-gray-900 text-gray-100 py-2 transition-all duration-700 ease-out">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl text-center md:text-4xl font-bold mb-8 text-blue-400">
          I miei articoli📝
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <div
              key={post.slug}
              className={`transform transition-all duration-700 ease-out delay-[${index *
                100}ms] hover:scale-[1.02]`}
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
