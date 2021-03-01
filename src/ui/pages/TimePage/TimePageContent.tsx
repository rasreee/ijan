import WeekView from '@components/WeekView';
import { WeekViewProvider } from '@components/WeekView/WeekViewContext';
import React from 'react';

const TimePageContent: React.FC = () => {
	return (
		<WeekViewProvider>
			<WeekView />
		</WeekViewProvider>
	);
};

export default TimePageContent;
