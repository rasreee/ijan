import { Col } from '@bases';
import React from 'react';
import TimeCard from './TimeCard/TimeCard';
import WeekView from './WeekView';
import { WeekViewProvider } from './WeekViewContext';

const WeekBox: React.FC = () => {
	return (
		<Col>
			<WeekViewProvider>
				<WeekView />
			</WeekViewProvider>
			<TimeCard.Today />
		</Col>
	);
};

export default WeekBox;
