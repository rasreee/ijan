import { useTimesStore } from '@hooks/data';
import { AuthLayout } from '@layouts';
import TimePage from '@pages/TimePage';
import { useRouter } from 'next/router';
import React from 'react';

const Timesheet: React.FC = () => {
	const router = useRouter();

	const times = useTimesStore();
	return (
		<AuthLayout pathname={router.pathname} push={router.push}>
			<TimePage />
		</AuthLayout>
	);
};

export default Timesheet;
