import React from 'react';
import { IconLink } from '@molecules';

import { Container, StyledHeader, StyledNav } from './styles';
import { tokens } from '@theme';

const Header: React.FC = ({ children }) => {
	return (
		<Container>
			<StyledHeader>
				<IconLink src={tokens.iconPaths.miniBrand} />
				<StyledNav>{children}</StyledNav>
			</StyledHeader>
		</Container>
	);
};

export default Header;
