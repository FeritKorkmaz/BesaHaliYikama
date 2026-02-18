"use client"

import { MessageCircle } from "lucide-react"
import { WHATSAPP_LINK } from "@/lib/data"

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className="fixed bottom-20 left-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#20ba57] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 lg:bottom-5 lg:left-5"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="sr-only">WhatsApp ile iletişime geç</span>
    </a>
  )
}
