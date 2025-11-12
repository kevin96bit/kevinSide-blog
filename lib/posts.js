import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

// 📦 Ottiene tutti i post (solo metadati + estratto testuale)
export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory)

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // 🗓️ Gestisce date italiane tipo "23/10/2025" o fallback
    let parsedDate = null
    if (data.date) {
      const match = data.date.match(/^(\d{1,2})[\/-](\d{1,2})[\/-](\d{4})$/)
      if (match) {
        const [_, day, month, year] = match
        parsedDate = new Date(`${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`)
      } else {
        const fallback = new Date(data.date)
        parsedDate = isNaN(fallback) ? null : fallback
      }
    }

    // ⏱️ Calcolo del tempo di lettura
    const words = content.split(/\s+/).length
    const minutes = Math.ceil(words / 200)

    // ✂️ Genera un estratto pulito
    const excerpt =
      data.excerpt ||
      content
        .replace(/[#>*_\-`]/g, '') // rimuove simboli Markdown
        .replace(/\n+/g, ' ') // rimuove ritorni a capo
        .split(' ')
        .slice(0, 35)
        .join(' ') + '...'

    return {
      ...data,
      slug,
      excerpt,
      readingTime: `${minutes} min read`,
      parsedDate, // serve per l’ordinamento corretto
    }
  })

  // 📅 Ordina per data decrescente (i più recenti per primi)
  return posts.sort((a, b) => (b.parsedDate || 0) - (a.parsedDate || 0))
}

// 📄 Ottiene un singolo post completo (convertito in HTML)
export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  const words = content.split(/\s+/).length
  const minutes = Math.ceil(words / 200)

  return {
    ...data,
    slug,
    contentHtml,
    readingTime: `${minutes} min read`,
  }
}
