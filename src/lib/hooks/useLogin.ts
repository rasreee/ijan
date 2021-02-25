import { useRouter } from 'next/router';
import useAuth from './useAuth';
import useAuthStore from './useAuthStore';
import useGetUser from './useGetUser';

export default function useLogin() {
	const router = useRouter();
	const store = useAuthStore();
	const { getUser } = useGetUser();
	const auth = useAuth();
	return {
		login: async (email: string, password: string) => {
			let userId: string | null = null;
			try {
				const creds = await auth.signInWithEmailAndPassword(
					email,
					password
				);
				if (creds.user) {
					userId = creds.user.uid;
				}
			} catch (err) {
				console.log(
					'🎇 Error on auth.signInWithEmailAndPassword: ' + err,
					err.stack
				);
				throw err;
			}

			if (!userId) throw new Error('Error: user credentials invalid');

			try {
				const user = await getUser(userId);
				console.log(
					'🍗 useLogin:',
					'\n got user: ' + JSON.stringify(user)
				);
				store.setCurrentUser(user);
				router.push('/home');
			} catch (err) {
				console.log('Error: ' + err);
				throw err;
			}
		}
	};
}
