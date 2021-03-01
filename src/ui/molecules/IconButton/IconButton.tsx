import { Icon, Spacing, Span } from '@atoms';
import React, { HTMLAttributes } from 'react';

import { Container } from './styles';
interface IIconButton extends HTMLAttributes<HTMLDivElement> {
	text: string;
	src: string;
	textProps: { color: string; paddingLeft?: number };
	color?: string;
}

const IconButton: React.FC<IIconButton> = ({
	src,
	text,
	textProps,
	...props
}) => {
	return (
		<Container role="button" {...props}>
			<Icon src={src} />
			<Spacing width={10} />
			<Span {...textProps}>{text}</Span>
		</Container>
	);
};

export default IconButton;
