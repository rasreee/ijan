import React from 'react';

import { Container } from './styles';
import Today from './Today';
import useWeekView from './useWeekView';
import ClockInOrOutButton from './ClockInOrOutButton';
import TimeCard from './TimeCard/TimeCard';
import { observer } from 'mobx-react';

const WeekView: React.FC = () => {
	const vm = useWeekView();
	return (
		<Container>
			<Today />
			<ClockInOrOutButton />
			<TimeCard />
		</Container>
	);
};

export default observer(WeekView);
