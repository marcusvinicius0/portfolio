"use client";
import Link from "next/link";
import React from "react";
import ThemeSwitcher from "./themeSwitcher";

export default function Header() {

  return (
    <header className="w-full h-fit p-4 shadow-sm sticky top-0 z-50 bg-white dark:bg-[#121212]">
      <nav>
        <ul className="flex justify-center gap-8 text-sm font-semibold dark:text-white">
          <li className="cursor-pointer">
            <Link href="#inicio">Início</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="#inicio">Projetos</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="#links">Links</Link>
          </li>
        </ul>
      </nav>

      <ThemeSwitcher />
    </header>
  );
}
