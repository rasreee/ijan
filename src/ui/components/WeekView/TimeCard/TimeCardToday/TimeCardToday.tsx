import useWeekView from '@components/WeekView/useWeekView';
import { observer } from 'mobx-react';
import React from 'react';

import { Container } from './styles';

const TimeCardToday = () => {
	const vm = useWeekView();
	return (
		<Container>
			<h1>TimeCardToday</h1>
		</Container>
	);
};

export default observer(TimeCardToday);
