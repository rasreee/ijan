import useWeekView from '@components/WeekView/useWeekView';
import { observer } from 'mobx-react';
import React from 'react';
import { TodayContainer } from './styles';

const TimeCardToday = () => {
	const vm = useWeekView();
	return (
		<TodayContainer>
			<h1>TimeCardToday</h1>
		</TodayContainer>
	);
};

export default observer(TimeCardToday);
