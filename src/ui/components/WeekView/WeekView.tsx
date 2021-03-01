import React from 'react';

import { Container } from './styles';
import Today from './Today';
import Button from '@atoms/Button';
import { observer } from 'mobx-react';
import useWeekView from './useWeekView';

const WeekView: React.FC = () => {
	const vm = useWeekView();
	return (
		<Container>
			<Today />
			<Button primary text={vm.buttonText} onClick={vm.toggle} />
		</Container>
	);
};

export default observer(WeekView);
