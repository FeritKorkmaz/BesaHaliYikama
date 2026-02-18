"use client"

import { Phone, MessageCircle } from "lucide-react"
import { PHONE_TEL, WHATSAPP_LINK } from "@/lib/data"

export function MobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-border bg-card/95 backdrop-blur-md p-2 lg:hidden">
      <a
        href={PHONE_TEL}
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-sm"
      >
        <Phone className="h-4 w-4" />
        Ara
      </a>
      <div className="w-2" />
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-semibold text-[#fff] shadow-sm"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  )
}
