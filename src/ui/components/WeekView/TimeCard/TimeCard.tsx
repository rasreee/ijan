import React, { HTMLAttributes } from 'react';

import { Container } from './styles';
import TimeCardToday from './TimeCardToday';

interface ITimeCard extends HTMLAttributes<HTMLDivElement> {}

const TimeCard = ({ children }: ITimeCard) => {
	return <Container>{children}</Container>;
};

TimeCard.Today = TimeCardToday;

export default TimeCard;
