import { tokens } from "@theme";
import React from "react";

import { Container } from "./styles";
interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  value: string;
  color?: string;
  size?: number;
}
const Text: React.FC<Props> = ({ value, color = tokens.colors.dark, size }) => {
  return (
    <Container size={size} color={color}>
      {value}
    </Container>
  );
};

export default Text;
