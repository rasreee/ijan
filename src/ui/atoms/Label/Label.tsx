import { tokens } from '@theme';
import React from 'react';

import { Container } from './styles';
import { Span } from '../';
interface Props {
	value: string;
	required: boolean;
	size?: number;
}
const Label: React.FC<Props> = ({ required, value, size = 16, ...props }) => {
	return (
		<Container {...props}>
			<Span size={size}>{value}</Span>
			{required && <Span color={tokens.colors.ruby}>*</Span>}
		</Container>
	);
};

export default Label;
