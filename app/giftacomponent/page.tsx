"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const base_url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"

const GiftAComponentPage = () => {
  const [formData, setFormData] = useState({
    code: "",
    title: "",
    tags: "",
    description: "",
    author: "",
    installationGuide: "",
    usageGuide: "",
    props: "",
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const newErrors: { [key: string]: string } = {}
    if (!formData.code.trim()) newErrors.code = "Code is required."
    if (!formData.title.trim()) newErrors.title = "Title is required."
    if (!formData.tags.trim()) newErrors.tags = "Tags are required."
    if (!formData.description.trim()) newErrors.description = "Description is required."
    if (!formData.author.trim()) newErrors.author = "Author is required."
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch(`${base_url}/api/gift-component`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      if (response.ok) {
        alert("Component submitted successfully!")
        setFormData({
          code: "",
          title: "",
          tags: "",
          description: "",
          author: "",
          installationGuide: "",
          usageGuide: "",
          props: "",
        })
      } else {
        alert(data.message || "Error submitting component.")
      }
    } catch (error) {
      alert("Error submitting component. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto p-6">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Gift a New Component</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="code">Code</Label>
              <Textarea
                id="code"
                name="code"
                value={formData.code}
                onChange={handleChange}
                className="min-h-[200px] font-mono"
                placeholder="Paste your component code here..."
              />
              {errors.code && <p className="text-sm text-destructive">{errors.code}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Component title"
              />
              {errors.title && <p className="text-sm text-destructive">{errors.title}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <Input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="Comma-separated tags"
              />
              {errors.tags && <p className="text-sm text-destructive">{errors.tags}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your component..."
              />
              {errors.description && <p className="text-sm text-destructive">{errors.description}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="author">Author</Label>
              <Input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Your name"
              />
              {errors.author && <p className="text-sm text-destructive">{errors.author}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="installationGuide">Installation Guide</Label>
              <Textarea
                id="installationGuide"
                name="installationGuide"
                value={formData.installationGuide}
                onChange={handleChange}
                placeholder="How to install this component..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="usageGuide">Usage Guide</Label>
              <Textarea
                id="usageGuide"
                name="usageGuide"
                value={formData.usageGuide}
                onChange={handleChange}
                placeholder="How to use this component..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="props">Props</Label>
              <Textarea
                id="props"
                name="props"
                value={formData.props}
                onChange={handleChange}
                placeholder="List and describe the component props..."
              />
            </div>

            <div className="flex justify-end">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Component"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default GiftAComponentPage

