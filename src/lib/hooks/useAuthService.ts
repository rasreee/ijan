import useAuth from './useAuth';
import useAuthStore from './useAuthStore';

export default function useAuthService() {
	const auth = useAuth();
	const store = useAuthStore();
	return {
		logout: () => auth.signOut().then(() => store.setCurrentUser(null))
	};
}
