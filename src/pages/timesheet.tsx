import { Heading } from '@atoms';
import WeekView from '@components/WeekView';
import { WeekViewContext } from '@hooks/useWeekView';
import { useTimesStore } from '@hooks/data';
import { AuthLayout } from '@layouts';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import WeekViewModel from 'vms/WeekViewModel';

const Timesheet: React.FC = () => {
	const router = useRouter();
	const times = useTimesStore();
	const vm = new WeekViewModel({ clockedIn: false, times });

	return (
		<AuthLayout pathname={router.pathname} push={router.push}>
			<Heading>Timesheet</Heading>
			<WeekViewContext.Provider value={vm}>
				<WeekView />
			</WeekViewContext.Provider>
		</AuthLayout>
	);
};

export default observer(Timesheet);
