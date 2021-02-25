import useFirebaseApp from './useFirebaseApp';

export default function useCreateUser({
	id,
	firstName,
	lastName,
	createdAt,
	lastActive
}: User): Promise<User> {
	const app = useFirebaseApp();
	const collection = app.firestore().collection('users');
	const fetchData = async () => {
		const snapshot = await collection.doc(id).get();
		const data = snapshot.data();
		if (snapshot.exists && data)
			return {
				firstName: data.firstName,
				lastName: data.lastName,
				lastActive: data.lastActive,
				createdAt: data.createdAt,
				id: id
			};
		return collection
			.doc(id)
			.set({ firstName, lastName, lastActive, createdAt })
			.then(() => {
				return {
					id: id,
					firstName,
					lastName,
					lastActive,
					createdAt
				};
			});
	};
	return fetchData();
}
