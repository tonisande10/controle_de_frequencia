import { useState } from "react";
import { createContext } from "react";
import { IAuthProps } from "./interface";

export const AuthContext = createContext({} as IAuthProps);

export const AuthProvider = ({ children }: IAuthProps) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
