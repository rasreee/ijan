import { useRouter } from 'next/router';
import useAuth from './useAuth';
import useAuthStore from './useAuthStore';
import useUserService from './useUserService';

export default function useLogin() {
	const router = useRouter();
	const store = useAuthStore();
	const { getUser } = useUserService();
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
				// console.log(
				// 	'🍗 useLogin:',
				// 	'\n got user: ' + JSON.stringify(user)
				// );
				if (!user)
					throw new Error(
						'Unhandled error for undefined user: ' +
							'\ncontext: useLogin'
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