import React from 'react';

import { Container, Top } from './styles';
import Today from '../../molecules/Today';
import useWeekView from '../../../lib/hooks/useWeekView';
import ClockInButton from '../../molecules/ClockInButton';
import { observer } from 'mobx-react';
import TableView from './TableView';
import { ErrorMessage, Loading } from '@atoms';

const WeekView: React.FC = () => {
	const vm = useWeekView();
	let Component = <TableView list={vm.times.list} />;
	if (vm.times.loading) {
		return <Loading />;
	}
	if (vm.times.error) {
		return <ErrorMessage text={vm.times.errorMessage} />;
	}
	return (
		<Container>
			<Top>
				<Today />
				<ClockInButton
					text={vm.buttonText}
					onIn={vm.clockIn}
					onOut={vm.clockOut}
				/>
			</Top>
			<TableView list={vm.times.list} />
		</Container>
	);
};

export default observer(WeekView);
