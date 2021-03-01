import { Span } from '@atoms';
import Time from '@models/Time';
import { getTimeString } from '@utils/date';
import React from 'react';
import { TimeItemContainer } from './styles';

const TimeItem: React.FC<Time> = (time: Time) => {
	return (
		<TimeItemContainer>
			<Span>Start: {getTimeString(time.start)}</Span>
			<Span>End: {getTimeString(time.end)}</Span>
		</TimeItemContainer>
	);
};

export default TimeItem;
