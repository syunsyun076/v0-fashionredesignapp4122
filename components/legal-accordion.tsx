"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const legalSections = [
  {
    id: "personal-use",
    title: "Personal Use",
    content: (
      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          All designs generated through our platform are licensed for personal use only, unless you have upgraded to a
          Pro plan with commercial usage rights.
        </p>
        <p>Personal use includes:</p>
        <ul className="ml-6 list-disc space-y-2">
          <li>Creating custom clothing for yourself or as gifts</li>
          <li>Ordering single pieces for personal wardrobe</li>
          <li>Sharing designs on social media for non-commercial purposes</li>
          <li>Using designs as inspiration for personal projects</li>
        </ul>
        <p>
          You may not resell, redistribute, or use designs for commercial purposes without a Pro plan and explicit
          written permission.
        </p>
      </div>
    ),
  },
  {
    id: "one-piece-order",
    title: "One-Piece Order Policy",
    content: (
      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          Our service specializes in custom, one-of-a-kind fashion pieces. Each order is manufactured individually to
          your specifications.
        </p>
        <p>
          <strong className="text-foreground">Production Timeline:</strong> Custom pieces typically take 2-4 weeks to
          manufacture and ship, depending on complexity and current order volume.
        </p>
        <p>
          <strong className="text-foreground">Pricing:</strong> All prices are calculated using our transparent formula:
          (Supplier Cost × 2.5) + Base Fee + Rounding. You'll see the complete breakdown before confirming your order.
        </p>
        <p>
          <strong className="text-foreground">Customization:</strong> Each piece is made to your exact measurements and
          material preferences. We recommend double-checking all specifications before confirming your order.
        </p>
        <p>
          <strong className="text-foreground">Minimum Order:</strong> There is no minimum order quantity. We're happy to
          manufacture single pieces.
        </p>
      </div>
    ),
  },
  {
    id: "logos-characters",
    title: "Logos & Characters Policy",
    content: (
      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          We take intellectual property rights seriously. Our AI may occasionally generate designs that incorporate
          elements similar to existing brand logos, trademarks, or copyrighted characters.
        </p>
        <p>
          <strong className="text-foreground">Your Responsibility:</strong> Before placing an order, you must review
          your design for any trademarked logos, brand names, or copyrighted characters. If present, you agree to
          either:
        </p>
        <ul className="ml-6 list-disc space-y-2">
          <li>Request removal or modification of the infringing elements</li>
          <li>Provide proof of license or permission to use the intellectual property</li>
          <li>Accept that we may need to modify or remove these elements during production</li>
        </ul>
        <p>
          <strong className="text-foreground">Our Process:</strong> Our production team will review all orders for
          potential IP issues. If we identify problematic elements, we'll contact you to discuss modifications before
          proceeding.
        </p>
        <p>
          By placing an order, you confirm that your design does not infringe on any third-party intellectual property
          rights, or that you have obtained necessary permissions.
        </p>
      </div>
    ),
  },
  {
    id: "returns",
    title: "Returns & Defects",
    content: (
      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          Because each piece is custom-made to your specifications, we have a limited return policy focused on quality
          and manufacturing defects.
        </p>
        <p>
          <strong className="text-foreground">Defects Only:</strong> We accept returns only for manufacturing defects,
          including:
        </p>
        <ul className="ml-6 list-disc space-y-2">
          <li>Incorrect sizing (when measurements were followed correctly)</li>
          <li>Material defects or damage</li>
          <li>Construction issues (loose seams, missing components, etc.)</li>
          <li>Significant color variations from approved design</li>
        </ul>
        <p>
          <strong className="text-foreground">Not Eligible for Return:</strong>
        </p>
        <ul className="ml-6 list-disc space-y-2">
          <li>Change of mind or style preference</li>
          <li>Incorrect measurements provided by customer</li>
          <li>Minor color variations due to screen display differences</li>
          <li>Normal wear and tear after delivery</li>
        </ul>
        <p>
          <strong className="text-foreground">Return Process:</strong> If you receive a defective item, contact our
          support team within 14 days of delivery with photos documenting the issue. We'll review your case and provide
          a replacement or full refund if the defect is confirmed.
        </p>
        <p>
          <strong className="text-foreground">Quality Guarantee:</strong> We stand behind the quality of our work. If
          there's a manufacturing error on our part, we'll make it right.
        </p>
      </div>
    ),
  },
]

export function LegalAccordion() {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {legalSections.map((section) => (
        <AccordionItem
          key={section.id}
          value={section.id}
          className="rounded-lg border border-border bg-card px-6 shadow-lg"
        >
          <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline">
            {section.title}
          </AccordionTrigger>
          <AccordionContent className="pt-2">{section.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
