import { Button } from '@atoms';
import React from 'react';
import useWeekView from './useWeekView';

const ClockInOrOutButton: React.FC = () => {
	const vm = useWeekView();
	return <Button primary text={vm.buttonText} onClick={vm.toggle} />;
};

export default ClockInOrOutButton;
