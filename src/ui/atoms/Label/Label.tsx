import { tokens } from '@theme';
import React from 'react';

import { Container } from './styles';
import { Text } from '../';
interface Props {
	value: string;
	required: boolean;
	size?: number;
}
const Label: React.FC<Props> = ({ required, value, size = 16, ...props }) => {
	return (
		<Container {...props}>
			<Text value={value} size={size} />
			{required && <Text color={tokens.colors.ruby} value="*" />}
		</Container>
	);
};

export default Label;
