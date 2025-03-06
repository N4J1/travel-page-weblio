import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

interface FooterProps {}

export default function Footer({}: FooterProps) {
  return (
    <footer className="relative py-20 bg-[#F7FAFB]">
      <div className="w-full border-t-2 border-dashed border-[#00D493] md:pt-24"></div>

      <div className="max-w-[1600px] mx-auto my-12 px-4">
        <div className="rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/maillist_overlay.png')] bg-cover bg-center opacity-100 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/mailist.jpg')] bg-cover bg-center opacity-100"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#264653]/30 to-[#00C689]/40"></div>

          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
              Vous cherchez des idées exclusives
            </h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
              pour votre prochain séjour ?
            </h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
              Inscrivez-vous à notre newsletter!
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
              <input
                type="email"
                placeholder="Votre adresse e-mail"
                className="flex-grow py-3 px-4 rounded-2xl bg-white text-[#00C689] focus:outline-none focus:ring-2 focus:ring-[#00C689]"
              />
              <button className="bg-white hover:bg-white/90 text-[#00C689] font-medium py-3 px-8 rounded-2xl transition-colors cursor-pointer">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4">
        {/* Logo */}
        <div className="mb-4">
          <h1 className="text-4xl font-bold text-[#00C689]">Week&</h1>
          <p className="text-lg text-[#00C689] mt-6 font-medium">
            © 2023 All Right Reserved | Week&
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-8">
          <div className="flex flex-col gap-8 md:gap-16 md:flex-row">
            <div className="flex flex-col gap-2">
              <Link
                href="/mentions-legales"
                className="text-lg font-thin text-[#00C689] hover:opacity-70 transition-opacity duration-300"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-de-confidentialite"
                className="text-lg font-thin text-[#00C689] hover:opacity-70 transition-opacity duration-300"
              >
                Politique de confidentialité
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                href="/politique-de-cookies"
                className="text-lg font-thin text-[#00C689] hover:opacity-70 transition-opacity duration-300"
              >
                Politique de cookies
              </Link>
              <Link
                href="/a-propos-de-nous"
                className="text-lg font-thin text-[#00C689] hover:opacity-70 transition-opacity duration-300"
              >
                à propos de nous
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                href="/nos-destinations"
                className="text-lg font-thin text-[#00C689] hover:opacity-70 transition-opacity duration-300"
              >
                Nos destinations
              </Link>
              <Link
                href="/contactez-nous"
                className="text-lg font-thin text-[#00C689] hover:opacity-70 transition-opacity duration-300"
              >
                Contactez-nous
              </Link>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <Link href="https://www.facebook.com/weekandco">
              <FacebookIcon className="text-[#00C689] w-10 h-10 hover:opacity-70 transition-opacity duration-300" />
            </Link>
            <Link href="https://www.instagram.com/weekandco">
              <InstagramIcon className="text-[#00C689] w-10 h-10 hover:opacity-70 transition-opacity duration-300" />
            </Link>
            <Link href="https://www.linkedin.com/company/weekandco">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                className="text-[#00C689] w-10 h-10 hover:opacity-70 transition-opacity duration-300"
              >
                <path
                  fill="currentColor"
                  d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M349.3 793.7H230.6V411.9h118.7zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8m503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2c-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7c120.2 0 142.3 79.1 142.3 181.9z"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
