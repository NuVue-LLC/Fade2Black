"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks: { label: string; href: string; isPage?: boolean }[] = [
  { label: "Inventory", href: "#inventory" },
  { label: "Financing", href: "#financing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getHref = (href: string, isPage?: boolean) => {
    if (isPage) return href;
    // Anchor links need full path when not on home page
    if (!isHome && href.startsWith("#")) return `/${href}`;
    return href;
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isPage?: boolean) => {
    if (isPage) {
      setMobileOpen(false);
      return; // let normal navigation happen
    }
    if (!isHome) {
      setMobileOpen(false);
      return; // let browser navigate to /#section
    }
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-dark-light/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="/"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="font-heading text-3xl tracking-wider text-white hover:text-red transition-colors"
        >
          FADE<span className="text-red">2</span>BLACK
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={getHref(link.href, link.isPage)}
              onClick={(e) => handleClick(e, link.href, link.isPage)}
              className="font-body text-sm uppercase tracking-widest text-silver hover:text-red transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+15158683990"
            className="bg-red hover:bg-red-light text-white font-body text-sm uppercase tracking-wider px-5 py-2.5 transition-colors"
          >
            Call Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-white transition-transform ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white transition-transform ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/98 border-t border-dark-light/50"
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href, link.isPage)}
                className="font-body text-lg uppercase tracking-widest text-silver hover:text-red transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+15158683990"
              className="bg-red hover:bg-red-light text-white font-body text-center uppercase tracking-wider px-5 py-3 mt-2 transition-colors"
            >
              Call Now
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
