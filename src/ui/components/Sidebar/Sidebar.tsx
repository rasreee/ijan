import { IconLink } from '@molecules';
import { tokens } from '@theme';
import { ROUTES } from '@constants';
import React, { MouseEventHandler } from 'react';

import { Container } from './styles';
import SidebarButton, { Route } from './SidebarButton';
import { Spacing } from '@atoms';
import { equal } from '@shims';

interface ISidebar {
	path: string;
	onSelect: (path: string) => void;
}

const Sidebar: React.FC<ISidebar> = ({ path, onSelect }) => {
	const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
		const nextPath = e.currentTarget.nodeName;
		if (equal(path, nextPath)) return;
		console.log('💜 PATH: ', path, '\n');
		onSelect(nextPath);
	};
	return (
		<Container>
			<IconLink src={tokens.iconPaths.miniBrand} />
			<Spacing height={24} />
			{ROUTES.map((route: Route) => (
				<SidebarButton
					role="button"
					key={route.path}
					{...route}
					id={route.path}
					selected={equal(path, route.path)}
					onClick={handleClick}
				/>
			))}
		</Container>
	);
};

export default Sidebar;
