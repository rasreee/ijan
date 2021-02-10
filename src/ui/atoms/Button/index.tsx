import React from "react";

import {
  PrimaryContainer,
  SecondaryContainer,
  Label,
  DisabledContainer,
} from "./styles";
interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: any;
  primary?: boolean;
  disabled?: boolean;
}
export default function Button({
  children,
  primary = false,
  disabled = false,
  ...props
}: Props) {
  let Container = primary ? PrimaryContainer : SecondaryContainer;
  if (disabled) Container = DisabledContainer;
  return <Container {...props}>{children}</Container>;
}

interface ButtonProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: any;
}

Button.Label = function ButtonLabel({ children, ...props }: ButtonProps) {
  return <Label {...props}>{children}</Label>;
};
