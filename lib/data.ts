import {
  Sparkles,
  Sofa,
  Wind,
  BedDouble,
  Droplets,
  Search,
  Fan,
  Clock,
  Phone,
  MessageCircle,
  MapPin,
  Truck,
  ShieldCheck,
  Package,
  type LucideIcon,
} from "lucide-react";
import { withBasePath } from "@/lib/asset";

export const NAV_ITEMS = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Nasıl Çalışır?", href: "#nasil-calisir" },
  { label: "SSS", href: "#sss" },
  { label: "Galeri", href: "#galeri" },
  { label: "İletişim", href: "#iletisim" },
];

export const PHONE = "(0332) 245 87 40";
export const PHONE_TEL = "tel:03322458740";
export const WHATSAPP_LINK = "https://wa.me/905354823150";
export const ADDRESS = "Çomaklı, 15386 Sk. 2 K, 42100 Meram/Konya";
export const WORKING_HOURS = "Pzt\u2013Cmt 09:00\u201318:30";

export interface Service {
  id: string;
  title: string;
  description: string;
  detail: string;
  icon: LucideIcon;
}

export const SERVICES: Service[] = [
  {
    id: "hali-yikama",
    title: "Halı Yıkama",
    description:
      "Her tür halı için kumaşa uygun profesyonel yıkama. Leke analizi ve özel durulama dahil.",
    detail:
      "Makine halıları, el dokuması halılar ve shaggy halılar dahil tüm halı tipleri için uygun şampuan ve basınç ayarı ile yıkama yapılmaktadır. Leke analizinden sonra lokal müdahale uygulanır.",
    icon: Sparkles,
  },
  {
    id: "koltuk-yikama",
    title: "Koltuk Yıkama",
    description:
      "Yerinde veya atölyede koltuk yıkama. Kumaş tipine göre uygun yöntem.",
    detail:
      "Kadife, süet, deri ve mikrofiber gibi farklı kumaş tiplerinde güvenli yıkama. Derinlemesine leke çıkarma ve koku giderme dahildir.",
    icon: Sofa,
  },
  {
    id: "perde-yikama",
    title: "Perde Yıkama",
    description:
      "Stor perdeleriniz özenle yıkanır, kurutulur ve adresinize teslim edilir. Tül ve fon perdeleriniz de aynı özenle temizlenir.",
    detail:
      "Stor perdeler, kumaş ve mekanizmasına uygun deterjan ve doğru sıcaklıkta hassas şekilde yıkanır. Toz, leke ve kötü kokular giderilir; formu korunarak hijyenik temizlik sağlanır. Tül ve fon perdeler yıkanır, ütülenir ve teslim edilir.",
    icon: Wind,
  },
  {
    id: "yorgan-battaniye",
    title: "Yorgan & Battaniye",
    description:
      "Yorgan, battaniye ve pike yıkama hizmeti. Hijyenik paketleme ile teslim.",
    detail:
      "Yün, pamuk ve sentetik dolgu fark etmeksizin tüm yorgan ve battaniyeler profesyonel makinelerde yıkanır, kurutulur ve vakumlu paketlenir.",
    icon: BedDouble,
  },
];

export interface TrustItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const TRUST_ITEMS: TrustItem[] = [
  {
    title: "Kumaşa Uygun Yıkama",
    description:
      "Her kumaş türü için doğru şampuan ve yıkama yöntemi belirlenir.",
    icon: Droplets,
  },
  {
    title: "Leke Analizi & Lokal Müdahale",
    description:
      "Yıkama öncesi lekeler tespit edilir ve özel çözümlerle işlenir.",
    icon: Search,
  },
  {
    title: "Kurutma & Paketleme",
    description:
      "Modern kurutma alanlarında hijyenik koşullarda kurutulur ve paketlenir.",
    icon: Fan,
  },
  {
    title: "Zamanında Teslimat",
    description: "Belirlenen sürede halılarınız adresinize teslim edilir.",
    icon: Clock,
  },
];

export interface Step {
  number: number;
  title: string;
  icon: LucideIcon;
}

