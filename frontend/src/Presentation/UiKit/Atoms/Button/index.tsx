import React from "react";
import { ButtonPropTypes } from "./interface";
import { ButtonContainer } from "./styles";

function Button({ text, icon, type, ...rest }: ButtonPropTypes) {
  return (
    <ButtonContainer type={type} {...rest}>
      {text && <span>{text}</span>}
      {icon && <span>{icon}</span>}
    </ButtonContainer>
  );
}

export default Button;
