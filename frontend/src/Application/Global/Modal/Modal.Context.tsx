import { useState } from "react";
import { createContext } from "react";
import { IModalProps } from "./interface";

export const ModalContext = createContext({} as IModalProps);

export const ModalProvider = ({ children }: IModalProps) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <ModalContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </ModalContext.Provider>
  );
};
