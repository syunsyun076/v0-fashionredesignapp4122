"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ImageUpload } from "@/components/image-upload"
import { Sparkles, Send } from "lucide-react"

type CustomType = "diy" | "original"
type SkillLevel = "beginner" | "intermediate" | "advanced"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export function GenerateForm() {
  const [custom, setCustom] = useState<CustomType>("diy")
  const [skillLevel, setSkillLevel] = useState<SkillLevel>("beginner")
  const [images, setImages] = useState<Array<{ id: string; url: string; view: "front" | "back" }>>([])

  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState("")

  const isValid = images.length > 0

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        role: "user",
        content: inputMessage,
        timestamp: new Date(),
      }
      setMessages([...messages, newMessage])
      setInputMessage("")

      // Simulate AI response
      setTimeout(() => {
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "I understand your design request. Let me help you create that!",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, aiResponse])
      }, 1000)
    }
  }

  return (
    <Card className="border-border bg-card p-2 shadow-lg sm:p-3">
      <div className="space-y-2 sm:space-y-3">
        <div>
          <h2 className="mb-1.5 text-base font-semibold text-foreground sm:mb-2 sm:text-lg">Inputs</h2>

          {/* Custom section */}
          <div className="mb-2 space-y-1.5 sm:mb-3">
            <Label className="text-xs text-foreground">Custom</Label>
            <div className="flex w-full flex-col gap-1 rounded-lg border border-border bg-secondary p-1 sm:flex-row md:inline-flex">
              {(["diy", "original"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setCustom(type)}
                  className={`flex-1 rounded-md px-2 py-1.5 text-xs font-medium transition-all duration-200 sm:px-3 md:flex-none ${
                    custom === type
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {type === "diy" ? "DIY" : "Original Design"}
                </button>
              ))}
            </div>
          </div>

          {/* Skill Level section that appears when DIY is selected */}
          {custom === "diy" && (
            <div className="mb-2 space-y-1.5 sm:mb-3">
              <Label className="text-xs text-foreground">Skill Level</Label>
              <div className="flex w-full rounded-lg border border-border bg-secondary p-1 md:inline-flex">
                {(["beginner", "intermediate", "advanced"] as const).map((level) => (
                  <button
                    key={level}
                    onClick={() => setSkillLevel(level)}
                    className={`flex-1 rounded-md px-2 py-1.5 text-xs font-medium capitalize transition-all duration-200 sm:px-3 md:flex-none ${
                      skillLevel === level
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Chat with AI section */}
        <div className="space-y-1.5">
          <Label className="text-xs text-foreground">Chat with AI</Label>
          <div className="flex flex-col rounded-lg border border-border bg-background">
            {/* Messages area */}
            <div className="h-[200px] overflow-y-auto p-2 space-y-2 sm:h-[240px]">
              {messages.length === 0 ? (
                <div className="flex h-full items-center justify-center text-center">
                  <p className="text-xs text-muted-foreground">Start chatting with AI to describe your design ideas</p>
                </div>
              ) : (
                messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg px-2.5 py-1.5 text-xs ${
                        message.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Input area */}
            <div className="flex gap-1.5 border-t border-border p-1.5">
              <Textarea
                placeholder="Describe your design idea..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSendMessage()
                  }
                }}
                className="min-h-[50px] resize-none border-0 bg-transparent text-xs focus-visible:ring-0"
              />
              <Button
                size="icon"
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="shrink-0 h-8 w-8"
              >
                <Send className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Source Items section */}
        <div className="space-y-1">
          <Label className="text-[10px] text-foreground sm:text-xs">Source Items</Label>
          <div className="scale-[0.65] origin-top-left">
            <ImageUpload images={images} onChange={setImages} />
          </div>
          <p className="text-[10px] text-muted-foreground">Upload 2-6 images (Max 10MB each)</p>
        </div>

        {/* Generate Button */}
        <Button
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          size="default"
          disabled={!isValid}
        >
          <Sparkles className="mr-2 h-3.5 w-3.5" />
          <span className="text-xs sm:text-sm">Generate Design</span>
        </Button>
      </div>
    </Card>
  )
}
