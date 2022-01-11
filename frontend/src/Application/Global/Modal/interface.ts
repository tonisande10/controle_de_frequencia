import { ReactNode } from "react";

export interface IModalProps {
  children?: ReactNode;
  openModal?: boolean | any;
  setOpenModal?: any;
}
