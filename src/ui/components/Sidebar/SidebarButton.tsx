import React from 'react';
import Link from 'next/link';
import { IconButton } from '@molecules';
import { tokens } from 'ui/styled/theme';

export type Route = {
	name: string;
	path: string;
	icon: string;
};

interface ISidebarButton extends React.HTMLAttributes<HTMLDivElement> {
	selected: boolean;
	name: string;
	path: string;
	icon: string;
	onRouteClick: (path: string) => Promise<boolean>;
}

const SidebarButton: React.FC<ISidebarButton> = ({
	path,
	name,
	icon,
	selected,
	onRouteClick
}) => {
	const textProps = { color: 'white' };
	return (
		<IconButton
			text={name}
			src={icon}
			textProps={textProps}
			color={selected ? tokens.colors.gray : 'transparent'}
			style={{ padding: '24px 24px' }}
			onClick={(e) => {
				e.preventDefault();
				if (selected) return;
				onRouteClick(path);
			}}
		/>
	);
};
export default SidebarButton;
