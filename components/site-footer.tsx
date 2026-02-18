import Image from "next/image";
import { NAV_ITEMS, PHONE, PHONE_TEL, ADDRESS } from "@/lib/data";
import { withBasePath } from "@/lib/asset";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center">
              <Image
                src={withBasePath("/img/newlogo.png")}
                alt="Besa Halı Yıkama logosu"
                width={1400}
                height={420}
                unoptimized
                className="h-14 w-auto sm:h-16"
              />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Hijyenli Temizlik, Zamanında Teslimat.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">
              Hızlı Bağlantılar
            </h4>
            <ul className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">
              İletişim
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <a href={PHONE_TEL} className="hover:text-foreground">
                  {PHONE}
                </a>
              </li>
              <li>{ADDRESS}</li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <a
              href="#"
              className="mt-4 inline-block text-xs text-muted-foreground hover:text-foreground"
            >
              KVKK Aydınlatma Metni
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Besa Halı Yıkama. Tüm hakları
          saklıdır.
        </div>
      </div>
    </footer>
  );
}
