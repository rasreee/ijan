import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import useAuth from './useAuth';
import useAuthStore from './useAuthStore';
import useUserService from './useUserService';

export default function useLogin() {
	const [path, setPath] = useState<string | undefined>(undefined);
	const router = useRouter();

	useEffect(() => {
		if (path) {
			router.push(path);
		}
	}, [path]);

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
				if (user.firstName && user.lastName) {
					setPath('/home');
				} else {
					setPath('/welcome');
				}
			} catch (err) {
				console.log('Error: ' + err);
				throw err;
			}
		}
	};
}
