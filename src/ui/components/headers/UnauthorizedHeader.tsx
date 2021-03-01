import React from 'react';
import { Spacing } from '@atoms';
import { NavLink } from '@molecules';
import Header from '@containers/Header';

const UnauthorizedHeader: React.FC = () => {
	return (
		<Header>
			<NavLink href="/">Home</NavLink>
			<Spacing height={100} />
			<NavLink href="/about">About</NavLink>
			<Spacing height={100} />
			<NavLink href="/portal">Portal</NavLink>
			<Spacing height={100} />
			<NavLink href="/contact">Contact</NavLink>
		</Header>
	);
};

export default UnauthorizedHeader;
