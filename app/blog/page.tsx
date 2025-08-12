import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';

const categories = [
  'All Posts',
  'Engineering',
 
  'Changelog',
  'Press',
];

export default async function BlogPage() {
  const blogPosts = await getAllBlogPosts();

  console.log(
    'Blog posts fetched:',
    blogPosts.map((post) => post),
  );

  return (
    <div className="min-h-screen bg-background text-foreground container-wrapper">
      {/* Navigation */}
      <div className="mt-12">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              {categories.map((category, index) => (
                <Button
                  key={category}
                  variant={index === 0 ? 'default' : 'ghost'}
                  className={`rounded-full text-sm ${
                    index === 0
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search posts"
                  className="pl-10 bg-background border-border text-foreground placeholder-muted-foreground focus:border-ring rounded-xl"
                />
              </div>
             
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid with Dotted Borders */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {blogPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No blog posts found. Add your content to get started!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-dashed border-neutral-200 dark:border-neutral-800">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="border-r border-b border-dashed border-neutral-200 dark:border-neutral-800 p-8 hover:bg-accent/20 transition-colors cursor-pointer group min-h-[400px] flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-3xl opacity-80 group-hover:opacity-100 transition-opacity">
                      {post.icon}
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">{post.date}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-6 line-clamp-6">
                    {post.content || 'No excerpt available for this post.'}
                  </p>
                  <div className="flex items-center space-x-3 mt-auto">
                    <Avatar className="h-7 w-7">
                      <AvatarImage src={post.author.avatar || '/placeholder.svg'} />
                      <AvatarFallback className="text-xs bg-muted">
                        {post.author.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">{post.author.name}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
