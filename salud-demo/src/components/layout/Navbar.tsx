import { useLocale as useSiteLocale, t as tr, text as localizeText } from '../../site/locale';
import { useEffect, useState } from "react";
import {
  CalendarDays,
  HeartHandshake,
  Menu
} from "lucide-react";

import MobileMenu from "./MobileMenu.tsx";

const links = [
  { title: "Inicio", href: "#hero" },
  { title: "Servicios", href: "#services" },
  { title: "Contacto", href: "#contact" },
];

export default function Navbar() {
  useSiteLocale();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {

    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);

  }, []);

  return (
    <>
      <header
        className={`
            fixed
            left-1/2
            top-5
            z-50
            w-[95%]
            max-w-7xl
            -translate-x-1/2
            rounded-full
            border
            transition-all
            duration-500
            ${scrolled
              ? "border-gray-200 bg-white shadow-2xl"
              : "border-white/20 bg-white/10 backdrop-blur-xl"}
        `}
      >

        <div className="flex h-20 items-center justify-between px-8">

          {/* Logo */}

          <a
            href="#hero"
            className="flex items-center gap-3"
          >

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-[#A69232]
                text-white
              "
            >

              <HeartHandshake size={22} />

            </div>

            <div>

              <h2
                className={`text-xl font-bold transition-colors
                ${scrolled ? "text-gray-900" : "text-white"}
                `}
              > {tr("text.f529a4b3b5")} </h2>

              <p
                className={`text-xs transition-colors
                ${scrolled ? "text-gray-500" : "text-gray-300"}
                `}
              > {tr("text.1509ec3c14")} </p>

            </div>

          </a>

          {/* Desktop */}

          <nav className="hidden xl:flex items-center gap-10">

            {links.map((link) => (

              <a
                key={link.title}
                href={link.href}
                className={`
                    relative
                    text-sm
                    font-medium
                    transition

                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[2px]
                    after:w-0
                    after:bg-[#A69232]
                    after:transition-all
                    hover:after:w-full

                    ${scrolled
                      ? "text-gray-800"
                      : "text-white"}
                `}
              >

                {localizeText(link.title)}

              </a>

            ))}

          </nav>

          {/* Desktop Button */}

          <button
            className="
                hidden
                xl:flex
                items-center
                gap-3
                rounded-full
                bg-[#A69232]
                px-6
                py-3
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-xl
            "
          >

            <CalendarDays size={18} /> {tr("text.df14356d6d")} </button>

          {/* Mobile */}

          <button
            aria-label={tr("text.256a5c2ab3")} onClick={() => setMobileMenu(true)}
            className={`
                xl:hidden
                transition
                ${scrolled ? "text-gray-800" : "text-white"}
            `}
          >

            <Menu size={30} />

          </button>

        </div>

      </header>

      <MobileMenu
        open={mobileMenu}
        close={() => setMobileMenu(false)}
        links={links}
      />
    </>
  );
}
