"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Eye, ShoppingCart, Trash2, MoreVertical } from "lucide-react"
import { OrderModal } from "@/components/order-modal"

// Mock data
const mockDesigns = [
  {
    id: "1",
    type: "top",
    date: "2025-01-15",
    thumbnail: "/vintage-wash-cropped-top-front-view.jpg",
    status: "saved",
  },
  {
    id: "2",
    type: "bottom",
    date: "2025-01-14",
    thumbnail: "/paneled-knee-jeans-front-view.jpg",
    status: "saved",
  },
  {
    id: "3",
    type: "sneaker",
    date: "2025-01-13",
    thumbnail: "/minimal-sneaker-design-front-view.jpg",
    status: "ordered",
  },
  {
    id: "4",
    type: "top",
    date: "2025-01-12",
    thumbnail: "/korean-style-jacket-front-view.jpg",
    status: "saved",
  },
  {
    id: "5",
    type: "bottom",
    date: "2025-01-11",
    thumbnail: "/cargo-pants-front-view.jpg",
    status: "saved",
  },
  {
    id: "6",
    type: "top",
    date: "2025-01-10",
    thumbnail: "/oversized-hoodie-front-view.jpg",
    status: "saved",
  },
]

export function LibraryGrid() {
  const [selectedView, setSelectedView] = useState<Record<string, "front" | "back">>({})
  const [orderModalOpen, setOrderModalOpen] = useState(false)
  const [designs, setDesigns] = useState(mockDesigns)

  const toggleView = (id: string) => {
    setSelectedView((prev) => ({
      ...prev,
      [id]: prev[id] === "back" ? "front" : "back",
    }))
  }

  const handleDelete = (id: string) => {
    setDesigns(designs.filter((d) => d.id !== id))
  }

  if (designs.length === 0) {
    return (
      <div className="flex min-h-[400px] items-center justify-center rounded-lg border-2 border-dashed border-border bg-secondary/30">
        <div className="text-center">
          <p className="text-muted-foreground">No saved designs yet</p>
          <p className="mt-1 text-sm text-muted-foreground">Create your first design to see it here</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {designs.map((design) => (
          <Card key={design.id} className="mb-4 break-inside-avoid border-border bg-card p-4 shadow-lg">
            <div className="space-y-3">
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-border bg-white">
                <img src={design.thumbnail || "/placeholder.svg"} alt="Design" className="h-full w-full object-cover" />

                {/* View Toggle Pill */}
                <div className="absolute left-3 top-3">
                  <button
                    onClick={() => toggleView(design.id)}
                    className="rounded-full border border-border bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-background"
                  >
                    {selectedView[design.id] === "back" ? "Back" : "Front"}
                  </button>
                </div>

                {/* Status Badge */}
                {design.status === "ordered" && (
                  <div className="absolute right-3 top-3">
                    <span className="rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                      Ordered
                    </span>
                  </div>
                )}
              </div>

              {/* Info & Actions */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium capitalize text-foreground">{design.type}</p>
                  <p className="text-xs text-muted-foreground">{new Date(design.date).toLocaleDateString()}</p>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreVertical className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="border-border bg-card">
                    <DropdownMenuItem className="text-foreground hover:bg-secondary">
                      <Eye className="mr-2 h-4 w-4" />
                      Try On
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-foreground hover:bg-secondary"
                      onClick={() => setOrderModalOpen(true)}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Order
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-destructive hover:bg-destructive/10"
                      onClick={() => handleDelete(design.id)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <OrderModal open={orderModalOpen} onOpenChange={setOrderModalOpen} />
    </>
  )
}
