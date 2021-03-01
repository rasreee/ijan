import { ErrorMessage, Loading } from '@atoms';
import TimesStore from '@stores/TimesStore';
import { observer } from 'mobx-react';
import React from 'react';
import { TodayContainer } from './styles';
import TimeItem from './TimeItem';
interface ITimeCardToday {
	times: TimesStore;
}

const TimeCardToday: React.FC<ITimeCardToday> = ({ times }) => {
	if (times.loading) {
		return (
			<TodayContainer>
				<Loading />
			</TodayContainer>
		);
	} else if (times.error) {
		return (
			<TodayContainer>
				<ErrorMessage text={times.errorMessage} />
			</TodayContainer>
		);
	}
	return (
		<TodayContainer>
			{times.list.map((time) => (
				<TimeItem key={time.id} {...time} />
			))}
		</TodayContainer>
	);
};

export default observer(TimeCardToday);
