import { AuthStoreContext } from '@contexts';
import { useContext } from 'react';

export default function useAuthStore() {
	const store = useContext(AuthStoreContext);
	if (!store)
		throw new Error(
			'useAuthStore() must be called within AuthStoreProvider'
		);

	return store;
}
