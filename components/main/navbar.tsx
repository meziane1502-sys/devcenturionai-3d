'use client';
import { useState } from "react";

import { NAV_LINKS, SOCIALS } from "@/constants";
import { LanguageSelector } from "@/components/ui/language-selector";
import { useI18n } from "@/lib/i18n/context";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useI18n();

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#f97316]/20 bg-[#09090b99] backdrop-blur-md z-50 px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo + Name */}
        <a
          href="#about-me"
          className="flex items-center"
        >
          <span className="text-2xl font-bold text-white">Dev<span className="text-[#f97316]">Centurion</span><span className="text-[#a855f7]">Ai</span></span>
        </a>

        {/* Web Navbar */}
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[rgba(249,115,22,0.25)] bg-[rgba(9,9,11,0.6)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a
              href="#skills"
              className="cursor-pointer hover:text-[#f97316] transition"
            >
              {t.nav.services}
            </a>
            <a
              href="#projects"
              className="cursor-pointer hover:text-[#f97316] transition"
            >
              {t.nav.projects}
            </a>
            <a
              href="#pricing"
              className="cursor-pointer hover:text-[#f97316] transition"
            >
              {t.nav.pricing}
            </a>

            {/* Contact */}
            <a
              href="https://wa.me/33658687475"
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[#f97316] transition"
            >
              {t.nav.contact}
            </a>
          </div>
        </div>

        {/* Social Icons + Language Selector (Web) */}
        <div className="hidden md:flex flex-row gap-5 items-center">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <a
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white hover:text-[#f97316] transition" />
            </a>
          ))}
          <LanguageSelector />
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none text-4xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#09090b] p-5 flex flex-col items-center text-gray-300 md:hidden">
          {/* Language Selector Mobile */}
          <div className="mb-4">
            <LanguageSelector />
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            <a
              href="#skills"
              className="cursor-pointer hover:text-[#f97316] transition text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.services}
            </a>
            <a
              href="#projects"
              className="cursor-pointer hover:text-[#f97316] transition text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.projects}
            </a>
            <a
              href="#pricing"
              className="cursor-pointer hover:text-[#f97316] transition text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.pricing}
            </a>
            <a
              href="https://wa.me/33658687475"
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[#f97316] transition text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <a
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-8 w-8 text-white hover:text-[#f97316] transition" />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};