import React from 'react';

import { Container, Top } from './styles';
import Today from './Today';
import useWeekView from './useWeekView';
import ClockInButton from './ClockInButton';
import TimeCard from './TimeCard/TimeCard';
import { observer } from 'mobx-react';

const WeekView: React.FC = () => {
	const vm = useWeekView();
	return (
		<Container>
			<Top>
				<Today />
				<ClockInButton
					text={vm.buttonText}
					onIn={vm.clockIn}
					onOut={vm.clockOut}
				/>
			</Top>
			<TimeCard.Today times={vm.times} />
		</Container>
	);
};

export default observer(WeekView);
