import { tokens } from "@theme";
import React from "react";

import { Container } from "./styles";
import { Text } from "../";
interface Props {
  value: string;
  required: boolean;
}
const Label: React.FC<Props> = ({ required, value }) => {
  return (
    <Container>
      <Text value={value} />
      {required && <Text color={tokens.colors.ruby} value="*" />}
    </Container>
  );
};

export default Label;
