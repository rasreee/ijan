import { useRouter } from 'next/router';
import useAuth from './useAuth';
import useAuthStore from './useAuthStore';
import useGetUser from './useGetUser';

export default function useRegister() {
	const router = useRouter();
	const auth = useAuth();
	const store = useAuthStore();
	const { getUser } = useGetUser();
	return {
		register: async (email: string, password: string) => {
			let userId: string | null = null;
			try {
				const creds = await auth.createUserWithEmailAndPassword(
					email,
					password
				);
				if (creds.user) {
					userId = creds.user.uid;
				}
			} catch (err) {
				console.log('Error: ' + err);
				throw err;
			}

			if (!userId) throw new Error('Error: user credentials invalid');

			try {
				const user = await getUser(userId);
				store.setCurrentUser(user);
				router.push('/home');
			} catch (err) {
				console.log('Error: ' + err);
				throw err;
			}
		}
	};
}
