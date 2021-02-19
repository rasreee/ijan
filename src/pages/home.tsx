import { Page } from '@containers';
import { useFirebaseUser } from '@hooks';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

type HomeData = {
	message?: string;
	user: User;
};

type HomeError = { message: string };

const Home = () => {
	const { user } = useFirebaseUser();

	const { data, error } = useSWR<HomeData, HomeError>(
		user ? '/api/user/' + user.uid : null
	);

	let component = null;
	useEffect(() => {
		if (error) {
			component = <div>Error: {error.message}</div>;
		}
		if (!data) {
			component = <div>loading...</div>;
		}
		return () => console.log('data: ', data);
	}, [user, data, error]);

	if (!component && data) {
		component = (
			<>
				<Page.Heading>Employee Portal | Home</Page.Heading>
				<Page.Description>
					Welcome back {data.user.firstName}.
				</Page.Description>
			</>
		);
	}

	return <Page title="Employee Portal | Home">{component}</Page>;
};
export default Home;
