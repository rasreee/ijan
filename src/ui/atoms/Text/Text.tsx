import { tokens } from "@theme";
import React from "react";

import { Container } from "./styles";
interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  value: string;
  color?: string;
}
const Text: React.FC<Props> = ({ value, color = tokens.colors.dark }) => {
  return <Container color={color}>{value}</Container>;
};

export default Text;
