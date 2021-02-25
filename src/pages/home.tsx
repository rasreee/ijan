import { Loading } from '@atoms';
import { Page } from '@containers';
import { useAuthStore } from '@hooks';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Home = observer(() => {
	const router = useRouter();
	const store = useAuthStore();

	if (!store.currentUser) {
		router.push('/');
		return null;
	}

	let component = <Loading />;
	if (store.currentUser) {
		component = (
			<>
				<Page.Heading>Employee Portal | Home</Page.Heading>
				<Page.Description>
					Welcome back {store.currentUser.firstName}
				</Page.Description>
			</>
		);
	}

	return <Page title="Employee Portal | Home">{component}</Page>;
});
export default Home;
