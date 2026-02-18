import { Phone, MapPin, Clock } from "lucide-react"
import { PHONE, PHONE_TEL, ADDRESS, WORKING_HOURS } from "@/lib/data"

export function ContactSection() {
  return (
    <section id="iletisim" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-2xl font-bold text-foreground sm:text-3xl">
            İletişim
          </h2>
          <p className="mt-3 text-muted-foreground">
            Bize ulaşın, halılarınızı alalım
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-card-foreground">
                  Telefon
                </h3>
                <a
                  href={PHONE_TEL}
                  className="mt-1 text-sm text-primary hover:underline"
                >
                  {PHONE}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-card-foreground">
                  Adres
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{ADDRESS}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-card-foreground">
                  Çalışma Saatleri
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {WORKING_HOURS}
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50456.65552908389!2d32.48397847768533!3d37.77736010142113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d08591e2afb9cf%3A0xa6fe2755b744d7a8!2zQmVzYSBIYWzEsSBZxLFrYW1h!5e0!3m2!1str!2str!4v1771195409380!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 300 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Besa Halı Yıkama Konum"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
