import { Loading } from '@atoms';

import { useAuthStore } from '@hooks';
import { AuthLayout } from '@layouts';
import HomePage from '@pages/HomePage';
import HomeContent from '@pages/HomePage';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import React from 'react';

const Home = observer(() => {
	const { currentUser } = useAuthStore();
	const router = useRouter();
	return (
		<AuthLayout pathname={router.pathname} push={router.push}>
			{currentUser ? <HomePage currentUser={currentUser} /> : <Loading />}
		</AuthLayout>
	);
});
export default Home;
