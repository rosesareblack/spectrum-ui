'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { IconBrain, IconRobot, IconSparkles, IconMessageDots,  } from '@tabler/icons-react'

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
  className?: string
  glowColor?: string
}

const features: Feature[] = [
  {
    title: 'AI Assistant',
    description: 'Get intelligent responses powered by advanced language models',
    icon: <IconBrain className="h-6 w-6" />,
    className: 'md:col-span-2',
    glowColor: 'from-violet-500/20 via-transparent',
  },
  {
    title: 'Smart Automation',
    description: 'Automate your workflow with AI-powered tools',
    icon: <IconRobot className="h-6 w-6" />,
    className: 'md:col-span-1',
    glowColor: 'from-pink-500/20 via-transparent',
  },
  {
    title: 'Magic Generation',
    description: 'Generate creative content with a single click',
    icon: <IconRobot/>,
    className: 'md:col-span-1 md:row-span-2',
    glowColor: 'from-blue-500/20 via-transparent',
  },
  {
    title: 'Interactive Chat',
    description: 'Engage in natural conversations with AI',
    icon: <IconMessageDots className="h-6 w-6" />,
    className: 'md:col-span-2',
    glowColor: 'from-emerald-500/20 via-transparent',
  },
]

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Dotted background pattern */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(55 65 81) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-pink-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            AI-Powered Features
          </motion.h1>
          <motion.p 
            className="text-gray-400 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience the future of automation with our cutting-edge AI tools
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={feature.className}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative h-full overflow-hidden bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-gray-700 transition-colors group">
                {/* Glow effect */}
                <div 
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${feature.glowColor}`}
                  style={{ filter: 'blur(30px)' }}
                />
                
                <div className="relative p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gray-800/50">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-400">{feature.description}</p>
                  
                  {/* Interactive dots pattern */}
                  <div className="absolute bottom-0 right-0 p-4 opacity-30">
                    <div className="grid grid-cols-3 gap-1">
                      {[...Array(9)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 h-1 rounded-full bg-white group-hover:bg-current transition-colors"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
