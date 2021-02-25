import useCollection from './useCollection';

export default function useEmailExists() {
	const collection = useCollection('email');
	return {
		emailExists: async (email: string) => {
			const snapshot = await collection.doc(email).get();
			return snapshot.exists;
		}
	};
}
