import { PricingCards } from "@/components/pricing-cards"

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-4xl font-semibold text-foreground">Plans & Pricing</h1>
        <p className="text-lg text-muted-foreground">Choose the perfect plan for your creative needs</p>
      </div>

      <PricingCards />
    </div>
  )
}
