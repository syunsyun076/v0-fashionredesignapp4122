"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface OrderModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

type Step = 1 | 2 | 3

export function OrderModal({ open, onOpenChange }: OrderModalProps) {
  const [step, setStep] = useState<Step>(1)
  const [fit, setFit] = useState<"relaxed" | "just" | "slim">("just")
  const [material, setMaterial] = useState("main")
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const handleNext = () => {
    if (step < 3) setStep((step + 1) as Step)
  }

  const handleBack = () => {
    if (step > 1) setStep((step - 1) as Step)
  }

  const handleConfirm = () => {
    // Trigger webhook
    console.log("Order confirmed")
    onOpenChange(false)
    setStep(1)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-border bg-card sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-foreground">Order Custom Piece</DialogTitle>
          <DialogDescription className="text-muted-foreground">Step {step} of 3</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-foreground">Size</Label>
                <div className="grid grid-cols-4 gap-2">
                  {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                    <Button
                      key={size}
                      variant="outline"
                      className="border-border bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground"
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-foreground">Fit</Label>
                <RadioGroup value={fit} onValueChange={(v) => setFit(v as any)}>
                  {(["relaxed", "just", "slim"] as const).map((fitType) => (
                    <div key={fitType} className="flex items-center space-x-2">
                      <RadioGroupItem value={fitType} id={fitType} />
                      <Label htmlFor={fitType} className="capitalize text-foreground">
                        {fitType}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="chest" className="text-foreground">
                    Chest (cm)
                  </Label>
                  <Input id="chest" type="number" className="border-border bg-input text-foreground" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="length" className="text-foreground">
                    Length (cm)
                  </Label>
                  <Input id="length" type="number" className="border-border bg-input text-foreground" />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <Label className="text-foreground">Materials</Label>
              <RadioGroup value={material} onValueChange={setMaterial}>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 rounded-lg border border-border bg-secondary p-4">
                    <RadioGroupItem value="main" id="main" className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor="main" className="font-medium text-foreground">
                        AI Recommended
                      </Label>
                      <p className="text-sm text-muted-foreground">Premium cotton blend (80% cotton, 20% polyester)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 rounded-lg border border-border bg-secondary p-4">
                    <RadioGroupItem value="alt1" id="alt1" className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor="alt1" className="font-medium text-foreground">
                        Alternative 1
                      </Label>
                      <p className="text-sm text-muted-foreground">100% organic cotton</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 rounded-lg border border-border bg-secondary p-4">
                    <RadioGroupItem value="alt2" id="alt2" className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor="alt2" className="font-medium text-foreground">
                        Alternative 2
                      </Label>
                      <p className="text-sm text-muted-foreground">Recycled polyester blend</p>
                    </div>
                  </div>
                </div>
              </RadioGroup>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-secondary p-4">
                <h3 className="mb-3 font-semibold text-foreground">Cost Breakdown</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Supplier cost</span>
                    <span>$45.00</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Markup (2.5x)</span>
                    <span>$67.50</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Base fee</span>
                    <span>$10.00</span>
                  </div>
                  <div className="border-t border-border pt-2">
                    <div className="flex justify-between font-semibold text-foreground">
                      <span>Total</span>
                      <span>$122.50</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                />
                <Label htmlFor="terms" className="text-xs leading-relaxed text-muted-foreground">
                  I understand that brand logos and copyrighted characters may need to be removed or replaced, and I
                  agree to the terms of service.
                </Label>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={step === 1}
            className="border-border text-foreground bg-transparent"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          {step < 3 ? (
            <Button onClick={handleNext} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={handleConfirm}
              disabled={!agreedToTerms}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Confirm Order
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
