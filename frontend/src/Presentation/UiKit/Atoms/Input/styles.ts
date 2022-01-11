import { ThemeColors } from "Application/Themes/colors";
import styled from "styled-components";
import { InputProps } from "./interface";

export const Container = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: ${ThemeColors.primary};
  width: ${(prop) => prop.width || "100%"};
  height: ${(prop) => prop.height || "65px"};
  margin: 10px;
  margin-left: 0px;
`;

export const Label = styled.label`
  font-size: 0.9375rem;
  color: #444444;
  margin-bottom: 5px;
  background: #f7f7ff;
  z-index: 10;
  :focus {
    color: tomato;
  }
`;

export const Field = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  box-shadow: 0px 0px 2px rgba(185, 185, 185, 0.9);
  border-radius: 3px;
  border: none;
  padding: 7px;
  font-weight: 600;
  color: #515775;
  transition: ease-in all 0.2s;
  outline: none;

  :focus {
    background: #fefcfe;
    box-shadow: 0px 0px 1px 1px rgb(72, 219, 251, 0.75);
    outline: 0px 0px 4px ${ThemeColors.primary};
  }
`;
