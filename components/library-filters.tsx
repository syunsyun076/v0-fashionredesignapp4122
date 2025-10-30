"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter } from "lucide-react"

export function LibraryFilters() {
  const [target, setTarget] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("date-desc")

  return (
    <div className="mb-6 flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-2">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium text-foreground">Filters:</span>
      </div>

      <Select value={target} onValueChange={setTarget}>
        <SelectTrigger className="w-[140px] border-border bg-secondary text-foreground">
          <SelectValue placeholder="Target" />
        </SelectTrigger>
        <SelectContent className="border-border bg-card">
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="top">Top</SelectItem>
          <SelectItem value="bottom">Bottom</SelectItem>
          <SelectItem value="sneaker">Sneaker</SelectItem>
        </SelectContent>
      </Select>

      <Select value={sortBy} onValueChange={setSortBy}>
        <SelectTrigger className="w-[160px] border-border bg-secondary text-foreground">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent className="border-border bg-card">
          <SelectItem value="date-desc">Newest First</SelectItem>
          <SelectItem value="date-asc">Oldest First</SelectItem>
        </SelectContent>
      </Select>

      {(target !== "all" || sortBy !== "date-desc") && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            setTarget("all")
            setSortBy("date-desc")
          }}
          className="text-muted-foreground hover:text-foreground"
        >
          Clear filters
        </Button>
      )}
    </div>
  )
}
