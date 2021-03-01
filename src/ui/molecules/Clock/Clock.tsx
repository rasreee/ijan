import { getClockValue } from '@utils/date';
import React from 'react';

import { Container } from './styles';

const Clock: React.FC = () => {
	const value = getClockValue();

	return (
		<Container>
			<h3>{value}</h3>
		</Container>
	);
};

export default Clock;
