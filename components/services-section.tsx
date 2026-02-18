"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SERVICES } from "@/lib/data"
import { AppointmentModal } from "@/components/appointment-modal"
import { cn } from "@/lib/utils"

export function ServicesSection() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string | undefined>()
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  function openModal(serviceId: string) {
    setSelectedService(serviceId)
    setModalOpen(true)
  }

  return (
    <section id="hizmetler" className="bg-secondary/30 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-2xl font-bold text-foreground sm:text-3xl">
            Hizmetlerimiz
          </h2>
          <p className="mt-3 text-muted-foreground">
            Her ihtiyaca uygun profesyonel temizlik çözümleri
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = service.icon
            const isExpanded = expandedCard === service.id
            return (
              <div
                key={service.id}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <button
                  onClick={() =>
                    setExpandedCard(isExpanded ? null : service.id)
                  }
                  className="mb-3 flex w-full items-center justify-between rounded-xl bg-muted/60 px-3 py-2 text-left text-xs font-medium text-muted-foreground transition-colors hover:bg-muted"
                  aria-expanded={isExpanded}
                >
                  Detay
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      isExpanded && "rotate-180"
                    )}
                  />
                </button>
                {isExpanded && (
                  <p className="mb-4 rounded-xl bg-muted/40 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
                    {service.detail}
                  </p>
                )}

                <Button
                  onClick={() => openModal(service.id)}
                  variant="outline"
                  size="sm"
                  className="w-full rounded-xl border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Teklif Al
                </Button>
              </div>
            )
          })}
        </div>
      </div>

      <AppointmentModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        preselectedService={selectedService}
      />
    </section>
  )
}
