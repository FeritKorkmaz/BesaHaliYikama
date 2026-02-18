"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, Sparkles, ShieldCheck, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PHONE_TEL } from "@/lib/data"
import { AppointmentModal } from "@/components/appointment-modal"
import { withBasePath } from "@/lib/asset"

const CHIPS = [
  { label: "Ücretsiz Alım\u2013Teslim", icon: Truck },
  { label: "Kalite Kontrol", icon: ShieldCheck },
  { label: "Hızlı Teslimat", icon: Sparkles },
]

export function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-background pt-24 pb-16 lg:pt-32 lg:pb-24"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/5" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-accent/40" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 lg:flex-row lg:gap-16 lg:px-6">
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <Image
            src={withBasePath("/img/newlogo.png")}
            alt="BESA Halı Yıkama"
            width={1400}
            height={420}
            unoptimized
            priority
            className="mb-2.5 h-auto w-[220px] max-w-[70vw] self-center sm:w-[240px] md:w-[260px] lg:w-[280px] lg:self-start"
          />

          <span className="mb-4 inline-flex items-center rounded-full border border-border bg-accent/60 px-3 py-1 text-xs font-medium text-accent-foreground">
            Konya&apos;nın Güvenilir Adresi
          </span>

          <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Konya&apos;da Profesyonel Halı, Koltuk ve Perde Yıkama
          </h1>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg">
            Modern ekipman, kumaşa uygun şampuanlar, kalite kontrol ve ücretsiz
            alım&ndash;teslimat.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            {CHIPS.map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-accent-foreground"
              >
                <chip.icon className="h-3.5 w-3.5" />
                {chip.label}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              onClick={() => setModalOpen(true)}
              size="lg"
              className="rounded-2xl bg-primary px-6 text-primary-foreground shadow-lg hover:bg-primary/90"
            >
              Randevu Oluştur
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-2xl border-border text-foreground hover:bg-accent"
            >
              <a href={PHONE_TEL}>
                <Phone className="mr-1.5 h-4 w-4" />
                Hemen Ara
              </a>
            </Button>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="relative flex h-64 w-64 items-center justify-center rounded-3xl bg-accent/60 shadow-inner sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            <div className="absolute inset-4 rounded-2xl bg-primary/10" />
            <div className="relative flex flex-col items-center gap-3">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                <Sparkles className="h-10 w-10" />
              </div>
              <span className="text-sm font-semibold text-foreground">
                Hijyenli Temizlik
              </span>
              <span className="text-xs text-muted-foreground">
                Zamanında Teslimat
              </span>
            </div>
          </div>
        </div>
      </div>

      <AppointmentModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  )
}
