import { Page } from '@containers';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import useSWR from 'swr';

type HomeData = {
	message?: string;
	user: User;
};

type HomeError = { message: string };

const Home: NextPage = () => {
	const router = useRouter();
	const { userId } = router.query;
	const { data, error } = useSWR<HomeData, HomeError>(
		userId ? '/api/user/' + userId : null
	);

	let component = <div>loading...</div>;
	if (error) {
		component = <div>Error: {error.message}</div>;
	}
	if (data) {
		<>
			<Page.Heading>Employee Portal | Home</Page.Heading>
			<Page.Description>
				Welcome back {data.user.firstName}.
			</Page.Description>
		</>;
	}

	return <Page title="Employee Portal | Home">{component}</Page>;
};
export default Home;
