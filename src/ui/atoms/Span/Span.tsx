import { tokens } from '@theme';
import React from 'react';

import { Container } from './styles';
interface Props extends React.HTMLAttributes<HTMLSpanElement> {
	color?: string;
	paddingLeft?: number;
	size?: number;
	error?: boolean;
}
const Span: React.FC<Props> = ({
	children,
	color = tokens.colors.dark,
	error = false,
	paddingLeft,
	...props
}) => {
	return (
		<Container color={error ? tokens.colors.error : color} {...props}>
			{children}
		</Container>
	);
};

export default Span;
