"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { ComingSoonModal } from "@/components/coming-soon-modal"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for exploring and trying out",
    features: [
      "2 generations per day",
      "Standard quality outputs",
      "Save up to 10 designs",
      "Basic try-on feature",
      "Community support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Plus",
    price: "$19",
    period: "/month",
    description: "For serious fashion enthusiasts",
    features: [
      "50 generations per month",
      "HD quality outputs",
      "Unlimited saved designs",
      "Advanced try-on with AR",
      "Priority generation queue",
      "Email support",
    ],
    cta: "Upgrade to Plus",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For professional designers and brands",
    features: [
      "Unlimited generations",
      "Ultra HD quality outputs",
      "Unlimited saved designs",
      "Advanced try-on with AR",
      "Highest priority queue",
      "Commercial usage rights",
      "Dedicated support",
      "API access",
    ],
    cta: "Upgrade to Pro",
    highlighted: false,
  },
]

export function PricingCards() {
  const [comingSoonOpen, setComingSoonOpen] = useState(false)

  return (
    <>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative border-border bg-card p-6 shadow-lg transition-all duration-200 hover:shadow-xl ${
              plan.highlighted ? "ring-2 ring-primary" : ""
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              </div>
            )}

            <div className="space-y-6">
              {/* Header */}
              <div>
                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border-border bg-secondary text-foreground hover:bg-secondary/80"
                }`}
                variant={plan.highlighted ? "default" : "outline"}
                onClick={() => setComingSoonOpen(true)}
              >
                {plan.cta}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-12 rounded-lg border border-border bg-card p-6 text-center">
        <h3 className="mb-2 text-lg font-semibold text-foreground">All plans include</h3>
        <p className="text-sm text-muted-foreground">
          Access to all design tools • Front and back view generation • Material selection • Custom sizing • Secure
          payment processing
        </p>
      </div>

      <ComingSoonModal open={comingSoonOpen} onOpenChange={setComingSoonOpen} />
    </>
  )
}
