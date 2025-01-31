"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { X } from "lucide-react"
import OTPInput from "@/components/otp-input"

interface PendingComponent {
  _id: string
  title: string
  description: string
  tags: string[]
  author: string
  status: string
  code: string
  installationGuide: string | null
  usageGuide: string | null
  props: string | null
}

export default function PendingComponentsPage() {
  const [pendingComponents, setPendingComponents] = useState<PendingComponent[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedComponent, setSelectedComponent] = useState<PendingComponent | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"

  useEffect(() => {
    if (isAuthenticated) {
      fetchPendingComponents()
    }
  }, [isAuthenticated])

  const fetchPendingComponents = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/get-all-pending-components`, {
        params: {
          email: process.env.NEXT_PUBLIC_ADMIN_EMAIL || "",
          password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "",
        },
      })
      setPendingComponents(response.data.pendingComponents)
    } catch (err) {
      setError("Failed to fetch pending components")
      console.error("Error fetching pending components:", err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleAction = async (id: string, status: "approve" | "reject") => {
    try {
      await axios.patch(
        `${baseUrl}/api/dashboard`,
        {
          id,
          status,
        },
        {
          params: {
            email: "aman@gmail.com",
            password: "aman123",
          },
        },
      )
      // Refresh the list after action
      fetchPendingComponents()
    } catch (err) {
      setError(`Failed to ${status} component`)
      console.error(`Error ${status}ing component:`, err)
    }
  }

  const handleAdminAuth = (code: string) => {
    if (code === process.env.NEXT_PUBLIC_ADMIN_CODE) {
      setIsAuthenticated(true)
    } else {
      setError("Invalid admin code")
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen container mx-auto p-4 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Admin Authentication</h1>
        <OTPInput length={4} onComplete={handleAdminAuth} />
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    )
  }

  if (isLoading) return <div className="text-center p-4">Loading...</div>
  if (error) return <div className="text-center p-4 text-red-500">{error}</div>

  return (
    <div className="min-h-screen container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Pending Components</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pendingComponents.map((component) => (
          <Card key={component._id} className="cursor-pointer" onClick={() => setSelectedComponent(component)}>
            <CardHeader>
              <CardTitle>{component.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-2">{component.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {component.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-sm mb-2">Author: {component.author}</p>
              <p className="text-sm mb-4">Status: {component.status}</p>
              <div className="flex justify-between">
                <Button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleAction(component._id, "approve")
                  }}
                  variant="default"
                >
                  Approve
                </Button>
                <Button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleAction(component._id, "reject")
                  }}
                  variant="destructive"
                >
                  Reject
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedComponent} onOpenChange={() => setSelectedComponent(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedComponent?.title}</DialogTitle>
            <DialogClose asChild>
              <Button variant="ghost" size="icon">
                <X className="h-4 w-4" />
              </Button>
            </DialogClose>
          </DialogHeader>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Code:</h3>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code className="p-2">{selectedComponent?.code}</code>
            </pre>

            {selectedComponent?.installationGuide && (
              <>
                <h3 className="text-lg font-semibold mb-2 mt-4">Installation Guide:</h3>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="p-2">{selectedComponent.installationGuide}</code>
                </pre>
              </>
            )}

            {selectedComponent?.usageGuide && (
              <>
                <h3 className="text-lg font-semibold mb-2 mt-4">Usage Guide:</h3>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="p-2">{selectedComponent.usageGuide}</code>
                </pre>
              </>
            )}

            {selectedComponent?.props && (
              <>
                <h3 className="text-lg font-semibold mb-2 mt-4">Props:</h3>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="p-2">{selectedComponent.props}</code>
                </pre>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

