import { Button } from '@atoms';
import React, { useEffect, useState } from 'react';

interface IClockInButton {
	text: string;
	onIn: () => Promise<void>;
	onOut: () => Promise<void>;
}

const ClockInButton: React.FC<IClockInButton> = ({ text, onOut, onIn }) => {
	const [loading, setLoading] = useState(false);
	const clockedIn = text === 'CLOCK OUT';

	useEffect(() => {
		return () =>
			console.log(
				'ClockInButton: ',
				clockedIn ? 'clocked IN' : 'clocked OUT'
			);
	}, [text]);

	const handleClick = async (e) => {
		e.preventDefault();
		setLoading(true);
		clockedIn ? await onOut() : await onIn();
		setLoading(false);
	};

	return (
		<Button
			primary
			text={!loading ? text : 'loading...'}
			onClick={handleClick}
			style={{
				width: '120px',
				height: '36px',
				fontSize: '14px',
				padding: '8px 10px'
			}}
		/>
	);
};

export default ClockInButton;
