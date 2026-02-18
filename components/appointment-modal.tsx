"use client"

import { useState } from "react"
import { toast } from "sonner"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SERVICES, WHATSAPP_LINK } from "@/lib/data"
import { MessageCircle } from "lucide-react"

interface AppointmentModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  preselectedService?: string
}

export function AppointmentModal({
  open,
  onOpenChange,
  preselectedService,
}: AppointmentModalProps) {
  const [loading, setLoading] = useState(false)
  const [service, setService] = useState(preselectedService ?? "")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const phone = formData.get("phone") as string
    const district = formData.get("district") as string
    const note = formData.get("note") as string

    const selectedService = SERVICES.find((s) => s.id === service)
    const serviceName = selectedService?.title ?? "Belirtilmedi"

    const lines = [
      `Merhaba, randevu almak istiyorum.`,
      ``,
      `Ad Soyad: ${name}`,
      `Telefon: ${phone}`,
      district ? `Ilce: ${district}` : null,
      `Hizmet: ${serviceName}`,
      note ? `Not: ${note}` : null,
    ]
      .filter(Boolean)
      .join("\n")

    const whatsappUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(lines)}`

    window.open(whatsappUrl, "_blank", "noopener,noreferrer")

    setLoading(false)
    onOpenChange(false)
    toast.success("WhatsApp aciliyor, mesajinizi gonderin.")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-foreground">Randevu Oluştur</DialogTitle>
          <DialogDescription>
            Bilgilerinizi doldurun, sizi arayalım.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">
              Ad Soyad <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              required
              placeholder="Adınız Soyadınız"
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="phone">
              Telefon <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              required
              type="tel"
              placeholder="05XX XXX XX XX"
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="district">İlçe</Label>
            <Input id="district" name="district" placeholder="Ör: Meram" className="rounded-xl" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="service">Hizmet</Label>
            <Select value={service} onValueChange={setService}>
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Hizmet seçin" />
              </SelectTrigger>
              <SelectContent>
                {SERVICES.map((s) => (
                  <SelectItem key={s.id} value={s.id}>
                    {s.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="note">Not</Label>
            <Textarea
              id="note"
              name="note"
              placeholder="Eklemek istediğiniz not..."
              className="rounded-xl resize-none"
              rows={3}
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#25D366] text-primary-foreground hover:bg-[#1fb855] gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            {loading ? "Gönderiliyor..." : "WhatsApp ile Gönder"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
