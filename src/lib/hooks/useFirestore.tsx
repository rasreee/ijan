import useFirebaseApp from './useFirebaseApp';

export default function useFirestore() {
	const app = useFirebaseApp();
	return app.firestore();
}
