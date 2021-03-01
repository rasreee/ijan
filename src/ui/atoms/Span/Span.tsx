import { tokens } from '@theme';
import React from 'react';

import { Container } from './styles';
interface Props extends React.HTMLAttributes<HTMLSpanElement> {
	children: any;
	color?: string;
	size?: number;
	error?: boolean;
}
const Span: React.FC<Props> = ({
	children,
	color = tokens.colors.dark,
	size,
	error = false
}) => {
	return (
		<Container size={size} color={error ? tokens.colors.error : color}>
			{children}
		</Container>
	);
};

export default Span;
