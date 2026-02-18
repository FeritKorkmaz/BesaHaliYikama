import { STEPS } from "@/lib/data"

export function ProcessSection() {
  return (
    <section id="nasil-calisir" className="bg-secondary/30 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-2xl font-bold text-foreground sm:text-3xl">
            Nasıl Çalışır?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Halılarınız 7 adımda tertemiz kapınıza gelir
          </p>
        </div>

        {/* Desktop: horizontal */}
        <div className="hidden lg:flex lg:items-start lg:justify-between lg:gap-2">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="flex flex-1 flex-col items-center">
                <div className="relative flex flex-col items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md">
                    <Icon className="h-6 w-6" />
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="absolute left-full top-1/2 h-px w-full -translate-y-1/2 bg-border" />
                  )}
                </div>
                <span className="mt-3 text-xs font-bold text-primary">
                  {step.number}
                </span>
                <span className="mt-1 text-center text-sm font-medium text-foreground">
                  {step.title}
                </span>
              </div>
            )
          })}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="flex flex-col gap-0 lg:hidden">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md">
                    <Icon className="h-5 w-5" />
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="h-8 w-px bg-border" />
                  )}
                </div>
                <div className="pb-6 pt-2.5">
                  <span className="text-xs font-bold text-primary">
                    Adım {step.number}
                  </span>
                  <p className="text-sm font-medium text-foreground">
                    {step.title}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
