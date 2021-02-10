import Link from "next/link";
import React from "react";

import { Container } from "./styles";

interface Props {
  href: string;
  children: any;
}

const NavLink: React.FC<Props> = ({ href, children }) => {
  return (
    <Container>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </Container>
  );
};

export default NavLink;
