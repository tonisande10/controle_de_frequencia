import React from "react";
import { InputProps } from "./interface";
import { Container, Field, Label } from "./styles";

function Input({ width, height, name, title, type, reg, ...rest }: InputProps) {
  return (
    <Container width={width} height={height}>
      <Label htmlFor={name}>{title}</Label>
      <Field id={name} name={name} type={type} {...reg} {...rest} />
    </Container>
  );
}

export { Input };
