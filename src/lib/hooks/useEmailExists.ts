import useCollection from './useCollection';

export default function useEmailExists() {
	const collection = useCollection('emails');
	return {
		emailExists: async (email: string) => {
			try {
				const snapshot = await collection.doc(email).get();
				return snapshot.exists;
			} catch (err) {
				console.log('🍥 Error on useEmailExists:', '\nemail: ', email);
				return false;
			}
		}
	};
}
