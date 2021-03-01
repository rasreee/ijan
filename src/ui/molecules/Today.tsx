import { getToday } from '@utils/date';
import React from 'react';

const Today: React.FC = () => {
	const date = getToday();
	return <h3>{date}</h3>;
};

export default Today;
