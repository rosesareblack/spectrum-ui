import type React from "react"

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  author: {
    name: string
    role?: string
    avatar?: string
  }
  date: string
  readTime: string
  icon: string
  category?: string
  content: React.ReactNode
}




const blogPosts: Record<string, BlogPost> = {

  
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const posts = Object.values(blogPosts)
  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  return blogPosts[slug] || null
}
