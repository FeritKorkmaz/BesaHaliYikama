import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { TrustSection } from "@/components/trust-section"
import { ProcessSection } from "@/components/process-section"
import { FaqSection } from "@/components/faq-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { MobileCta } from "@/components/mobile-cta"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <TrustSection />
        <ProcessSection />
        <FaqSection />
        <GallerySection />
        <ContactSection />
      </main>
      <SiteFooter />
      <MobileCta />
      <WhatsAppFloat />
      {/* Bottom padding for mobile sticky CTA */}
      <div className="h-16 lg:hidden" />
    </>
  )
}
