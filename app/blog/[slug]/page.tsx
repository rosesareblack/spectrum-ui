import { ArrowLeft, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getBlogPost, getAllBlogPosts } from "@/lib/blog"

export async function generateStaticParams() {
  const posts = await getAllBlogPosts()


  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)



  if (!post) {
    notFound()
  }

  return (
    <div className="w-full max-w-5xl mx-auto min-h-screen bg-background text-foreground border-x border-border">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8">
      
      {/* Back Button */}
      <Link href="/blog">
        <Button variant="ghost" className="text-muted-foreground hover:text-foreground mb-6 sm:mb-8 -ml-2 sm:-ml-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Blog
        </Button>
      </Link>
  
      {/* Article Header */}
      <article>
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-snug sm:leading-tight">
            {post.title}
          </h1>
  
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
              <AvatarImage src={post.author.avatar || "/placeholder.svg"} />
              <AvatarFallback className="text-sm bg-muted">
                {post.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="text-sm text-center sm:text-left">
              <span className="text-foreground font-medium">{post.author.name}</span>
              <span className="text-muted-foreground ml-2">{post.author.role}</span>
            </div>
          </div>
        </header>
  
        {/* Article Meta */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-muted-foreground mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-border gap-2 sm:gap-0">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
          <span>{post.date}</span>
        </div>
  
        {/* Article Content */}
        <div className="prose prose-neutral dark:prose-invert prose-base sm:prose-lg max-w-none">
          <div className="text-foreground leading-relaxed space-y-6">{post.content}</div>
        </div>
      </article>
    </div>
  </div>
  
  )
}
