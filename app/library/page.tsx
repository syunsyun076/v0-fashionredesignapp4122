"use client"

import { useState, useEffect } from "react"
import { ComingSoonModal } from "@/components/coming-soon-modal"

export default function LibraryPage() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setShowModal(true)
  }, [])

  return <ComingSoonModal open={showModal} onOpenChange={setShowModal} />
}
