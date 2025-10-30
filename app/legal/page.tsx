import { LegalAccordion } from "@/components/legal-accordion"

export default function LegalPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="mb-3 text-4xl font-semibold text-foreground">Legal & Policies</h1>
        <p className="text-lg text-muted-foreground">Important information about using our service</p>
      </div>

      <LegalAccordion />
    </div>
  )
}
