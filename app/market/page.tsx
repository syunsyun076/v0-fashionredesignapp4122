"use client"

import { useState, useEffect } from "react"
import { ComingSoonModal } from "@/components/coming-soon-modal"

export default function MarketPage() {
  const [showModal, setShowModal] = useState(false)

  // Show coming soon modal when page loads
  useEffect(() => {
    setShowModal(true)
  }, [])

  return <ComingSoonModal open={showModal} onOpenChange={setShowModal} />
}
