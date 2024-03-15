"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import library from "@/../public/icon/library.svg";
import "./Header.scss";

export default function Header() {
  const path = usePathname();
  
  return (
    <header className="header">
      <div className="container header-container">
        <Link href="/" className="header__icon">
          <Image src={library} alt="library icon" height={50} />
        </Link>

        <ul className="header__list">
          <li className="list__item">
            <Link href="/armory" className={`${path === "/armory" ? "active-link" : "default-link"}`}>Зброярня</Link>
          </li>
          <li className="list__item">
            <Link href="/missions" className={`${path === "/missions" ? "active-link" : "default-link"}`}>Місії</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
