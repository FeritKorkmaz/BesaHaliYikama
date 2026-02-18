import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQ_ITEMS } from "@/lib/data"

export function FaqSection() {
  return (
    <section id="sss" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-2xl font-bold text-foreground sm:text-3xl">
            Sıkça Sorulan Sorular
          </h2>
          <p className="mt-3 text-muted-foreground">
            Merak ettiğiniz konularda yanıtlar
          </p>
        </div>

        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-2xl border border-border bg-card px-5 shadow-sm"
            >
              <AccordionTrigger className="text-left text-sm font-medium text-card-foreground hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
