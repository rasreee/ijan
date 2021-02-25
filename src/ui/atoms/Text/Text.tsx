import { tokens } from '@theme';
import React from 'react';

import { Container } from './styles';
interface Props extends React.HTMLAttributes<HTMLSpanElement> {
	value: string;
	color?: string;
	size?: number;
	error?: boolean;
}
const Text: React.FC<Props> = ({
	value,
	color = tokens.colors.dark,
	size,
	error = false
}) => {
	return (
		<Container size={size} color={error ? tokens.colors.error : color}>
			{value}
		</Container>
	);
};

export default Text;
