import { ErrorMessage, Loading } from '@atoms';
import { useTimesStore } from '@hooks/data';
import Time from '@models/Time';
import TimesStore from '@stores/TimesStore';
import { observer } from 'mobx-react';
import React from 'react';
import { TableViewContainer } from './styles';
import TimeItem from './TimeItem';

interface ITableView {
	list: Time[];
}

const TableView: React.FC<ITableView> = ({ list }) => {
	return (
		<TableViewContainer>
			{list.map((time) => (
				<TimeItem key={time.id} {...time} />
			))}
		</TableViewContainer>
	);
};

export default TableView;
