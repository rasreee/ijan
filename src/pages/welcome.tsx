import { Page } from '@containers';
import { useAuthStore } from '@hooks';
import { useRouter } from 'next/router';
import React from 'react';

const WelcomePage = () => {
	const authStore = useAuthStore();

	const router = useRouter();
	if (!authStore.currentUser) router.push('/');

	return (
		<Page
			title="Welcome"
			heading="Welcome!"
			description="Almost done getting set up - fill out the following and then you're done."
		>
			hi
		</Page>
	);
};

export default WelcomePage;
