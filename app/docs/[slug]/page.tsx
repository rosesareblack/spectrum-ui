import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import fs from 'fs'
import path from 'path'
import { CodePreview } from '@/components/CodePreview'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const components = { CodePreview, Button }

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'app/docs'))
  return files
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => ({
      slug: filename.replace('.mdx', ''),
    }))
}

export default async function MDXPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const filePath = path.join(process.cwd(), 'app/docs', `${slug}.mdx`)

  let source

  try {
    source = fs.readFileSync(filePath, 'utf8')
  } catch (error) {
    notFound()
  }

  return (
 <div>
  <Card className='p-12'>
  <article className="max-w-3xl  prose prose-neutral dark:text-white dark:prose-invert ">
      <MDXRemote source={source} components={components} />
    </article>
  </Card>
 </div>
  )
}