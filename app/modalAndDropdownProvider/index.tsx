"use client";

import { useContext, createContext } from "react";
import { usePopUp } from "@/common";

type ModalAndDropdownContextType = {
  isOpenMobileMenu: boolean;
  toggleMobileMenu: () => void;
}

const ModalAndDropdownContext = createContext<any>({});

export const ModalAndDropdownProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {
    isOpenMobileMenu,
    toggleMobileMenu,
  } = usePopUp();

  const contextValues: ModalAndDropdownContextType = {
    isOpenMobileMenu,
    toggleMobileMenu,
  };

  return (
    <ModalAndDropdownContext.Provider value={contextValues}>
      {children}
    </ModalAndDropdownContext.Provider>
  );
}

export const useModalAndDropdown = () => useContext(ModalAndDropdownContext);
