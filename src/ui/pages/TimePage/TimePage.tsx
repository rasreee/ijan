import { Heading } from '@atoms';
import React from 'react';
import { Container } from './styles';
import WeekBox from '../../components/WeekView/WeekBox';

const TimePage: React.FC = () => {
	return (
		<Container>
			<Heading>Timesheet</Heading>
			<WeekBox />
		</Container>
	);
};

export default TimePage;
