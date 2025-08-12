import CodeBlock from '@/components/blog-code';

export default {
  title: 'The AI Cloud: A unified platform for AI workloads',
  excerpt:
    'The same principles and ease of use you expect from Vercel, now for your agentic applications.',
  author: {
    name: 'Arihant Jain',
    role: 'Product',
    avatar: '/arihant.jpeg',
  },
  date: 'Jul 10, 2025',
  readTime: '6 min read',
  icon: '🔺',
  category: 'Engineering',
  content: (
    <div className="space-y-6">
      <p >
        The same principles and ease of use you expect from Vercel, now for your agentic
        applications.
      </p>

      <p>
        For over a decade, Vercel has helped teams develop, preview, and ship everything from static
        sites to full-stack apps. That mission shaped the Frontend Cloud, now relied on by millions
        of developers and powering some of the largest sites and apps in the world.
      </p>

      <p>
        Now, AI is changing what and how we build. Interfaces are becoming conversations and
        workflows are becoming autonomous.
      </p>

      <CodeBlock
        language="typescript"
        filename="app/api/ai/route.ts"
        code={`import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(request: Request) {
  const { prompt } = await request.json()
  
  const { text } = await generateText({
    model: openai("gpt-4"),
    prompt: prompt,
  })
  
  return Response.json({ text })
}`}
      />

      <p>
        We've seen this firsthand while building v0 and working with AI teams like Browserbase and
        Decagon. The pattern is clear: developers need expanded tools, new infrastructure
        primitives, and even more protections for their intelligent, agent-powered applications.
      </p>

      <p>
        At{' '}
        <a href="#" className="text-primary hover:underline">
          Vercel Ship
        </a>
        , we introduced the AI Cloud: a unified platform that lets teams build AI features and apps
        with the right tools to stay flexible, move fast, and be secure, all while focusing on their
        products, not infrastructure.
      </p>

      <CodeBlock
        language="jsx"
        filename="components/chat.tsx"
        code={`export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <div key={message.id} className="mb-4">
            <strong>{message.role}:</strong> {message.content}
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="w-full p-2 border rounded"
        />
      </form>
    </div>
  )
}`}
      />
    </div>
  ),
};
