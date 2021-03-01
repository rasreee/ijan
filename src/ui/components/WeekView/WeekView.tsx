import React from 'react';

import { Container, Top } from './styles';
import Today from './Today';
import useWeekView from './useWeekView';
import ClockInButton from './ClockInButton';
import TimeCard from './TimeCard/TimeCard';
import { observer } from 'mobx-react';
import { Row } from '@bases';

const WeekView: React.FC = () => {
	const vm = useWeekView();
	return (
		<Container>
			<Top>
				<Today />
				<ClockInButton clockedIn={vm.clockedIn} onClick={vm.toggle} />
			</Top>
			<TimeCard.Today />
		</Container>
	);
};

export default observer(WeekView);
