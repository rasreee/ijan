import { FirebaseContext } from '@contexts';
import { useContext } from 'react';

export default function useFirebaseApp() {
	const context = useContext(FirebaseContext);
	if (!context) throw new Error('FirebaseContext was invalid: ' + context);

	return context;
}
