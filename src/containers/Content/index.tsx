import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

interface Props extends HTMLAttributes<HTMLDivElement> { children: any }

const Content: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
};

export default Content;
