import { Loading, Span } from '@atoms';
import { Page } from '@containers';
import { useAuthStore } from '@hooks';
import { observer } from 'mobx-react';
import React from 'react';

const Home = observer(() => {
	const { currentUser } = useAuthStore();

	return (
		<Page title="Employee Portal | Home">
			{currentUser ? (
				<div>
					<Page.Description>
						Welcome back {currentUser.firstName}
					</Page.Description>
					<Page.Section>
						<Span>You haven't clocked in today.</Span>
					</Page.Section>
				</div>
			) : (
				<Loading />
			)}
		</Page>
	);
});
export default Home;
