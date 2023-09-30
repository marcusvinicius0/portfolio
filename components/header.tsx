import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="w-full h-fit p-4 shadow-sm sticky top-0 bg-white z-50">
      <nav>
        <ul className="flex justify-center gap-8 text-gray-900 text-sm font-semibold">
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
    </header>
  );
}
