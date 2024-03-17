"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useModalAndDropdown } from "@/app/modalAndDropdownProvider";

import "./NavMenu.scss";

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

type NavigationMenuPropsType = {
  tabletOrDesktop?: boolean;
};

export default function NavMenu({
  tabletOrDesktop,
}: NavigationMenuPropsType) {
  const {
    isOpenMobileMenu,
    toggleMobileMenu: closeMobileMenu,
  } = useModalAndDropdown();

  const path = usePathname();

  return (
    <nav className={tabletOrDesktop ? "nav-menu" : ""}>
      <ul className="nav-menu-list">
        {
          navLink.map((
            {link, item, id}: {link: string; item: string; id: number}) => {
            return (
              <li 
                key={id}
                className="list__item"
                onClick={isOpenMobileMenu ? closeMobileMenu : null}
              >
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
    </nav>
  );
}
