import { Col } from '@bases';
import React from 'react';
import WeekView from './WeekView';
import { WeekViewProvider } from './WeekViewContext';

const WeekBox: React.FC = () => {
	return (
		<WeekViewProvider>
			<WeekView />
		</WeekViewProvider>
	);
};

export default WeekBox;
