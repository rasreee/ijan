import Portal from '@containers/Portal';
import TimePage from '@pages/TimePage';
import React from 'react';

const Timesheet: React.FC = () => {
	return (
		<Portal>
			<TimePage />
		</Portal>
	);
};

export default Timesheet;
