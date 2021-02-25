import useCollection from './useCollection';

export default function useUserService() {
	const collection = useCollection('users');
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
					createdAt: now
				};
				await collection.doc(id).set(data);
				return { ...data, id };
			} catch (err) {
				throw err;
			}
		}
	};
}
