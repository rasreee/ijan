import React from "react";
import { Container } from "./styles";
interface Props extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  children?: any;
  size?: number;
}
const IconLink: React.FC<Props> = ({ src, size = 48, children, ...props }) => {
  return (
    <Container src={src} height={size} width={size} {...props}>
      {children}
    </Container>
  );
};

export default IconLink;
