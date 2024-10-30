'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { ChevronDown, ChevronRight, Menu } from 'lucide-react'
import { useState } from 'react'

const components = [
  {
    category: 'Getting Started',
    items: [
      { name: 'Introduction', href: '/docs/introduction' },
      { name: 'Installation', href: '/docs/installation' },
    ],
  },
 
]

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Button
        variant="outline"
        size="icon"
        className="absolute top-4 left-4 md:hidden z-50"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Menu className="h-4 w-4" />
      </Button>
      <aside
        className={cn(
          "w-full md:w-64 border-r p-4 bg-background",
          "fixed inset-y-0 left-0 z-40 transition-transform duration-300 ease-in-out md:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <ScrollArea className="h-[calc(100vh-2rem)]">
          <nav className="space-y-2 mt-16">
            {components.map((category) => (
              <div key={category.category} className="mb-4">
                <h3 className="mb-2 text-sm font-semibold text-muted-foreground">{category.category}</h3>
                {category.items.map((item) => (
                  <Link key={item.href} href={item.href} passHref>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        pathname === item.href && "bg-muted font-medium"
                      )}
                    >
                      {pathname === item.href ? (
                        <ChevronDown className="mr-2 h-4 w-4" />
                      ) : (
                        <ChevronRight className="mr-2 h-4 w-4" />
                      )}
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </ScrollArea>
      </aside>
      <main className=" p-6 md:p-8 lg:p-12 md:ml-52">{children}</main>
    </div>
  )
}