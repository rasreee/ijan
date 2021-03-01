import { useRootStore } from '@contexts/RootStoreContext';

export default function useTimesStore() {
	const { times } = useRootStore();
	return times;
}
