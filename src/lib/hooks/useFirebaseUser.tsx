import firebase from 'firebase/app';
import { useState, useEffect } from 'react';

/** Auth state hook */
export default function useFirebaseUser() {
	const [user, setUser] = useState<firebase.User | null>(null);
	useEffect(() => {
		const listener = firebase
			.auth()
			.onAuthStateChanged((authUser: firebase.User | null) => {
				console.log('authUser: ' + authUser);
				setUser(authUser);
			});

		return () => listener();
	}, []);

	return { user };
}
