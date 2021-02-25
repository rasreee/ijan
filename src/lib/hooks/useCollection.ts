import useFirestore from './useFirestore';

export default function useCollection(name: string) {
	const app = useFirestore();
	return app.collection(name);
}
