import React from 'react';

import { Container } from './styles';
import Today from './Today';
import useWeekView from './useWeekView';
import ClockInButton from './ClockInButton';
import TimeCard from './TimeCard/TimeCard';
import { observer } from 'mobx-react';

const WeekView: React.FC = () => {
	const vm = useWeekView();
	return (
		<Container>
			<Today />
			<ClockInButton clockedIn={vm.clockedIn} onClick={vm.toggle} />
			<TimeCard>
				<TimeCard.Today />
			</TimeCard>
		</Container>
	);
};

export default observer(WeekView);
