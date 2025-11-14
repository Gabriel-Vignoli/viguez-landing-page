"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-transparent z-50 flex items-center justify-between px-mobile md:px-tablet lg:px-laptop xl:px-desktop 2xl:px-big py-4 md:py-6 backdrop-blur-sm">
        <Image src="/logo.svg" alt="Viguez logo" width={63} height={63} />

        <nav className="hidden min-[556px]:block">
          <ul className="flex gap-8 text-lg">
            <li>
              <Link href="#" className="hover:opacity-70 transition-opacity">
                Sobre nós
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:opacity-70 transition-opacity">
                Serviços
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:opacity-70 transition-opacity">
                FAQ
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="max-[555px]:block hidden p-2 z-50 relative"
          aria-label="Menu"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 md:w-7 md:h-7" />
          ) : (
            <Menu className="w-6 h-6 md:w-7 md:h-7" />
          )}
        </button>

        <Button className="hidden min-[556px]:block">Entrar em Contato</Button>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 max-[555px]:block hidden"
          onClick={toggleMenu}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out max-[555px]:block hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="pt-20 px-6">
          <ul className="flex flex-col gap-6 text-lg">
            <li>
              <Link
                href="#"
                className="block hover:opacity-70 transition-opacity"
                onClick={toggleMenu}
              >
                Sobre nós
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block hover:opacity-70 transition-opacity"
                onClick={toggleMenu}
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block hover:opacity-70 transition-opacity"
                onClick={toggleMenu}
              >
                FAQ
              </Link>
            </li>
          </ul>

          <div className="mt-8">
            <Button className="w-full text-base" onClick={toggleMenu}>
              Entrar em Contato
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