export const STEPS: Step[] = [
  { number: 1, title: "Arayın / WhatsApp", icon: Phone },
  { number: 2, title: "Adresten Alım", icon: MapPin },
  { number: 3, title: "Yıkama & Durulama", icon: Droplets },
  { number: 4, title: "Kurutma", icon: Fan },
  { number: 5, title: "Kalite Kontrol", icon: ShieldCheck },
  { number: 6, title: "Paketleme", icon: Package },
  { number: 7, title: "Adrese Teslim", icon: Truck },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Halıları havuzda bekletiyor musunuz?",
    answer:
      "Hayır. Halılar havuzda bekletilmez, bir taraftan akar su ile yıkanır ve hemen durulama işlemine geçilir. Böylece halılarınız gereksiz suda bekleme süresine maruz kalmaz.",
  },
  {
    question: "Otomatik mi, elde mi yıkıyorsunuz?",
    answer:
      "Halılarımız modern otomatik yıkama hatlarında işlenmektedir. Ancak hassas ve el dokuması halılar için gerekli durumlarda elde yıkama yöntemi uygulanır.",
  },
  {
    question: "Ücretsiz alım\u2013teslim var mı?",
    answer:
      "Evet, Konya merkez ve yakın ilçelerde ücretsiz alım\u2013teslimat hizmeti sunuyoruz.",
  },
  {
    question: "Kaç günde teslim ediyorsunuz?",
    answer:
      "Standart halı yıkama işlemleri genellikle 2\u20133 iş günü içinde tamamlanır. Yoğunluk dönemlerinde bu süre değişebilir, sipariş sırasında bilgilendirme yapılır.",
  },
  {
    question: "Çıkmayan lekeler için ne yapıyorsunuz?",
    answer:
      "Leke analizi sonrası durumu size bildiriyoruz. Çıkma ihtimali düşük lekelerde özel çözümlerle ek işlem uygulanır; garanti veremediğimiz durumlarda sizi önceden bilgilendiririz.",
  },
  {
    question: "Koltuk yıkamada kuruma süresi ne kadar?",
    answer:
      "Yerinde koltuk yıkama sonrasında kuruma süresi kumaş türüne ve ortam koşullarına bağlı olarak 4\u20138 saat arasında değişir. Havalandırılmış ortamlarda bu süre kısalır.",
  },
  {
    question: "Hangi bölgelere hizmet veriyorsunuz?",
    answer:
      "Konya merkez ilçeleri (Meram, Selçuklu, Karatay) ve yakın çevresinde hizmet veriyoruz. Uzak ilçeler için lütfen bizi arayarak bilgi alın.",
  },
  {
    question: "Ödeme yöntemleriniz nelerdir?",
    answer:
      "Nakit ve havale/EFT ile ödeme kabul ediyoruz. Teslimat sırasında nakit ödeme yapabilirsiniz.",
  },
];

export interface GalleryItem {
  id: number;
  caption: string;
  category: "hali" | "koltuk" | "perde";
  image: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    caption: "Makine halısı yıkama",
    category: "hali",
    image: withBasePath("/img/makine-halisi-yikama.png"),
  },
  {
    id: 2,
    caption: "El dokuması halı bakımı",
    category: "hali",
    image: withBasePath("/img/el-dokumasi-hali-bakimi.png"),
  },
  {
    id: 3,
    caption: "Koltuk yıkama",
    category: "koltuk",
    image: withBasePath("/img/koltuk-yikama.png"),
  },
  {
    id: 4,
    caption: "Stor perde yıkama",
    category: "perde",
    image: withBasePath("/img/stor-perde-yikama.png"),
  },
  {
    id: 5,
    caption: "Halı kurutma alanı",
    category: "hali",
    image: withBasePath("/img/hali-kurutma-alani.png"),
  },
  {
    id: 6,
    caption: "Paketleme ve teslimat",
    category: "hali",
    image: withBasePath("/img/paketleme-teslimat.png"),
  },
];

export const GALLERY_TABS = [
  { value: "hepsi", label: "Hepsi" },
  { value: "hali", label: "Halı" },
  { value: "koltuk", label: "Koltuk" },
  { value: "perde", label: "Perde" },
];
