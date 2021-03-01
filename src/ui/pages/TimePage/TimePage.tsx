import { Heading } from '@atoms';
import React from 'react';
import { Container } from './styles';
import WeekView from '@components/WeekView';
import TimePageContent from './TimePageContent';

const TimePage: React.FC = () => {
	return (
		<Container>
			<Heading>Timesheet</Heading>
			<TimePageContent>
				<WeekView />
			</TimePageContent>
		</Container>
	);
};

export default TimePage;
