import React from "react";
import { Spacing } from "@atoms";
import { IconLink, NavLink } from "@molecules";

import { Container, StyledHeader, StyledNav } from "./styles";
import { tokens } from "@theme";

const Header: React.FC = () => {
  return (
    <Container>
      <StyledHeader>
        <IconLink src={tokens.iconPaths.miniBrand} />
        <StyledNav>
          <NavLink href="/about">About</NavLink>
          <Spacing height={75} />
          <NavLink href="/employee-portal">Employee Portal</NavLink>
          <Spacing height={75} />
          <NavLink href="/contact">Contact</NavLink>
        </StyledNav>
      </StyledHeader>
    </Container>
  );
};

export default Header;
