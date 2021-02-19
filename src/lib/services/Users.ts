import { client } from '@configs';

const collection = client.db.collection('users');

const Users = {
	create: async ({
		id,
		firstName,
		lastName,
		createdAt,
		lastActive
	}: User) => {
		const snapshot = await collection.doc(id).get();
		if (snapshot.exists) return;
		return collection
			.doc(id)
			.set({ firstName, lastName, lastActive, createdAt });
	}
};

export default Users;
