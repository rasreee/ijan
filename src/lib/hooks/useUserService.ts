import useAuthStore from './useAuthStore';
import useCollection from './useCollection';

export default function useUserService() {
	const collection = useCollection('users');
	const { currentUser, setCurrentUser } = useAuthStore();
	return {
		getUser: async (id: string) => {
			const snapshot = await collection.doc(id).get();
			const data = snapshot.data();
			if (!snapshot.exists || !data) {
				return null;
			}

			return {
				firstName: data.firstName,
				lastName: data.lastName,
				lastActive: data.lastActive,
				createdAt: data.createdAt,
				id: id
			};
		},
		createUser: async ({ id, email }: { id: string; email: string }) => {
			const now = Date.now();
			try {
				const data = {
					firstName: '',
					lastName: '',
					lastActive: now,
					createdAt: now,
					phoneNumber: ''
				};
				await collection.doc(id).set(data);
				return { ...data, id };
			} catch (err) {
				throw err;
			}
		},
		updateUser: async (props: UpdateUserProps): Promise<void> => {
			const { id, ...data } = props;

			if (!currentUser)
				throw new Error(
					'Current user cannot be updated because it is undefined'
				);

			try {
				await collection.doc(id).update(data);
				setCurrentUser({
					id,
					firstName: data.firstName ?? currentUser.firstName,
					lastName: data.lastName ?? currentUser.lastName,
					phoneNumber: data.phoneNumber ?? currentUser.phoneNumber,
					lastActive: data.lastActive ?? currentUser.lastActive,
					createdAt: currentUser.createdAt
				});
			} catch (err) {
				throw err;
			}
		}
	};
}

type UpdateUserProps = {
	id: string;
	firstName?: string;
	lastName?: string;
	lastActive?: number;
	phoneNumber?: string;
};
