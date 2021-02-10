import React from "react";
import { Spacing } from "../../atoms";
import IconLink from "../../molecules/IconLink";
import NavLink from "../../molecules/NavLink";

import { Container, StyledHeader, StyledNav } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <StyledHeader>
        <IconLink />
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
