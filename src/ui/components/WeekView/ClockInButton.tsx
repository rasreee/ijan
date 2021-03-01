import { Button } from '@atoms';
import React from 'react';
import useWeekView from './useWeekView';

interface IClockInButton {
	clockedIn: boolean;
	onClick: () => boolean;
}

const IClockInButton: React.FC<IClockInButton> = ({ clockedIn, onClick }) => {
	return (
		<Button
			primary
			text={clockedIn ? 'Clock out' : 'Clock in'}
			onClick={onClick}
		/>
	);
};

export default IClockInButton;
