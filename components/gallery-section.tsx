"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { GALLERY_ITEMS, GALLERY_TABS } from "@/lib/data"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"

export function GallerySection() {
  const [activeTab, setActiveTab] = useState("hepsi")
  const [selectedItem, setSelectedItem] = useState<
    (typeof GALLERY_ITEMS)[number] | null
  >(null)

  const filtered =
    activeTab === "hepsi"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeTab)

  return (
    <section id="galeri" className="bg-secondary/30 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-2xl font-bold text-foreground sm:text-3xl">
            Galeri
          </h2>
          <p className="mt-3 text-muted-foreground">
            Çalışmalarımızdan kareler
          </p>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {GALLERY_TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeTab === tab.value
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-card text-muted-foreground border border-border hover:bg-accent hover:text-accent-foreground"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative flex aspect-[4/3] items-end overflow-hidden rounded-2xl bg-muted shadow-sm transition-shadow hover:shadow-md"
            >
              <Image
                src={item.image}
                alt={item.caption}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/45" />
              <div className="relative z-10 w-full p-3">
                <span className="inline-block rounded-lg bg-card/90 px-2.5 py-1 text-xs font-medium text-card-foreground shadow-sm backdrop-blur-sm">
                  {item.caption}
                </span>
              </div>
            </button>
          ))}
        </div>

        <Dialog
          open={selectedItem !== null}
          onOpenChange={(open) => {
            if (!open) setSelectedItem(null)
          }}
        >
          <DialogContent
            showClose={false}
            className="flex max-h-[100dvh] w-[100vw] max-w-[100vw] items-center justify-center border-none bg-transparent p-2 shadow-none sm:p-4"
          >
            <DialogTitle className="sr-only">
              {selectedItem?.caption ?? "Galeri görseli"}
            </DialogTitle>
            {selectedItem ? (
              <div className="relative mx-auto w-fit overflow-hidden rounded-2xl bg-black">
                <DialogClose asChild>
                  <button
                    type="button"
                    className="absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white shadow-md backdrop-blur-sm transition hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                    aria-label="Kapat"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </DialogClose>
                <div className="relative h-[68dvh] w-[92vw] max-w-5xl sm:h-[76dvh] lg:h-[82dvh]">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.caption}
                    fill
                    className="object-contain object-center"
                    sizes="92vw"
                    priority
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4">
                  <p className="text-sm font-medium text-white">
                    {selectedItem.caption}
                  </p>
                </div>
              </div>
            ) : null}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
