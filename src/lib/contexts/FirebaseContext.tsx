import firebase from 'firebase';
import { createContext, ReactNode } from 'react';

export type IFirebaseContext = firebase.app.App;

const FirebaseContext = createContext<IFirebaseContext | undefined>(undefined);

export default FirebaseContext;

export function FirebaseProvider({ children }: { children: ReactNode }) {
	const app = initializeApp();
	return (
		<FirebaseContext.Provider value={app}>
			{children}
		</FirebaseContext.Provider>
	);
}

let _instance: firebase.app.App;

function initializeApp() {
	if (_instance) return _instance;
	if (!firebase.apps.length) {
		_instance = firebase.initializeApp({
			apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
			authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
			projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
			storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
			messagingSenderId:
				process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
			appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
		});
	} else {
		_instance = firebase.app();
	}
	return _instance;
}
