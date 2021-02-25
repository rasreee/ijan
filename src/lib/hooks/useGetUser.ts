import useCollection from './useCollection';

export default function useGetUser() {
	const collection = useCollection('users');
	return {
		getUser: async (id: string) => {
			const snapshot = await collection.doc(id).get();
			const data = snapshot.data();
			if (!snapshot.exists || !data)
				throw new Error('Could not find user: ' + id);

			return {
				firstName: data.firstName,
				lastName: data.lastName,
				lastActive: data.lastActive,
				createdAt: data.createdAt,
				id: id
			};
		}
	};
}
