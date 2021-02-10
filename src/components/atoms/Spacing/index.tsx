import React from "react";

import { Container } from "./styles";

type Props = {
  height?: number;
  width?: number;
};

const Spacing: React.FC<Props> = ({ height = 0, width = 0 }) => {
  return <Container height={height} width={width}></Container>;
};

export default Spacing;
