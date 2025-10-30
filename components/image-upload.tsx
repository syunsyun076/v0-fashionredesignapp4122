"use client"

import type React from "react"

import { useRef } from "react"
import { Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ImageUploadProps {
  images: Array<{ id: string; url: string; view: "front" | "back" }>
  onChange: (images: Array<{ id: string; url: string; view: "front" | "back" }>) => void
}

export function ImageUpload({ images, onChange }: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const newImages = files.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      url: URL.createObjectURL(file),
      view: "front" as const,
    }))
    onChange([...images, ...newImages].slice(0, 6))
  }

  const removeImage = (id: string) => {
    onChange(images.filter((img) => img.id !== id))
  }

  const toggleView = (id: string) => {
    onChange(images.map((img) => (img.id === id ? { ...img, view: img.view === "front" ? "back" : "front" } : img)))
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((image) => (
          <div
            key={image.id}
            className="group relative aspect-square overflow-hidden rounded-lg border border-border bg-secondary"
          >
            <img src={image.url || "/placeholder.svg"} alt="Source" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
              <div className="flex h-full flex-col items-center justify-center gap-2">
                <Button size="sm" variant="secondary" onClick={() => toggleView(image.id)} className="text-xs">
                  {image.view === "front" ? "Front" : "Back"}
                </Button>
                <Button size="sm" variant="destructive" onClick={() => removeImage(image.id)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}

        {images.length < 6 && (
          <button
            onClick={() => inputRef.current?.click()}
            className={cn(
              "flex aspect-square flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border bg-secondary/50 transition-colors hover:border-primary hover:bg-secondary",
              images.length === 0 && "col-span-2 sm:col-span-3",
            )}
          >
            <Upload className="h-6 w-6 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Upload Images</span>
          </button>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        multiple
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  )
}
