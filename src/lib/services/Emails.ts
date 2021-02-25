import { client } from '@configs';

const collection = client.db.collection('emails');

const Emails = {
	checkExists: async (email: string): Promise<boolean> => {
		const snapshot = await collection.doc(email).get();
		return snapshot.exists;
	}
};

export default Emails;
