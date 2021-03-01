import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useStores from './useStores';

export default function useAuthStore() {
	const { pathname, push } = useRouter();
	const { authStore } = useStores();
	if (!authStore)
		throw new Error(
			'useAuthStore() must be called within AuthStoreProvider'
		);
	useEffect(() => {
		if (!authStore.currentUser) {
			if (pathname === '/home') {
				push('/');
			}
		}
	}, [authStore.currentUser, pathname]);
	return authStore;
}
