import useStores from './useStores';

export default function useAuthStore() {
	const { authStore } = useStores();
	if (!authStore)
		throw new Error(
			'useAuthStore() must be called within AuthStoreProvider'
		);

	return authStore;
}
