import { Loading } from '@atoms';
import { Page } from '@containers';
import { useAuthStore } from '@hooks';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';

const Home = observer(() => {
	const store = useAuthStore();

	console.log('AuthStore with user: ', store.currentUser);

	useEffect(() => {
		return () => console.log('AuthStore with user: ', store.currentUser);
	}, [store.currentUser]);

	if (!store.currentUser) {
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
