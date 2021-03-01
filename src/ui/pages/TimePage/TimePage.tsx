import { Heading } from '@atoms';
import WeekView from '@components/WeekView/WeekView';
import { WeekViewProvider } from '@components/WeekView/WeekViewContext';
import React from 'react';
import { Container } from './styles';

const TimePage: React.FC = () => {
	return (
		<Container>
			<Heading>Timesheet</Heading>
			<WeekViewProvider>
				<WeekView />
			</WeekViewProvider>
		</Container>
	);
};

export default TimePage;
