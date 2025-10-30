import { GenerateForm } from "@/components/generate-form"
import { PreviewPanel } from "@/components/preview-panel"

export default function GeneratePage() {
  return (
    <div className="mx-auto max-w-7xl px-2 py-2 sm:px-3 sm:py-2 md:px-4 lg:px-6">
      <div className="grid gap-2 sm:gap-3 lg:grid-cols-2">
        <GenerateForm />
        <PreviewPanel />
      </div>
    </div>
  )
}
