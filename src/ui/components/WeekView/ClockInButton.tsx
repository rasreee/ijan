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
			text={clockedIn ? 'CLOCK OUT' : 'CLOCK IN'}
			onClick={onClick}
			style={{
				width: '120px',
				height: '36px',
				fontSize: '14px',
				padding: '8px 10px'
			}}
		/>
	);
};

export default IClockInButton;
