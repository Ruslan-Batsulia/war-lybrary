"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import library from "@/../public/icon/library.svg";
import "./Header.scss";

type NavLinkType = {
  link: string;
  item: string;
  id: number;
};

const navLink: NavLinkType[] = [
  { link: "/armory", item: "Зброярня", id: 1, },
  { link: "/missions", item: "Місії", id: 2, },
  { link: "/achievements", item: "Досягнення", id: 3, },
  { link: "/season", item: "Сезон", id: 4, },
];

export default function Header() {
  const path = usePathname();
  
  return (
    <header className="header">
      <div className="container header__container">
        <Link href="/" className="header__icon">
          <Image src={library} alt="library icon" />
        </Link>

        <ul className="header__list">
          {
            navLink.map((
              {link, item, id}: {link: string; item: string; id: number}) => {
              return (
                <li key={id} className="list__item">
                  <Link href={link} className={`${
                    path === link ? "active-link" : "default-link"
                  }`}>
                    {item}
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
