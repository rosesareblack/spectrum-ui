import { cache } from 'react'
import { notFound } from 'next/navigation'
import DocsBreadcrumb from '@/components/docs-breadcrumb'
import Pagination from '@/components/pagination'
import Toc from '@/components/toc'
import { page_routes } from '@/lib/routes-config'
import { getMarkdownForSlug } from '@/lib/markdown'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import ResponsiveInputShowcase from '@/components/spectrumui/form'

type PageProps = {
  params: { slug: string[] }
}

const cachedGetMarkdownForSlug = cache(getMarkdownForSlug)

export default async function DocsPage({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join('/')
  const res = await cachedGetMarkdownForSlug(pathName)

  if (!res) notFound()

  return (
    <div className="flex flex-col items-start gap-12">
      <div className="flex-[3] w-full pt-10">
        <DocsBreadcrumb paths={slug} />
        <Markdown>
          <h1 className="mb-2">{res.frontmatter.title}</h1>
          <p className="text-muted-foreground text-lg mb-6">
            {res.frontmatter.description}
          </p>
          <Tabs defaultValue="preview" className="my-8">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview" className="p-4 bg-card rounded-lg shadow">
           {/* how to add custom componrts here */}
            </TabsContent>
            <TabsContent value="code" className="p-4  rounded-lg overflow-auto">
            {res.content}
            </TabsContent>
          </Tabs>
        
          <Pagination pathname={pathName} />
        </Markdown>
      </div>
      <Toc path={pathName} />
    </div>
  )
}

function Markdown({ children }: React.PropsWithChildren) {
  return (
    <div className="prose prose-zinc dark:prose-invert prose-code:font-code dark:prose-code:bg-neutral-900 dark:prose-pre:bg-neutral-900 prose-code:bg-neutral-100 prose-pre:bg-neutral-100 prose-headings:scroll-m-20 w-full max-w-3xl mx-auto prose-code:text-sm prose-code:leading-6 dark:prose-code:text-white prose-code:text-neutral-800 prose-code:p-1 prose-code:rounded-md prose-pre:border pt-2">
      {children}
    </div>
  )
}

export async function generateMetadata({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join('/')
  const res = await cachedGetMarkdownForSlug(pathName)
  if (!res) return null
  const { frontmatter } = res
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    
  }
}

export function generateStaticParams() {
  return page_routes.map((item) => ({
    slug: item.href.split('/'),
  }))
}