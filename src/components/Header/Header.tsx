"use client";

import Image from "next/image";
import Link from "next/link";
import { useModalAndDropdown } from "@/app/modalAndDropdownProvider";
import { useEffect, useState } from "react";
import { MobileMenu, NavMenu } from "..";

import library from "@/../public/icons/header/library.svg";
import burgerMenu from "@/../public/icons/header/burger-menu-default.svg";
import closeBurgerMenu from "@/../public/icons/header/close-burger-menu-default.svg";

import "./Header.scss";

export default function Header() {
  const [windowWidth, setWindowWidth] = useState<number>(768);

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
              onClick={toggleMobileMenu}
            >
              <Image
                src={burgerMenu}
                alt="Burger menu icon"
                width={38}
                height={38}
              />
            </button>
          ) : (
            <button
              className="burger-menu-button"
              onClick={toggleMobileMenu}
            >
              <Image
                src={closeBurgerMenu}
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
