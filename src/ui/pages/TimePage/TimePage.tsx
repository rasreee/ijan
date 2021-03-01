import { Heading } from '@atoms';
import React from 'react';
import { Container } from './styles';
import WeekView from '@components/WeekView';
import TimePageContent from './TimePageContent';
import { useTimesStore } from '@hooks/data';

interface ITimePage {
	currentUser: User;
}

const TimePage: React.FC<ITimePage> = ({ currentUser }) => {
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
