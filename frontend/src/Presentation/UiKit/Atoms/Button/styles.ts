import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { ButtonPropTypes } from "./interface";
import { ThemeColors } from "Application/Themes/colors";

export const ButtonContainer = styled(Button)<ButtonPropTypes>`
  && {
    color: white;
    background: ${ThemeColors.primary};
    width: ${(prop) => prop.width || "100%"};
    height: ${(prop) => prop.height || "40px"};

    span {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      font-size: 14px;
    }
    :hover {
      background: ${ThemeColors.primarytwo};
      color: white;
    }
  }
`;
