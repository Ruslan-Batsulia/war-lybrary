"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import library from "@/../public/icon/library.svg";
import "./Header.scss";

type NavLinkType = {
  pathPage: string;
  title: string;
  id: number;
};

const navLink: NavLinkType[] = [
  { pathPage: "/armory", title: "Зброярня", id: 1, },
  { pathPage: "/missions", title: "Місії", id: 2, },
  { pathPage: "/achievements", title: "Досягнення", id: 3, },
  { pathPage: "/season", title: "Сезон", id: 4, },
];

export default function Header() {
  const path = usePathname();
  
  return (
    <header className="header">
      <div className="container header__container">
        <Link href="/" className="header__icon">
          <Image src={library} alt="library icon" height={50} />
        </Link>

        <ul className="header__list">
          {
            navLink.map((e) => {
              return (
                <li key={e.id} className="list__item">
                  <Link href={e.pathPage} className={`${
                    path === e.pathPage ?
                    "active-link" : "default-link"
                  }`}>
                    {e.title}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </header>
  );
}
