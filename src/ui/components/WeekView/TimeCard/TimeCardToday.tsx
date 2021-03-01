import TimesStore from '@stores/TimesStore';
import { observer } from 'mobx-react';
import React from 'react';
import { TodayContainer } from './styles';
import TimeItem from './TimeItem';
interface ITimeCardToday {
	times: TimesStore;
}

const TimeCardToday: React.FC<ITimeCardToday> = ({ times }) => {
	return (
		<TodayContainer>
			{times.list.map((time) => (
				<TimeItem key={time.id} {...time} />
			))}
		</TodayContainer>
	);
};

export default observer(TimeCardToday);
