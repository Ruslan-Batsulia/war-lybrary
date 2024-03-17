"use client";

import { useCallback, useEffect, useState } from "react";

const usePopUp = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);

  const toggleMobileMenu = useCallback(() => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
  }, [isOpenMobileMenu]);

  useEffect(() => {
    if (isOpenMobileMenu) {
      const paddingOffset = window.innerWidth - document.body.offsetWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${paddingOffset}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }
  }, [isOpenMobileMenu]);

  return {
    isOpenMobileMenu,
    toggleMobileMenu,
  };
}

export default usePopUp;
