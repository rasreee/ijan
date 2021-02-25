import { AuthStore } from '@stores';
import React, { ReactNode } from 'react';

const AuthStoreContext = React.createContext<AuthStore | undefined>(undefined);

export default AuthStoreContext;

export function AuthStoreProvider({ children }: { children: ReactNode }) {
	const store = new AuthStore();
	return (
		<AuthStoreContext.Provider value={store}>
			{children}
		</AuthStoreContext.Provider>
	);
}
