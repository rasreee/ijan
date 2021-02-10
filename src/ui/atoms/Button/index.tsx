import React from "react";

import { Container, Label } from "./styles";
interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: any;
}
export default function Button({ children, ...props }: Props) {
  return <Container {...props}>{children}</Container>;
}

interface ButtonProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: any;
}

Button.Label = function ButtonLabel({ children, ...props }: ButtonProps) {
  return <Label {...props}>{children}</Label>;
};
