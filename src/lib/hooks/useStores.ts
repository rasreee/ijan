import RootStoreContext from '@contexts/RootStoreContext';
import React from 'react';

export default function useStores() {
	const context = React.useContext(RootStoreContext);
	if (!context)
		throw new Error('useStores must be called within a RootStoreProvider');
	return context;
}
