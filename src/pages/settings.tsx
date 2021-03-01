import { AuthLayout } from '@layouts';
import SettingsPage from '@pages/SettingsPage';
import { useRouter } from 'next/router';
import React from 'react';

const Settings: React.FC = () => {
	const router = useRouter();
	return (
		<AuthLayout pathname={router.pathname} push={router.push}>
			<SettingsPage />
		</AuthLayout>
	);
};

export default Settings;
