import { Span } from '@atoms';
import Time from '@models/Time';
import React from 'react';

const TimeItem: React.FC<Time> = (time: Time) => {
	return <Span>{JSON.stringify(time)}</Span>;
};

export default TimeItem;
