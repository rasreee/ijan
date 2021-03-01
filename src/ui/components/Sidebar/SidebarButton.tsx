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
}

const SidebarButton: React.FC<ISidebarButton> = ({
	path,
	name,
	icon,
	selected
}) => {
	const textProps = { color: 'white' };
	return (
		<Link href={path}>
			<a>
				<IconButton
					text={name}
					src={icon}
					textProps={textProps}
					color={selected ? tokens.colors.gray : 'transparent'}
					style={{ padding: '24px 24px' }}
				/>
			</a>
		</Link>
	);
};
export default SidebarButton;
