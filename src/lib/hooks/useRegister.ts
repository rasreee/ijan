import { useRouter } from 'next/router';
import useAuth from './useAuth';
import useAuthStore from './useAuthStore';
import useUserService from './useUserService';

export default function useRegister() {
	const router = useRouter();
	const auth = useAuth();
	const store = useAuthStore();
	const { getUser, createUser } = useUserService();
	return {
		register: async (email: string, password: string) => {
			let id: string | null = null;
			try {
				const creds = await auth.createUserWithEmailAndPassword(
					email,
					password
				);
				if (creds.user) {
					id = creds.user.uid;
				}
			} catch (err) {
				console.log('Error: ' + err);
				throw err;
			}

			if (!id) throw new Error('Error: user credentials invalid');

			try {
				let result = await getUser(id);
				// console.log(
				// 	'🍗 useRegister:',
				// 	'\n got user: ' + JSON.stringify(user)
				// );
				if (!result) {
					result = await createUser({ id, email });
				}

				store.setCurrentUser(result);
				router.push('/welcome');
			} catch (err) {
				console.log('Error: ' + err);
				throw err;
			}
		}
	};
}
