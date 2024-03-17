"use client";

import Image from "next/image";
import Link from "next/link";
import { useModalAndDropdown } from "@/app/modalAndDropdownProvider";
import { useEffect, useState } from "react";
import { MobileMenu, NavMenu } from "..";

import library from "@/../public/icons/header/library.svg";
import burgerMenuDefault from "@/../public/icons/header/burger-menu-default.svg";
import burgerMenuFocus from "@/../public/icons/header/burger-menu-focus.svg";
import closeBurgerMenuDefault from "@/../public/icons/header/close-burger-menu-default.svg";
import closeBurgerMenuFocus from "@/../public/icons/header/close-burger-menu-focus.svg";

import "./Header.scss";

export default function Header() {
  const [windowWidth, setWindowWidth] = useState<number>(768);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const { isOpenMobileMenu, toggleMobileMenu } = useModalAndDropdown();

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (windowWidth >= 768 && isOpenMobileMenu) {
      toggleMobileMenu(false);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpenMobileMenu, toggleMobileMenu, windowWidth]);

  return (
    <>
      <header className="header">
        <div className="container header__container">
          <Link
            href="/"
            className="header__icon"
            onClick={isOpenMobileMenu ? toggleMobileMenu : null}
          >
            <Image src={library} alt="library icon" />
          </Link>

          {windowWidth >= 768 && <NavMenu tabletOrDesktop={true} />}

          <div className="header__local"></div>

          {!isOpenMobileMenu ? (
            <button
              className="burger-menu-button"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={toggleMobileMenu}
            >
              <Image
                src={!isHovered ? burgerMenuDefault : burgerMenuFocus}
                alt="Burger menu icon"
                width={38}
                height={38}
              />
            </button>
          ) : (
            <button
              className="burger-menu-button"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={toggleMobileMenu}
            >
              <Image
                src={!isHovered ? closeBurgerMenuDefault : closeBurgerMenuFocus}
                alt="Close burger menu icon"
                width={38}
                height={38}
              />
            </button>
          )}
        </div>
      </header>

      {isOpenMobileMenu && <MobileMenu />}
    </>
  );
}
