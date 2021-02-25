import useFirebaseApp from './useFirebaseApp';

export default function useAuth() {
	const app = useFirebaseApp();
	return app.auth();
}
