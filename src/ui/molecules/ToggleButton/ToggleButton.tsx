import React from "react";

import { Container, Label } from "./styles";
interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  disabled: boolean;
  onToggle: () => void;
  label: string;
}
function ToggleButton({ disabled, onToggle, label }: Props) {
  return (
    <Container
      onClick={(e) => {
        e.preventDefault();
        if (disabled) onToggle();
      }}
      disabled={disabled}
      primary
    >
      <Label>{label}</Label>
    </Container>
  );
}

export default ToggleButton;
