import { RootStore } from '@stores';
import { enableStaticRendering } from 'mobx-react';
import { createContext, ReactNode, useContext } from 'react';

enableStaticRendering(typeof window === 'undefined');

let store: RootStore;
const RootStoreContext = createContext<RootStore | undefined>(undefined);
export default RootStoreContext;

export function useRootStore() {
	const context = useContext(RootStoreContext);
	if (context === undefined) {
		throw new Error('useRootStore must be used within RootStoreProvider');
	}

	return context;
}

export function RootStoreProvider({ children }: { children: ReactNode }) {
	const _store = store ?? new RootStore();

	// Create the store once in the client
	if (!store) store = _store;

	return (
		<RootStoreContext.Provider value={store}>
			{children}
		</RootStoreContext.Provider>
	);
}

// function initializeStore(): RootStore {
// 	const _store = store ?? new RootStore();

// 	// For SSG and SSR always create a new store
// 	if (typeof window === 'undefined') return _store;
// 	// Create the store once in the client
// 	if (!store) store = _store;

// 	return _store;
// }
