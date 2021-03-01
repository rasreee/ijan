import { Loading } from '@atoms';
import Portal from '@containers/Portal';
import { useAuthStore } from '@hooks';
import HomeContent from '@pages/HomePage';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import React from 'react';

const Home = observer(() => {
	const { currentUser } = useAuthStore();

	return (
		<Portal>
			{currentUser ? (
				<HomeContent currentUser={currentUser} />
			) : (
				<Loading />
			)}
		</Portal>
	);
});
export default Home;
