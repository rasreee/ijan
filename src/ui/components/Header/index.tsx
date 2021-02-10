import React from "react";
import { Spacing } from "@atoms";
import { IconLink, NavLink } from "@molecules";

import { Container, StyledHeader, StyledNav } from "./styles";
import { tokens } from "@theme";

const Header: React.FC = () => {
  return (
    <Container>
      <StyledHeader>
        <IconLink src={tokens.iconPaths.brand} />
        <StyledNav>
          <NavLink href="/">Home</NavLink>
          <Spacing height={20} />
          <NavLink href="/about">About</NavLink>
          <Spacing height={20} />
          <NavLink href="/employees">Employees</NavLink>
          <Spacing height={20} />
          <NavLink href="/contact">Contact</NavLink>
        </StyledNav>
      </StyledHeader>
    </Container>
  );
};

export default Header;
